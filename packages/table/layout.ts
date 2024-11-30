import { Component } from "@joker.front/core";
import { Store } from "./store";

export class TableLayout {
    tableHeight?: number;
    height?: number;

    fixedWidth?: number;
    rightFixedWidth?: number;
    headerHeight = 44;
    appendHeight = 0;
    footerHeight = 44;
    viewportHeight?: number;
    bodyWidth?: number;
    bodyHeight?: number;
    fixedBodyHeight?: number;

    scrollX = false;
    scrollY = false;
    constructor(public table: Component<any>, public store: Store) {}
}
