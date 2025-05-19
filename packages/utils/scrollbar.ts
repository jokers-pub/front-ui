export function scrollIntoView(container: HTMLElement, selected?: HTMLElement) {
    if (!selected) {
        container.scrollTop = 0;
        container.scrollLeft = 0; // 重置水平滚动位置
        return;
    }

    let offsetParents: HTMLElement[] = [];

    let pointer = selected.offsetParent as HTMLElement;

    while (pointer && container !== pointer && container.contains(pointer)) {
        offsetParents.push(pointer);
        pointer = pointer.offsetParent as HTMLElement;
    }

    // 垂直方向计算
    let top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
    let bottom = top + selected.offsetHeight;
    let viewReactTop = container.scrollTop;
    let viewReactBottom = viewReactTop + container.clientHeight;

    if (top < viewReactTop) {
        container.scrollTop = top;
    } else if (bottom > viewReactBottom) {
        container.scrollTop = bottom - container.clientHeight;
    }

    // 水平方向计算
    let left = selected.offsetLeft + offsetParents.reduce((prev, curr) => prev + curr.offsetLeft, 0);
    let right = left + selected.offsetWidth;
    let viewRectLeft = container.scrollLeft;
    let viewRectRight = viewRectLeft + container.clientWidth;

    if (left < viewRectLeft) {
        container.scrollLeft = left;
    } else if (right > viewRectRight) {
        container.scrollLeft = right - container.clientWidth;
    }
}
