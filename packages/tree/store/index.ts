import { observer } from "@joker.front/core";
import { NodeData, TreeNode } from "./node";

export type TreeStoreOption = {
    /** id key */
    nodeKey?: string;
    /** 是否延迟加载 */
    lazy?: boolean;
    /** 延迟加载方法 */
    load?: (root: TreeNode, callBack: (data?: Array<NodeData>) => void) => void;
    /** root node data */
    data?: any;
    /** 默认checked keys */
    defaultCheckedKeys?: (string | number)[];
    /** 默认展开全部 */
    defaultExpandAll?: boolean;
    /** 默认展开keys */
    defaultExpandedKeys?: (string | number)[];
    /** children key */
    childrenKey: string;
    /** 折叠标识 key */
    expandKey: string;
    /** 是否 leaf key */
    isLeafKey: string;
    /** 禁用key */
    disabledKey: string;
    /** label key */
    labelKey: string;
    /** 虚拟节点标识Key */
    virtualKey: string;
    /** 过滤函数 */
    filterMethod?: Function;
    /** 非严格模式，checkbox不做上下级关联 */
    checkStrictly?: boolean;
};

export class TreeStore {
    root: TreeNode;

    nodesMap: Map<string | number, TreeNode> = new Map();

    currentNode?: TreeNode;

    constructor(public option: TreeStoreOption) {
        this.root = new TreeNode(this, {
            [option.childrenKey]: option.data
        });

        if (this.option.lazy && this.option.load) {
            this.option.load(this.root, (nodeDatas) => {
                if (nodeDatas) {
                    this.root.appendChildrens(nodeDatas);
                }
                this.initDefaultCheckedNodes();
            });
        } else {
            this.initDefaultCheckedNodes();
        }
    }

    getNode(filter: (node: TreeNode) => boolean | void) {
        for (let [_, node] of this.nodesMap) {
            if (filter(node)) {
                return node;
            }
        }
    }

    appendNode(nodeData: NodeData | TreeNode, parent?: TreeNode) {
        parent ??= this.root;

        parent.insterChild([nodeData]);
    }

    removeNode(node: TreeNode) {
        node.remove();
    }

    registerNode(node: TreeNode) {
        //提前进行数据劫持，防止队列数据与层级数据不一致
        this.nodesMap.set(node.key, observer(node));
    }

    deregisterNode(node: TreeNode) {
        node.children.forEach((n) => {
            this.deregisterNode(n);
        });

        this.nodesMap.delete(node.key);
    }

    getNodeByKey(key: string | number) {
        return this.nodesMap.get(key);
    }

    setCurrentNode(node?: TreeNode) {
        this.currentNode && (this.currentNode.isCurrent = false);
        this.currentNode = node;

        if (node) {
            this.currentNode.isCurrent = true;

            let parent = node.parent;

            if (node.parent) {
                parent.expand(true);
            }
        }
    }

    getCheckedNodes(leafOnly = false, includeHalfChecked = false) {
        let result: TreeNode[] = [];
        this.nodesMap.forEach((n) => {
            if ((n.checked || (includeHalfChecked && n.indeterminate)) && (!leafOnly || n.isLeaf)) {
                result.push(n);
            }
        });

        return result;
    }

    getCheckedKeys(leafOnly = false, includeHalfChecked = false) {
        return this.getCheckedNodes(leafOnly, includeHalfChecked).map((n) => {
            return n.key;
        });
    }

    setChecked(keys: string[]) {
        let nodes = Array.from(this.nodesMap.values()).sort((a, b) => b.level - a.level);
        //从下向上清空
        nodes.forEach((n) => !n.disabled && n.setChecked(false));

        for (let key of keys) {
            let node = this.nodesMap.get(key);
            node?.setChecked(true, true);
        }
    }

    setCheckedNodes(nodes: TreeNode[]) {
        nodes.forEach((n) => {
            n.setChecked(true);
        });
    }

    filter(value: any) {
        let filterMethod = this.option.filterMethod || defaultFilterMethod;
        let lazy = this.option.lazy;

        let traverse = (node: TreeNode) => {
            let childNodes = node.children;

            childNodes.forEach((n) => {
                n.visible = filterMethod(n, value);

                traverse(n);
            });

            if (!node.visible && childNodes.length) {
                let allHide = childNodes.some((n) => n.visible) === false;

                node.visible = allHide === false;
            }

            //空不再做展开处理
            if (value === "" || value === undefined || value === null) return true;

            if (node.visible && node.isLeaf === false && !lazy) {
                node.expand();
            }
        };

        traverse(this.root);
    }

    private initDefaultCheckedNodes() {
        this.option.defaultCheckedKeys?.forEach((m) => {
            let node = this.nodesMap.get(m);

            node?.setChecked(true);
        });
    }
}

function defaultFilterMethod(node: TreeNode, val: string | number) {
    if (val === "" || val === undefined || val === null) return true;

    if (typeof node.label === "string") {
        return node.label.includes(val.toString());
    }
    return false;
}
