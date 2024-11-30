import { debounce, remove } from "@joker.front/shared";
import ResizeObserver from "resize-observer-polyfill";

let resizeHandler = function (entries: any[]) {
    for (let entry of entries) {
        let listeners: Array<Function> = entry.target.__resizeListeners__ || [];

        if (entry && listeners.length) {
            listeners.forEach((fn) => {
                fn();
            });
        }
    }
};

export function addResizeListener(
    element: HTMLElement & { __resizeListeners__?: Array<Function>; __ro__?: ResizeObserver },
    callback: Function
) {
    if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        element.__ro__ = new ResizeObserver(debounce(16, resizeHandler));
        element.__ro__.observe(element);
    }

    element.__resizeListeners__.push(callback);
}

export function removeResizeListener(
    element: (HTMLElement & { __resizeListeners__?: Array<Function>; __ro__?: ResizeObserver }) | undefined,
    callback: Function
) {
    if (!element || !element.__resizeListeners__) return;

    remove(element.__resizeListeners__, callback);

    if (element.__resizeListeners__.length === 0) {
        element.__ro__?.disconnect();
    }
}
