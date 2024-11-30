import { Component, VNode } from "@joker.front/core";
import JokerLoading from "./index.joker";
import { zIndexManage } from "../utils/zindex";
export type Option = {
    text?: string;
    fullscreen?: boolean;
    spinner?: string;
    zIndex?: string;
    target?: Element | VNode.Node | string | null;
    customClass?: string;
};

export let fullScreenLoading: any = undefined;

type ComponentExtend = Component & { originalPosition?: any; originalOverflow?: any };

function getStyle(el: Element, styleName: keyof CSSStyleDeclaration): any {
    return (<HTMLElement>el).style[styleName];
}

function addStyle(option: Option, parent: Element, instance: ComponentExtend) {
    if (option.fullscreen) {
        instance.originalPosition = getStyle(document.body, "position");
        instance.originalOverflow = getStyle(document.body, "overflow");

        option.zIndex = zIndexManage.nextZIndex().toString();
    } else {
        instance.originalPosition = getStyle(parent, "position");
    }
}

export function Loading(option: Option = {}): ComponentExtend & { close: Function; setText: (text: string) => void } {
    if (typeof option.target === "string") {
        option.target = document.querySelector(option.target);
    } else if (option.target instanceof VNode.Node) {
        if (option.target instanceof VNode.Component) {
            option.target = option.target.firstElement?.output;
        } else {
            option.target = option.target.output;
        }
    }

    option.target ||= document.body;

    option.fullscreen = option.target === document.body;

    if (option.fullscreen && fullScreenLoading) {
        return fullScreenLoading;
    }

    let parent = option.target as Element;

    let instance: ComponentExtend = new JokerLoading(option);
    addStyle(option, parent, instance);

    if (["absolute", "fixed", "sticky"].includes(instance.originalPosition) === false) {
        parent.classList.add("jk-loading-parent--relative");
    }

    instance.$on("close", () => {
        if (option.fullscreen) {
            fullScreenLoading = undefined;
        }
    });

    instance.$on("destroy", () => {
        parent && parent.classList.remove("jk-loading-parent--relative");
    });

    instance.$mount(parent);

    if (option.fullscreen) {
        fullScreenLoading = instance;
    }
    //@ts-ignore
    return instance;
}
