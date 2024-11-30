import { debounce, logger, useCallbacks } from "@joker.front/shared";
import { LOGTAG } from "../config";
import { zIndexManage } from "./zindex";
import { getScrollContainer, getStyle } from ".";

// eslint-disable-next-line @typescript-eslint/naming-convention
const DefaultOptions: {
    placement: string;
    boundariesPadding: number;
    offset: number;
    preventOverflowOrder: string[];
    arrowOffset: number;
    appendArrow: boolean;
    scrollContainer?: HTMLElement;
} = {
    placement: "bottom",
    boundariesPadding: 5,
    offset: 0,
    preventOverflowOrder: ["left", "right", "top", "bottom"],
    appendArrow: true,
    arrowOffset: 0
};

type DataType = {
    styles: Record<string, string>;
    placement: string;
    originalPlacement: string;
    offsets: ReturnType<Popper["getOffsets"]> & { arrow?: Record<string, any> };
    boundaries: ReturnType<Popper["getBoundaries"]>;
    arrowElem?: HTMLElement;
    flipped?: boolean;
};

type Position = {
    top: number;
    left: number;
    bottom: number;
    right: number;
};

// eslint-disable-next-line @typescript-eslint/naming-convention
const Modifiers: Array<keyof Popper["modifiers"]> = [
    "shift",
    "offset",
    "preventOverflow",
    "keepTogether",
    "arrow",
    "flip",
    "applyStyle"
];

export class Popper {
    private option: typeof DefaultOptions;

    public updateCallbacks = useCallbacks<(data: DataType) => void>();

    constructor(private reference: HTMLElement, private popper: HTMLElement, options?: Partial<typeof DefaultOptions>) {
        this.option = Object.assign({}, DefaultOptions, options);

        this.popper.setAttribute("x-placement", this.option.placement);

        if (this.option.appendArrow) {
            this.arrowEl = this.popper.querySelector(".popper_arrow[x-arrow]");
            if (!this.arrowEl) {
                let arrow = document.createElement("div");
                arrow.setAttribute("x-arrow", "");
                arrow.className = "popper_arrow";
                this.popper.appendChild(arrow);

                this.arrowEl = arrow;
            }
        }
        setStyle(this.popper, {
            position: this.position,
            top: 0
        });

        this.update(true);

        this.setupEventListeners();
    }

    public update(refreshZindex?: boolean) {
        //未挂载不处理
        if (!this.popper?.parentNode) return;

        if (refreshZindex) {
            setStyle(this.popper, {
                zIndex: zIndexManage.nextZIndex()
            });
        }

        let offsets = this.getOffsets();
        let data: DataType = {
            styles: {},
            placement: this.option.placement,
            originalPlacement: this.option.placement,
            offsets: offsets,
            boundaries: this.getBoundaries(offsets)
        };

        data = this.runModifiers(data);

        this.updateCallbacks.callbacks.forEach((c) => {
            c(data);
        });
    }

    public destroy() {
        this.updateCallbacks.reset();

        this.removeEventListeners();

        if (this.option.appendArrow && this.arrowEl) {
            this.arrowEl = undefined;
        }
    }

    private scrollTarget?: HTMLElement | Window;

    private updateHandler?: any;

    private setupEventListeners() {
        this.updateHandler = debounce(5, this.update.bind(this));

        window.addEventListener("resize", this.updateHandler);

        let target: HTMLElement | Window = getScrollContainer(
            this.option.scrollContainer || this.reference
        ) as HTMLElement;

        if (target === null) return;

        if (target === document.body || target === document.documentElement) {
            target = window;
        }

        target.addEventListener("scroll", this.updateHandler);

        this.scrollTarget = target;
    }

    private removeEventListeners() {
        window.removeEventListener("resize", this.updateHandler);

        if (this.scrollTarget) {
            this.scrollTarget.removeEventListener("scroll", this.updateHandler);
            this.scrollTarget = undefined;
        }
    }

    private get position() {
        return isFixed(this.reference) ? "fixed" : "absolute";
    }

    private getOffsets(placement?: string) {
        placement = (placement ?? this.option.placement).split("-")[0];

        let popperOffsets = {
            position: this.position,
            top: 0,
            left: 0,
            width: 0,
            height: 0
        };

        let isParentFixed = popperOffsets.position === "fixed";

        let referenceOffsets = getOffsetReactRelativeToCustomParent(
            this.reference,
            getOffsetParent(this.popper) as HTMLElement,
            isParentFixed
        );

        let popperReact = getOuterSizes(this.popper);

        if (["right", "left"].includes(placement)) {
            popperOffsets.top = referenceOffsets.top + referenceOffsets.height / 2 - popperReact.height / 2;
            popperOffsets.left =
                placement === "left" ? referenceOffsets.left - popperReact.width : referenceOffsets.right;
        } else {
            popperOffsets.left = referenceOffsets.left + referenceOffsets.width / 2 - popperReact.width / 2;
            popperOffsets.top =
                placement === "top" ? referenceOffsets.top - popperReact.height : referenceOffsets.bottom;
        }

        popperOffsets.width = popperReact.width;
        popperOffsets.height = popperReact.height;

        return {
            popper: popperOffsets,
            reference: referenceOffsets
        };
    }

    private getBoundaries(offset: DataType["offsets"]) {
        let offsetParent = getOffsetParent(this.popper) as HTMLElement;
        let scrollParent = getScrollContainer(this.popper) as HTMLElement;
        let offsetParentReact = getOffsetReact(offsetParent);

        let getScrollTopValue = (el: any) => {
            return el === document.body || el === window
                ? Math.max(document.documentElement.scrollTop, document.body.scrollTop)
                : el.scrollTop;
        };

        let getScrollLeftValue = (el: HTMLElement) => {
            return el === document.body
                ? Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)
                : el.scrollLeft;
        };

        let scrollTop = offset.popper.position === "fixed" ? 0 : getScrollTopValue(scrollParent);
        let scrollLeft = offset.popper.position === "fixed" ? 0 : getScrollLeftValue(scrollParent);

        let result = {
            top: 0 - (offsetParentReact.top - scrollTop),
            right: document.documentElement.clientWidth - (offsetParentReact.left - scrollLeft),
            bottom: document.documentElement.clientHeight - (offsetParentReact.top - scrollTop),
            left: 0 - (offsetParentReact.left - scrollLeft)
        };

        result.left += this.option.boundariesPadding;
        result.right -= this.option.boundariesPadding;
        result.top += this.option.boundariesPadding;
        result.bottom -= this.option.boundariesPadding;

        return result;
    }

    private runModifiers(data: DataType, end?: keyof Popper["modifiers"]) {
        let modifiers = [...Modifiers];
        if (end) {
            modifiers = modifiers.slice(0, modifiers.indexOf(end));
        }

        modifiers.forEach((m) => {
            data = this.modifiers[m].bind(this)(data) || data;
        });

        return data;
    }
    private arrowEl?: HTMLElement | null;

    private modifiers = {
        //解析辅助定位
        shift: function (this, data: DataType) {
            let placement = data.placement;
            let basePlacement = placement.split("-")[0];
            let shiftVariation = placement.split("-")[1] as "start" | "end" | undefined;

            if (shiftVariation) {
                let reference = data.offsets.reference;
                let popper = getPopperClientReact(data.offsets.popper);

                let shiftOffsets = {
                    y: {
                        start: { top: reference.top },
                        end: { top: reference.top + reference.height - popper.height }
                    },
                    x: {
                        start: { left: reference.left },
                        end: { left: reference.left + reference.width - popper.width }
                    }
                };

                let axis: "x" | "y" = ["bottom", "top"].includes(basePlacement) ? "x" : "y";
                data.offsets.popper = Object.assign(data.offsets.popper, shiftOffsets[axis][shiftVariation]);
            }

            return data;
        },
        //自定义偏移
        offset: function (this: Popper, data: DataType) {
            let offset = this.option.offset;
            let popper = data.offsets.popper;

            if (data.placement.includes("left")) {
                popper.top -= offset;
            } else if (data.placement.includes("right")) {
                popper.top += offset;
            } else if (data.placement.includes("top")) {
                popper.left -= offset;
            } else if (data.placement.includes("bottom")) {
                popper.left += offset;
            }

            return data;
        },
        //边界
        preventOverflow: function (this: Popper, data: DataType) {
            let popper = getPopperClientReact(data.offsets.popper);

            let check: Record<string, any> = {
                left: function () {
                    let left = popper.left;
                    if (popper.left < data.boundaries.left) {
                        left = Math.max(popper.left, data.boundaries.left);
                        return { left };
                    }
                },
                right: function () {
                    let left = popper.left;
                    if (popper.right > data.boundaries.right) {
                        left = Math.min(popper.left, data.boundaries.right - popper.width);
                        return { left };
                    }
                },
                top: function () {
                    let top = popper.top;
                    if (popper.top < data.boundaries.top) {
                        top = Math.max(popper.top, data.boundaries.top);
                        return { top };
                    }
                },
                bottom: function () {
                    let top = popper.top;
                    if (popper.bottom > data.boundaries.bottom) {
                        top = Math.min(popper.top, data.boundaries.bottom - popper.height);
                        return { top };
                    }
                }
            };

            this.option.preventOverflowOrder.forEach((direction) => {
                if (check[direction]) {
                    data.offsets.popper = Object.assign(data.offsets.popper, check[direction]());
                }
            });
        },
        //保持相邻位置
        keepTogether: function (this: Popper, data: DataType) {
            let popper = getPopperClientReact(data.offsets.popper);
            let reference = data.offsets.reference;

            if (popper.right < Math.floor(reference.left)) {
                data.offsets.popper.left = Math.floor(reference.left) - popper.width;
            }

            if (popper.left > Math.floor(reference.right)) {
                data.offsets.popper.left = Math.floor(reference.right);
            }

            if (popper.bottom < Math.floor(reference.top)) {
                data.offsets.popper.top = Math.floor(reference.top) - popper.height;
            }

            if (popper.top > Math.floor(reference.bottom)) {
                data.offsets.popper.top = Math.floor(reference.bottom);
            }
        },
        //箭头
        arrow: function (this: Popper, data: DataType) {
            let arrowOffset = this.option.arrowOffset;
            let arrowElem = this.arrowEl;

            if (!arrowElem) return data;

            if (this.popper.contains(arrowElem) === false) {
                logger.warn(LOGTAG, "[popper] arrow 必须在popper内");
                return data;
            }

            let arrowStyle: Record<string, any> = {};
            let placement = data.placement.split("-")[0];
            let popper = getPopperClientReact(data.offsets.popper);
            let reference = data.offsets.reference;
            let isVertical = ["left", "right"].includes(placement);
            let len: "height" | "width" = isVertical ? "height" : "width";
            let side: "top" | "left" = isVertical ? "top" : "left";
            let altSide: "left" | "top" = isVertical ? "left" : "top";
            let opSide: "bottom" | "right" = isVertical ? "bottom" : "right";
            let arrowSize = getOuterSizes(arrowElem)[len];

            //top/left side
            if (reference[opSide] - arrowSize < popper[side]) {
                data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowSize);
            }

            //bottom/right side
            if (reference[side] + arrowSize > popper[opSide]) {
                data.offsets.popper[side] += reference[side] + arrowSize - popper[opSide];
            }

            let center = reference[side] + (arrowOffset || reference[len] / 2 - arrowSize / 2);
            let sideValue = center - popper[side];

            sideValue = Math.max(Math.min(popper[len] - arrowSize - 8, sideValue), 8);
            arrowStyle[side] = sideValue;
            //确保移除历史记录
            arrowStyle[altSide] = "";
            data.offsets.arrow = arrowStyle;
            data.arrowElem = arrowElem;

            return data;
        },
        //是否需要反转
        flip: function (this: Popper, data: DataType) {
            if (data.flipped && data.placement === data.originalPlacement) {
                return data;
            }

            let placement: keyof Position = data.placement.split("-")[0] as any;
            let placementOpposite: keyof Position = getOppoisitePlacement(placement) as any;

            let variation = data.placement.split("-")[1] || "";
            let popperOffsets = getPopperClientReact(data.offsets.popper);
            let hasRightOrBottom = ["right", "bottom"].includes(placement);
            if (
                (hasRightOrBottom &&
                    Math.floor(data.offsets.reference[placement]) > Math.floor(popperOffsets[placementOpposite])) ||
                (hasRightOrBottom === false &&
                    Math.floor(data.offsets.reference[placement]) < Math.floor(popperOffsets[placementOpposite]))
            ) {
                data.flipped = true;
                data.placement = placementOpposite;

                if (variation) {
                    data.placement += `-${variation}`;
                }

                //update
                data.offsets.popper = this.getOffsets(data.placement).popper;

                //刷新前面的数据
                data = this.runModifiers(data, "flip");
            }

            return data;
        },
        //最终生效样式
        applyStyle: function (this: Popper, data: DataType) {
            let styles = {
                position: data.offsets.popper.position,
                left: Math.round(data.offsets.popper.left),
                top: Math.round(data.offsets.popper.top)
            };

            Object.assign(styles, data.styles);
            setStyle(this.popper, styles);

            this.popper.setAttribute("x-placement", data.placement);

            if (data.arrowElem && data.offsets.arrow) {
                setStyle(data.arrowElem, data.offsets.arrow);
            }

            return data;
        }
    };
}

function getOffsetParent(el: HTMLElement) {
    let offsetParent = el.offsetParent;

    return offsetParent === document.body || !offsetParent ? document.documentElement : offsetParent;
}

function isFixed(el: Element) {
    if (el === document.body) return false;

    if (getStyle(el, "position") === "fixed") return true;

    if (el.parentNode) {
        return isFixed(el.parentNode as HTMLElement);
    }

    return false;
}

function setStyle(el: HTMLElement, styles: Partial<Record<keyof CSSStyleDeclaration, string | number>>) {
    for (let key in styles) {
        let unit = "";

        if (["width", "height", "top", "right", "bottom", "left"].includes(key) && isNumeric(styles[key]!)) {
            unit = "px";
        }

        el.style[key] = styles[key] + unit;
    }
}

function isNumeric(val: string | number) {
    if (typeof val === "number") return true;

    return val && isNaN(parseFloat(val)) === false && isFinite(parseFloat(val));
}

function getOffsetReactRelativeToCustomParent(el: HTMLElement, parent: HTMLElement, fixed: boolean) {
    let elReact = getBoundClientReact(el);
    let paReact = getBoundClientReact(parent);

    if (fixed) {
        let scrollParent = getScrollContainer(parent) as HTMLElement;

        paReact.top += scrollParent.scrollTop;
        paReact.bottom += scrollParent.scrollTop;
        paReact.left += scrollParent.scrollLeft;
        paReact.right += scrollParent.scrollLeft;
    }

    return {
        top: elReact.top - paReact.top,
        left: elReact.left - paReact.left,
        bottom: elReact.top - paReact.top + elReact.height,
        right: elReact.left - paReact.left + elReact.width,
        width: elReact.width,
        height: elReact.height
    };
}

function getBoundClientReact(el: HTMLElement) {
    let react = el.getBoundingClientRect();

    let isIE = navigator.userAgent.indexOf("MSIE") !== -1;
    let reactTop = isIE && el.tagName === "HTML" ? -el.scrollTo : react.top;

    return {
        left: react.left,
        top: reactTop,
        right: react.right,
        bottom: react.bottom,
        width: react.right - react.left,
        height: react.bottom - reactTop
    };
}

function getOuterSizes(el: HTMLElement) {
    let display = el.style.display;
    let visibility = el.style.visibility;

    el.style.display = "block";
    el.style.visibility = "hidden";

    let styles = window.getComputedStyle(el);
    let y = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    let x = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);

    let result = {
        width: el.offsetWidth + x,
        height: el.offsetHeight + y
    };

    //还原
    el.style.display = display;
    el.style.visibility = visibility;

    return result;
}

function getOffsetReact(el: HTMLElement) {
    return {
        width: el.offsetWidth,
        height: el.offsetHeight,
        left: el.offsetLeft,
        top: el.offsetTop,
        right: el.offsetLeft + el.offsetWidth,
        bottom: el.offsetTop + el.offsetHeight
    };
}

function getPopperClientReact(popperOffsets: DataType["offsets"]["popper"]) {
    return {
        ...popperOffsets,
        right: popperOffsets.left + popperOffsets.width,
        bottom: popperOffsets.top + popperOffsets.height
    };
}

function getOppoisitePlacement(placement: string) {
    let hash: Record<string, string> = { left: "right", right: "left", bottom: "top", top: "bottom" };

    return placement.replace(/left|right|bottom|top/g, (matched) => {
        return hash[matched];
    });
}
