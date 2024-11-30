export function scrollIntoView(container: HTMLElement, selected?: HTMLElement) {
    if (!selected) {
        container.scrollTop = 0;
        return;
    }

    let offsetParents: HTMLElement[] = [];

    let pointer = selected.offsetParent as HTMLElement;

    while (pointer && container !== pointer && container.contains(pointer)) {
        offsetParents.push(pointer);
        pointer = pointer.offsetParent as HTMLElement;
    }

    let top = selected.offsetTop + offsetParents.reduce((prev, curr) => prev + curr.offsetTop, 0);
    let bottom = top + selected.offsetHeight;
    let viewReactTop = container.scrollTop;
    let viewReactBottom = viewReactTop + container.clientHeight;

    if (top < viewReactTop) {
        container.scrollTop = top;
    } else if (bottom > viewReactBottom) {
        container.scrollTop = bottom - container.clientHeight;
    }
}
