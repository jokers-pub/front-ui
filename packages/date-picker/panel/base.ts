import { Component, VNode } from "@joker.front/core";
import { componentName } from "../../utils";
import { Popper } from "../../utils/popper";

export class PickerPanel<T extends Record<string, any> = {}> extends Component<T> {
    picker?: any;
    popperHandler?: Popper;

    constructor(...args: any[]) {
        super(...args);

        this.$on("created", () => {
            this.picker = (<VNode.Node>this.$root).closest<VNode.Component<any>>((n) => {
                return n instanceof VNode.Component && n.component.name === componentName("date-picker");
            })?.component;
        });

        this.$on("mounted", () => {
            this.initPopper();
        });

        this.$on("beforeDestroy", () => {
            this.popperHandler.destroy();
        });
    }

    get pickerWidth() {
        return this.picker?.inputWidth;
    }

    private initPopper() {
        let popper = this.$getRef("popper")?.output;
        let reference = this.picker?.inputReference;

        if (popper && reference) {
            this.popperHandler = new Popper(reference, popper, {
                placement: "bottom-start",
                appendArrow: true,
                boundariesPadding: 0
            });
        }
    }
}
