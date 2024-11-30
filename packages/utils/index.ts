const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
const MOZ_HACK_REGEXP = /^moz([A-Z])/;

export function componentName(name: string) {
    return `__joker_${name}_name__`;
}

export function isIE() {
    return !isNaN(Number((<any>document).documentMode));
}

export function isEdge() {
    return navigator.userAgent.indexOf("Edge") > -1;
}

export function valueEquals(a: any, b: any) {
    if (a === b) return true;

    if (!(a instanceof Array)) return false;
    if (!(b instanceof Array)) return false;

    if (a.length !== b.length) return false;

    for (let i = 0; i !== a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}

export function autoprefixer(style: Record<string, string>): Object {
    let newStyle: string[] = [];
    const rules = ["transform", "transition", "animation"];
    const prefixes = ["ms-", "webkit-"];
    rules.forEach((rule) => {
        const value = style[rule];
        if (rule && value) {
            prefixes.forEach((prefix) => {
                newStyle.push(prefix + rule + ":" + value);
            });
        }
    });
    return newStyle.join(";");
}

export function transformUnit(val?: string | number) {
    if (val === undefined) return undefined;

    val = (val ?? "").toString();

    if (isNaN(parseFloat(val))) {
        return val;
    } else {
        return val + "px";
    }
}

export function rafThrottle(fn: any) {
    let locked = false;
    return function (...args: any[]) {
        if (locked) return;
        locked = true;
        window.requestAnimationFrame((_) => {
            fn.apply(this, args);
            locked = false;
        });
    };
}

export function isFirefox() {
    return !!window.navigator.userAgent.match(/firefox/i);
}

export function isHtmlElement(node: any) {
    return node && node.nodeType === Node.ELEMENT_NODE;
}

export const getScrollContainer = (el: any, vertical?: string) => {
    let parent = el;
    while (parent) {
        if ([window, document, document.documentElement].includes(parent)) {
            return document.documentElement;
        }
        if (isScroll(parent, vertical)) {
            return parent;
        }
        parent = parent.parentNode;
    }

    return parent;
};

export const isScroll = (el: any, vertical?: string) => {
    const determinedDirection = vertical !== null && vertical !== undefined;
    const overflow = determinedDirection
        ? vertical
            ? getStyle(el, "overflow-y")
            : getStyle(el, "overflow-x")
        : getStyle(el, "overflow");

    return overflow?.match(/(scroll|auto|overlay)/);
};

export const getStyle = function (element: any, styleName: any) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === "float") {
        styleName = "cssFloat";
    }
    try {
        var computed = document.defaultView && document.defaultView.getComputedStyle(element, "");
        return element.style[styleName] || (computed && computed[styleName]) || null;
    } catch (e) {
        return element.style[styleName];
    }
};

const camelCase = function (name: string) {
    return name
        .replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
            return offset ? letter.toUpperCase() : letter;
        })
        .replace(MOZ_HACK_REGEXP, "Moz$1");
};

export const isInContainer = (el: HTMLElement, container: HTMLElement) => {
    if (!el || !container) return false;
    const elRect = el.getBoundingClientRect();
    let containerRect;

    if ([window, document, document.documentElement, null, undefined].includes(container)) {
        containerRect = {
            top: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
            left: 0
        };
    } else {
        containerRect = container.getBoundingClientRect();
    }

    return (
        elRect.top < containerRect.bottom &&
        elRect.bottom > containerRect.top &&
        elRect.right > containerRect.left &&
        elRect.left < containerRect.right
    );
};

export let isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined;
