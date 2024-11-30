import { SectionType, Watcher, combinedReply, observer } from "@joker.front/core";
import { logger, remove, removeFilter } from "@joker.front/shared";
import { LOGTAG } from "../../config";

export const CHECK_ROW_KEY = Symbol("JOKER_UI_CHECK_ROW_KEY");
export class Store {
    ready = false;

    data: {
        //带层级结构的列
        columns: ColumnType[];
        //叶子节点列，按从左向右排列
        orderColumns: {
            left: ColumnType[];
            center: ColumnType[];
            right: ColumnType[];
        };
        leafColumns: {
            left: ColumnType[];
            center: ColumnType[];
            right: ColumnType[];
        };
        orderColumnsFlat: ColumnType[];
        leafColumnsFlat: ColumnType[];
        selectedRows: any[];
        sortable?: {
            key: string;
            order: SortableOrderType;
        };
        filter: Array<{ key: string; value: any[] }>;
        tableData?: any[];
        originalTableData?: any[];
        expandRows: any[];
    };

    constructor(private table: any) {
        this.data = observer({
            columns: [],
            orderColumns: { left: [], center: [], right: [] },
            leafColumns: { left: [], center: [], right: [] },
            orderColumnsFlat: [],
            leafColumnsFlat: [],
            selectedRows: [],
            sortable: undefined,
            tableData: undefined,
            filter: [],
            originalTableData: undefined,
            expandRows: []
        });
    }

    expandColumn?: ColumnType;

    get hasFixedColumns() {
        return this.data.orderColumns.left.length > 0 || this.data.orderColumns.right.length > 0;
    }

    get selectionColumn() {
        return this.data.leafColumnsFlat.find((n) => {
            return n.type === "selection";
        });
    }

    originalTableDataWathcer?: Watcher;
    setData(data: any[]) {
        this.originalTableDataWathcer?.destroy();
        this.originalTableDataWathcer = undefined;
        combinedReply(() => {
            this.data.expandRows = [];
            let dataChange = this.data.originalTableData === data;

            this.data.originalTableData = data || [];

            this.filterData();

            this.sortData();
            if (dataChange && !this.table.props.dataChangeNotClearSelected) {
                let newSelectedRows = [];
                for (let row of this.data.originalTableData) {
                    if (this.data.selectedRows.includes(row)) {
                        row[CHECK_ROW_KEY] = true;
                        newSelectedRows.push(row);
                    } else {
                        row[CHECK_ROW_KEY] = false;
                    }
                }
                //只保留存在行
                this.data.selectedRows = newSelectedRows;

                this.table.triggerSelectedRowChange();
            }
            if (this.table.props.defaultExpandAll) {
                this.data.expandRows.push(...this.data.tableData);
            }
        });

        this.table.$updatedRender(() => {
            if (this.isDestroy) return;
            //由于在filterData时，对原数据解构，需要在这里挂载一层观察者用于对某一项变更时的更新同步
            this.originalTableDataWathcer = new Watcher(
                //做冻结监听，只为不做深层数据结构劫持
                () =>
                    //仅做劫持
                    [...data],

                async () => {
                    await this.table.$updatedRender();
                    this.setData(data);
                }
            );
        });
    }

    getColumn(key: string) {
        return this.data.leafColumnsFlat.find((n) => n.key === key);
    }

    appendColumn(column: ColumnType, parent?: ColumnType, index?: number) {
        let array = this.data.columns;

        if (parent) {
            parent.children ??= [];
            array = parent.children;
        }

        if (index === undefined) {
            array.push(column);
        } else {
            array.splice(index, 0, column);
        }

        if (this.ready) {
            this.updateColumns();
            this.table.resize();
        }
    }

    removeColumn(column: ColumnType, parent?: ColumnType) {
        if (this.isDestroy) return;
        let array = this.data.columns;

        if (parent) {
            parent.children ??= [];
            array = parent.children;
        }

        remove(array, column);
        if (this.ready) {
            this.updateColumns();
            this.table.resize();
        }
    }

    hasFilter(key: string) {
        return this.data.filter.some((n) => n.key === key);
    }

    setFilter(key: string, value: any[] = []) {
        removeFilter(this.data.filter, (n) => {
            return n.key === key;
        });

        if (value.length) {
            this.data.filter.push({
                key,
                value
            });
        }

        combinedReply(() => {
            this.filterData();
            this.sortData();
        });
    }

    clearFilter() {
        this.data.filter.length = 0;
        combinedReply(() => {
            this.filterData();
            this.sortData();
        });
    }

    filterData() {
        //empty
        if (this.data.originalTableData === undefined) {
            this.data.tableData = undefined;
            return;
        }

        let result = this.data.originalTableData.slice(0);

        if (this.data.filter.length) {
            let colCache: Map<string, ColumnType> = new Map();
            result = result.filter((row) => {
                let filterState = false;

                //改array，为了匹配成功后尽快结束循环
                for (let item of this.data.filter) {
                    let key = item.key,
                        filters = item.value;

                    let col = colCache.get(key);
                    if (!col) {
                        col = this.getColumn(key);
                        if (!col) break;

                        colCache.set(key, col);
                    }

                    if (col.filterMethod) {
                        filterState = col.filterMethod(row, filters, col);
                    } else {
                        filterState = filters.includes(row[col.key!]);
                    }

                    if (filterState === false) {
                        //结束循环
                        return false;
                    }
                }
                return true;
            });
        }

        this.data.tableData = result;
    }

    sortData() {
        if (this.data.sortable) {
            let col = this.getColumn(this.data.sortable?.key);

            if (col?.sortable) {
                if (col.sortable !== "custom") {
                    if (col.sortMethod) {
                        this.data.tableData = col.sortMethod(this.data.tableData, col, this.data.sortable.order);
                    } else {
                        if (col.key) {
                            this.data.tableData = this.data.tableData?.sort((a, b) => {
                                let aValue = a[col!.key!];
                                let bValue = b[col!.key!];

                                if (this.data.sortable?.order === "ascending") {
                                    return aValue > bValue ? 1 : -1;
                                } else {
                                    return aValue > bValue ? -1 : 1;
                                }
                            });
                        } else {
                            logger.warn(LOGTAG, "table排序，当前列没有指定排序key，将交由事件处理", col);
                        }
                    }
                }

                this.table.$trigger("sort-change", {
                    column: col,
                    order: this.data.sortable.order
                });
                return;
            }

            //弥补清空排序逻辑
            this.table.$trigger("sort-change");
        }
    }

    setSortableOrder(column: string | ColumnType, order: SortableOrderType = "ascending") {
        if (typeof column === "string") {
            this.data.sortable = {
                key: column,
                order
            };
        } else {
            if (column?.key) {
                this.data.sortable = {
                    key: column.key,
                    order
                };
            } else {
                logger.warn(LOGTAG, "table设置排序时发现当前列未配置key");
            }
        }

        combinedReply(() => {
            this.filterData();

            this.sortData();
        });
    }

    clearSortable() {
        this.data.sortable = undefined;
        combinedReply(() => {
            this.filterData();
            this.sortData();
        });
    }
    isDestroy = false;
    destroy() {
        this.originalTableDataWathcer?.destroy();
        this.isDestroy = true;
    }
    updateColumns() {
        if (this.isDestroy) return;
        //组合回复
        combinedReply(() => {
            this.data.orderColumns.left = this.data.columns.filter((n) => n.fixed === true || n.fixed === "left");
            this.data.orderColumns.right = this.data.columns.filter((n) => n.fixed === "right");
            this.data.orderColumns.center = this.data.columns.filter((n) => !n.fixed);

            this.data.orderColumnsFlat = [
                ...this.data.orderColumns.left,
                ...this.data.orderColumns.center,
                ...this.data.orderColumns.right
            ];

            this.data.leafColumns.left = flatColumns(this.data.orderColumns.left);
            this.data.leafColumns.center = flatColumns(this.data.orderColumns.center);
            this.data.leafColumns.right = flatColumns(this.data.orderColumns.right);

            this.data.leafColumnsFlat = [
                ...this.data.leafColumns.left,
                ...this.data.leafColumns.center,
                ...this.data.leafColumns.right
            ];

            this.expandColumn = this.data.leafColumnsFlat.find((n) => n.type === "expand");
        });
    }
}

function flatColumns(columns: ColumnType[]) {
    let result: ColumnType[] = [];

    columns.forEach((m) => {
        if (m.children) {
            result.push(...flatColumns(m.children));
        } else {
            result.push(m);
        }
    });

    return result;
}

export type SortableOrderType = "ascending" | "descending";

export type ColumnType = {
    id: string;
    index?: number | (() => number);
    align?: "left" | "center" | "right";
    headerAlign?: "left" | "center" | "right";
    key?: string;
    label?: string;
    class?: string;
    disabledMethod?: Function;
    type?: string;
    fixed?: true | "left" | "right";
    sortable?: boolean | "custom";
    sortMethod?: Function;
    filter?: Array<any>;
    filterMethod?: Function;
    width?: string | number;
    children?: ColumnType[];
    level?: number;
    colSpan?: number;
    rowSpan?: number;
    hideCheckAll?: boolean;
    _sectionTh?: SectionType;
    _sectionTd?: SectionType;
};
