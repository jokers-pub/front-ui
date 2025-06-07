/**
 * 使元素可在其父容器内拖拽的工具函数
 * @param element - 要变为可拖拽的DOM元素
 * @param options - 可选配置对象
 * @returns 包含取消拖拽功能的对象
 */
export function makeElementDraggable(element: HTMLElement, options: DraggableOptions = {}) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hasCustom = false;
    let moveBarElement: HTMLElement | null = null;

    // 查找定位祖先容器
    function findPositionedParent(el: HTMLElement): HTMLElement {
        let parent = el.parentElement;
        while (parent) {
            const style = getComputedStyle(parent);
            if (options.containerSelector && parent.matches(options.containerSelector)) return parent;
            if (["relative", "absolute", "fixed", "sticky"].includes(style.position)) return parent;
            if (parent.tagName === "BODY" || parent.tagName === "HTML") break;
            parent = parent.parentElement;
        }
        return document.body;
    }
    const container = findPositionedParent(element);

    // 容器边界计算
    function getContainerBounds() {
        const rect = container.getBoundingClientRect();
        return { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
    }

    // 最大移动范围计算
    function getMaxBounds() {
        const { width, height } = getContainerBounds();
        const { width: elemWidth, height: elemHeight } = element.getBoundingClientRect();
        return { maxX: width - elemWidth, maxY: height - elemHeight };
    }

    // 边界限制
    function constrainToBounds(x: number, y: number): Position {
        const { maxX, maxY } = getMaxBounds();
        return {
            x: Math.max(0, Math.min(x, maxX)),
            y: Math.max(0, Math.min(y, maxY))
        };
    }

    // 位置更新
    function updatePosition(x: number, y: number): void {
        const { x: finalX, y: finalY } = constrainToBounds(x, y);
        currentX = finalX;
        currentY = finalY;

        if (options.useTransform) {
            element.style.transform = `translate(${finalX}px, ${finalY}px)`;
        } else {
            element.style.left = `${finalX}px`;
            element.style.top = `${finalY}px`;
        }
        hasCustom = true;
        options.onDrag?.({ x: finalX, y: finalY });
    }

    // 鼠标按下处理
    function handleMouseDown(e: MouseEvent): void {
        if (e.button !== 0) return; // 只处理左键

        // 如果指定了拖拽条且事件不是从拖拽条触发的，则忽略
        if (moveBarElement && !moveBarElement.contains(e.target as Node)) {
            return;
        }

        // 阻止默认行为
        if (options.preventDefault !== false) {
            e.preventDefault();
        }
        if (options.stopPropagation !== false) {
            e.stopPropagation();
        }

        // 设置定位
        if (getComputedStyle(element).position === "static") {
            element.style.position = "absolute";
        }

        // 计算初始偏移量
        const elemRect = element.getBoundingClientRect();
        offsetX = e.clientX - elemRect.left;
        offsetY = e.clientY - elemRect.top;

        // 获取当前位置（支持transform）
        if (options.useTransform) {
            const transform = element.style.transform.match(/translate\((\d+)px, (\d+)px\)/);
            currentX = transform ? parseInt(transform[1], 10) : 0;
            currentY = transform ? parseInt(transform[2], 10) : 0;
        } else {
            const containerBounds = getContainerBounds();
            currentX = elemRect.left - containerBounds.left;
            currentY = elemRect.top - containerBounds.top;
        }

        isDragging = true;

        // 添加拖拽状态类
        options.draggingClass && element.classList.add(options.draggingClass);

        // 触发开始回调
        options.onDragStart?.({ x: currentX, y: currentY });

        // 绑定全局鼠标移动和鼠标释放事件监听器
        document.addEventListener("mousemove", handleGlobalMouseMove);
        document.addEventListener("mouseup", handleGlobalMouseUp);
    }

    // 全局鼠标移动处理（实时获取最新坐标）
    function handleGlobalMouseMove(e: MouseEvent): void {
        if (!isDragging) return;

        const containerBounds = getContainerBounds();
        const newX = e.clientX - containerBounds.left - offsetX;
        const newY = e.clientY - containerBounds.top - offsetY;

        updatePosition(newX, newY);
    }

    // 全局鼠标释放处理
    function handleGlobalMouseUp(): void {
        if (!isDragging) return;

        isDragging = false;

        // 移除拖拽状态类
        options.draggingClass && element.classList.remove(options.draggingClass);

        // 触发结束回调
        options.onDragEnd?.({ x: currentX, y: currentY });

        // 移除全局鼠标移动和鼠标释放事件监听器
        document.removeEventListener("mousemove", handleGlobalMouseMove);
        document.removeEventListener("mouseup", handleGlobalMouseUp);
    }

    // 窗口Resize处理
    function handleResize() {
        if (hasCustom) updatePosition(currentX, currentY);
    }

    // 初始化事件绑定
    if (options.moveBarEl) {
        if (typeof options.moveBarEl === "string") {
            moveBarElement = element.querySelector(options.moveBarEl);
        } else if (options.moveBarEl instanceof HTMLElement) {
            moveBarElement = options.moveBarEl;
        }

        if (moveBarElement) {
            moveBarElement.addEventListener("mousedown", handleMouseDown);
        } else {
            console.warn("指定的moveBarEl未找到或无效，将使用整个元素作为拖拽区域");
            element.addEventListener("mousedown", handleMouseDown);
        }
    } else {
        element.addEventListener("mousedown", handleMouseDown);
    }

    window.addEventListener("resize", handleResize);

    return {
        destroy() {
            if (moveBarElement) {
                moveBarElement.removeEventListener("mousedown", handleMouseDown);
            } else {
                element.removeEventListener("mousedown", handleMouseDown);
            }
            document.removeEventListener("mousemove", handleGlobalMouseMove);
            document.removeEventListener("mouseup", handleGlobalMouseUp);
            window.removeEventListener("resize", handleResize);
        },
        resize: handleResize
    };
}

// 类型定义
interface Position {
    x: number;
    y: number;
}
export interface DraggableOptions {
    containerSelector?: string; // 自定义容器选择器
    useTransform?: boolean; // 是否使用transform定位（默认left/top）
    draggingClass?: string; // 拖拽时添加的CSS类名
    preventDefault?: boolean; // 是否阻止默认事件（默认true）
    stopPropagation?: boolean; // 是否阻止事件冒泡（默认true）
    onDragStart?: (pos: Position) => void; // 拖拽开始回调
    onDrag?: (pos: Position) => void; // 拖拽中回调
    onDragEnd?: (pos: Position) => void; // 拖拽结束回调
    moveBarEl?: string | HTMLElement; // 拖拽条元素选择器或元素引用
}
