let isDragging = false;

export function draggable(
    el: HTMLElement,
    options: {
        start?: (e: MouseEvent) => void;
        end?: (e: MouseEvent) => void;
        drag?: (e: MouseEvent) => void;
    }
) {
    function move(e: MouseEvent) {
        options.drag?.(e);
    }

    function up(e: MouseEvent) {
        document.removeEventListener("mousemove", move);
        document.removeEventListener("mouseup", up);

        document.onselectstart = null;
        document.ondragstart = null;

        isDragging = false;

        options.end?.(e);
    }

    el.addEventListener("mousedown", function (e: MouseEvent) {
        if (isDragging) return;
        document.onselectstart = () => false;
        document.ondragstart = () => false;

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);

        isDragging = true;

        options.start?.(e);
    });
}
