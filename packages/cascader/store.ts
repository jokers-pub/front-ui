import { isEqual } from "@joker.front/shared";
import { valueEquals } from "../utils";
import { observer } from "@joker.front/core";

type Config = {
    valueKey: string;
    labelKey: string;
    childrenKey: string;
    disabledKey: string;
    leafKey: string;
    lazy: boolean;
    emitPath: boolean;
    multiple: boolean;
    allLevels: boolean;
    separator: string;
};

export class Store {
    nodes: Array<Node>;
    flattedNodes: Array<Node> = [];
    leafNodes: Array<Node> = [];

    constructor(data: Array<any>, public config: Config) {
        this.nodes = data.map((m) => new Node(m, config));

        this.flattedNodes = this.getFlattedNodes(false, false);
        this.leafNodes = this.getFlattedNodes(true, false);
    }

    appendNode(nodeData: any, parent?: Node) {
        let node = observer(new Node(nodeData, this.config, parent));
        let children = parent ? parent.children : this.nodes;

        children.push(node);
    }

    appendNodes(nodeDatas: Array<any>, parent?: Node) {
        nodeDatas.forEach((m) => {
            this.appendNode(m, parent);
        });

        this.flattedNodes = this.getFlattedNodes(false, false);
        this.leafNodes = this.getFlattedNodes(true, false);
    }

    getFlattedNodes(leafOnly: boolean, cached = true) {
        let cachedNodes = leafOnly ? this.leafNodes : this.flattedNodes;
        return cached ? cachedNodes : flatNodes(this.nodes, leafOnly);
    }

    getNodeByValue(value: any): Node | undefined {
        let nodes = this.getFlattedNodes(false, !this.config.lazy).filter(
            (node) => node.value === value || valueEquals(node.path, value)
        );

        return nodes?.length ? nodes[0] : undefined;
    }
}

function flatNodes(data: Array<Node>, leafOnly: boolean) {
    return data.reduce((res: Array<Node>, node) => {
        if (node.isLeaf) {
            res.push(node);
        } else {
            if (leafOnly === false) res.push(node);

            if (node.children) {
                res = res.concat(flatNodes(node.children, leafOnly));
            }
        }
        return res;
    }, []);
}

let nodeSeed = 0;
export class Node {
    level = 1;
    id = nodeSeed++;
    value: any;
    label: any;
    loading = false;
    loaded = false;
    path: Array<any> = [];
    pathNodes: Array<Node> = [];
    pathLabels: Array<any> = [];
    hasChildren = false;
    children: Array<Node>;
    checked = false;
    //半选
    indeterminate = false;
    constructor(public nodeData: Record<string, any>, private config: Config, public parent?: Node) {
        this.level = parent?.level ? parent.level + 1 : 1;
        this.value = this.nodeData[this.config.valueKey];

        this.label = this.nodeData[this.config.labelKey];
        this.pathNodes = this.getPathNodes();
        this.path = this.pathNodes.map((m) => m.value);
        this.pathLabels = this.pathNodes.map((m) => m.label);

        let childrenData: Array<any> = this.nodeData[this.config.childrenKey];
        this.hasChildren = Array.isArray(childrenData);
        this.children = childrenData?.map((m) => new Node(m, config, this)) || [];
    }

    get disabled(): boolean {
        return !!(this.nodeData[this.config.disabledKey] || this.parent?.disabled);
    }

    get isLeaf() {
        if (this.config.lazy) {
            let leafData = this.nodeData[this.config.leafKey];
            let isLeaf = leafData !== undefined && leafData !== null ? leafData : this.loaded ? !this.children : false;

            this.hasChildren = isLeaf;
            return isLeaf;
        }

        return !this.hasChildren;
    }

    getValueByOption() {
        return this.config.emitPath ? this.path : this.value;
    }

    get text() {
        return this.config.allLevels ? this.pathLabels.join(this.config.separator) : this.label;
    }

    isSameNode(checkValue: Node | Array<Node>): boolean {
        let value = this.getValueByOption();

        return this.config.multiple && Array.isArray(checkValue)
            ? checkValue.some((val) => isEqual(val, value))
            : isEqual(checkValue, value);
    }

    syncCheckState(checkedValue: Node | Array<Node>) {
        let checked = this.isSameNode(checkedValue);

        this.doChecked(checked);
    }

    syncChildren(checked: boolean) {
        this.children.forEach((n) => {
            if (n) {
                n.syncChildren(checked);
                n.onParentCheck(checked);
            }
        });
    }

    syncParent() {
        if (this.parent) {
            this.parent.onChildCheck();
            this.parent.syncParent();
        }
    }

    onParentCheck(checked: boolean) {
        if (!this.disabled) {
            this.setCheckState(checked);
        }
    }

    onChildCheck() {
        let children = this.children.filter((n) => !n.disabled);

        let checked = children.length ? children.every((n) => n.checked) : false;

        this.setCheckState(checked);
    }

    doChecked(checked: boolean) {
        if (this.checked !== checked) {
            this.syncChildren(checked);
            this.setCheckState(checked);
            this.syncParent();
        }
    }

    setCheckState(checked: boolean) {
        let totalNum = this.children?.length;

        let checkedNum =
            this.children?.reduce((sum, m) => {
                let num = m.checked ? 1 : m.indeterminate ? 0.5 : 0;
                return sum + num;
            }, 0) || 0;

        this.checked = checked;
        this.indeterminate = checkedNum !== totalNum && checkedNum > 0;
    }

    private getPathNodes() {
        let nodes: Array<Node> = [this];

        let parent = this.parent;

        while (parent) {
            nodes.unshift(parent);
            parent = parent.parent;
        }

        return nodes;
    }
}
