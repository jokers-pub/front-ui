import { remove } from "@joker.front/shared";
import { TreeStore } from ".";
import { combinedReply, observer } from "@joker.front/core";

let nodeIdSeed = 0;

export type NodeData = Record<string, any>;

export class TreeNode {
    id = nodeIdSeed++;

    checked: boolean = false;

    indeterminate: boolean = false;

    expanded = false;

    visible = true;

    isCurrent = false;

    level = 0;

    loaded = false;

    children: TreeNode[] = [];

    loading = false;

    key: string | number;

    isLeaf = false;

    constructor(public store: TreeStore, public nodeData: NodeData, public parent?: TreeNode) {
        if (store.option.nodeKey) {
            this.key = this.nodeData[store.option.nodeKey];
        }

        //默认key
        this.key ??= `__JK_NODE_DEFAULT_ID_${this.id}__`;

        if (parent) {
            this.level = parent.level + 1;
        }

        store.registerNode(this);
        let obNode = observer(this);
        //非懒加载 || (懒加载 && 有静态子集)
        if (nodeData && (!store.option.lazy || this.nodeData?.[this.store.option.childrenKey] !== undefined)) {
            this.loaded = true;
            //append childrens
            this.appendChildrens(this.childrenDatas);

            if (store.option.defaultExpandAll) {
                this.expanded = true;
            }
        } else if (this.level > 0 && store.option.lazy && store.option.defaultExpandAll) {
            obNode.expand();
        }

        if (!nodeData) return;

        if (
            nodeData[store.option.expandKey] ||
            (store.option.nodeKey && this.key !== undefined && store.option.defaultExpandedKeys?.includes(this.key))
        ) {
            obNode.expand(true);
        }

        if (this.key && store.option.lazy) {
            if (store.option.defaultCheckedKeys?.includes(this.key)) {
                obNode.setChecked(true);
            }
        }

        this.updateLeafState();
    }

    get childrenDatas() {
        return this.nodeData?.[this.store.option.childrenKey] || [];
    }

    get disabled(): boolean {
        return !!(this.nodeData?.[this.store.option.disabledKey] || this.parent?.disabled);
    }

    get virtual(): boolean {
        return !!this.nodeData?.[this.store.option.virtualKey];
    }

    get label() {
        return this.nodeData?.[this.store.option.labelKey];
    }

    reload() {
        this.loaded = false;
        this.loadData();
    }

    appendChildrens(nodes: NodeData[]) {
        combinedReply(() => {
            nodes.forEach((n) => {
                this.insterChild(n);
            });
        });
    }

    removeChild(child: TreeNode) {
        //剔除数据源
        remove(this.childrenDatas, child.nodeData);

        //剔除节点
        child.parent = undefined;
        remove(this.children, child);

        //解除nodeMap
        this.store.deregisterNode(child);

        //更新叶子状态
        this.updateLeafState();
    }

    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    }

    insterChild(child: NodeData | TreeNode, index?: number) {
        let treeNode: TreeNode;
        if (child instanceof TreeNode) {
            treeNode = child;
            child = child.nodeData;
        } else {
            treeNode = new TreeNode(this.store, child, this);
        }

        let childrens = this.nodeData[this.store.option.childrenKey];
        if (index === undefined) {
            this.children.push(treeNode);
            if (!this.store.option.lazy && this.nodeData && !childrens?.includes(child)) {
                this.nodeData[this.store.option.childrenKey] ??= [];
                this.nodeData[this.store.option.childrenKey].push(child);
            }
        } else {
            this.children.splice(index, 0, treeNode);

            if (!this.store.option.lazy && this.nodeData && !childrens?.includes(child)) {
                this.nodeData[this.store.option.childrenKey] ??= [];
                this.nodeData[this.store.option.childrenKey].splice(index, 0, child);
            }
        }

        this.updateLeafState();

        return child;
    }

    setChecked(checked: boolean | "half", deep?: boolean, norRecursion?: boolean, passValue?: boolean) {
        this.indeterminate = checked === "half";
        this.checked = checked === true;

        let descendants = () => {
            if (deep) {
                for (let child of this.children) {
                    if (child.virtual) continue;
                    passValue ||= checked !== false;

                    let isCheck = child.disabled ? child.checked : passValue;
                    child.setChecked(isCheck, deep, true, passValue);
                }

                let state = getChildState(this.children);

                if (!state.all) {
                    this.checked = false;
                    this.indeterminate = state.half;
                }
            }
        };

        if (this.shouldLoadData()) {
            this.loadData(() => {
                descendants();

                reSetChecked(this);
            });
        } else {
            let state = getChildState(this.children);
            if (!this.isLeaf && !state.all && state.allWithoutDisabled) {
                this.checked = false;
                checked = false;
            }

            descendants();
        }

        if (!this.parent || this.parent.level === 0) return;

        if (!norRecursion) {
            reSetChecked(this.parent);
        }
    }

    expand(expandParent?: boolean, callBack?: Function) {
        let done = () => {
            if (expandParent) {
                let parent = this.parent;

                while (parent && parent.level > 0) {
                    parent.expanded = true;
                    parent = parent.parent;
                }
            }

            this.expanded = true;

            callBack?.();
        };

        if (this.shouldLoadData()) {
            this.loadData(() => {
                if (this.children.length && this.checked) {
                    this.setChecked(true, true);
                }
                done();
            });
        } else {
            done();
        }
    }
    collapse() {
        this.expanded = false;
    }

    updateLeafState() {
        let isLeafByData = this.nodeData?.[this.store.option.isLeafKey];

        if (this.store.option.lazy && !this.loaded && typeof isLeafByData !== undefined) {
            this.isLeaf = isLeafByData;
            return;
        }

        if (!this.store.option.lazy || (this.store.option.lazy && this.loaded)) {
            this.isLeaf = this.children.length === 0;
            return;
        }

        this.isLeaf = false;
    }

    private shouldLoadData() {
        return this.store.option.lazy && this.store.option.load && !this.loaded;
    }

    private loadData(callBack?: Function) {
        if (this.shouldLoadData() && !this.loading) {
            this.loading = true;
            this.store.option.load?.(this, (children) => {
                this.children.length = 0;

                this.appendChildrens(children || []);
                this.loaded = true;
                this.loading = false;

                this.updateLeafState();

                callBack?.call(this);
            });
        } else {
            callBack?.call(this);
        }
    }
}

function reSetChecked(node: TreeNode) {
    if (node.children.length === 0 || node.loading) return;

    let state = getChildState(node.children);

    if (state.all) {
        node.checked = true;
        node.indeterminate = false;
    } else if (state.half) {
        node.checked = false;
        node.indeterminate = true;
    } else if (state.none) {
        node.checked = false;
        node.indeterminate = false;
    }

    if (!node.parent || node.parent.level === 0) return;

    reSetChecked(node.parent);
}

function getChildState(nodes: TreeNode[]) {
    let all = true,
        none = true,
        allWithoutDisabled = true;

    for (let node of nodes) {
        if (!node.checked || node.indeterminate) {
            all = false;

            if (!node.disabled) {
                allWithoutDisabled = false;
            }
        }

        if (node.checked || node.indeterminate) {
            none = false;
        }
    }
    return {
        all,
        none,
        allWithoutDisabled,
        half: !all && !none
    };
}
