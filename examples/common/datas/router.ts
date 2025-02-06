import { getLang } from "../utils";

export function getRouters() {
    let isZhCN = getLang() === "zh-CN";
    return [
        {
            path: "start",
            component: isZhCN
                ? () => import("../../pages/zh-CN/start.joker")
                : () => import("../../pages/en/start.joker")
        },
        {
            path: "button",
            component: isZhCN
                ? () => import("../../pages/zh-CN/button.joker")
                : () => import("../../pages/en/button.joker")
        },
        {
            path: "icon",
            component: isZhCN ? () => import("../../pages/zh-CN/icon.joker") : () => import("../../pages/en/icon.joker")
        },
        {
            path: "layout",
            component: isZhCN
                ? () => import("../../pages/zh-CN/layout.joker")
                : () => import("../../pages/en/layout.joker")
        },
        {
            path: "color",
            component: isZhCN
                ? () => import("../../pages/zh-CN/color.joker")
                : () => import("../../pages/en/color.joker")
        },
        {
            path: "link",
            component: isZhCN ? () => import("../../pages/zh-CN/link.joker") : () => import("../../pages/en/link.joker")
        },
        {
            path: "scrollbar",
            component: isZhCN
                ? () => import("../../pages/zh-CN/scrollbar.joker")
                : () => import("../../pages/en/scrollbar.joker")
        },
        {
            path: "radio",
            component: isZhCN
                ? () => import("../../pages/zh-CN/radio.joker")
                : () => import("../../pages/en/radio.joker")
        },
        {
            path: "checkbox",
            component: isZhCN
                ? () => import("../../pages/zh-CN/checkbox.joker")
                : () => import("../../pages/en/checkbox.joker")
        },
        {
            path: "input",
            component: isZhCN
                ? () => import("../../pages/zh-CN/input.joker")
                : () => import("../../pages/en/input.joker")
        },
        {
            path: "textarea",
            component: isZhCN
                ? () => import("../../pages/zh-CN/textarea.joker")
                : () => import("../../pages/en/textarea.joker")
        },
        {
            path: "number",
            component: isZhCN
                ? () => import("../../pages/zh-CN/number.joker")
                : () => import("../../pages/en/number.joker")
        },
        {
            path: "password",
            component: isZhCN
                ? () => import("../../pages/zh-CN/password.joker")
                : () => import("../../pages/en/password.joker")
        },
        {
            path: "form",
            component: isZhCN ? () => import("../../pages/zh-CN/form.joker") : () => import("../../pages/en/form.joker")
        },
        {
            path: "transition",
            component: isZhCN
                ? () => import("../../pages/zh-CN/transition.joker")
                : () => import("../../pages/en/transition.joker")
        },
        {
            path: "select",
            component: isZhCN
                ? () => import("../../pages/zh-CN/select.joker")
                : () => import("../../pages/en/select.joker")
        },
        {
            path: "color-picker",
            component: isZhCN
                ? () => import("../../pages/zh-CN/color-picker.joker")
                : () => import("../../pages/en/color-picker.joker")
        },
        {
            path: "switch",
            component: isZhCN
                ? () => import("../../pages/zh-CN/switch.joker")
                : () => import("../../pages/en/switch.joker")
        },
        {
            path: "tooltip",
            component: isZhCN
                ? () => import("../../pages/zh-CN/tooltip.joker")
                : () => import("../../pages/en/tooltip.joker")
        },
        {
            path: "tag",
            component: isZhCN ? () => import("../../pages/zh-CN/tag.joker") : () => import("../../pages/en/tag.joker")
        },
        {
            path: "alert",
            component: isZhCN
                ? () => import("../../pages/zh-CN/alert.joker")
                : () => import("../../pages/en/alert.joker")
        },
        {
            path: "carousel",
            component: isZhCN
                ? () => import("../../pages/zh-CN/carousel.joker")
                : () => import("../../pages/en/carousel.joker")
        },
        {
            path: "progress",
            component: isZhCN
                ? () => import("../../pages/zh-CN/progress.joker")
                : () => import("../../pages/en/progress.joker")
        },
        {
            path: "badge",
            component: isZhCN
                ? () => import("../../pages/zh-CN/badge.joker")
                : () => import("../../pages/en/badge.joker")
        },
        {
            path: "avatar",
            component: isZhCN
                ? () => import("../../pages/zh-CN/avatar.joker")
                : () => import("../../pages/en/avatar.joker")
        },
        {
            path: "slider",
            component: isZhCN
                ? () => import("../../pages/zh-CN/slider.joker")
                : () => import("../../pages/en/slider.joker")
        },
        {
            path: "divider",
            component: isZhCN
                ? () => import("../../pages/zh-CN/divider.joker")
                : () => import("../../pages/en/divider.joker")
        },
        {
            path: "rate",
            component: isZhCN ? () => import("../../pages/zh-CN/rate.joker") : () => import("../../pages/en/rate.joker")
        },
        {
            path: "skeleton",
            component: isZhCN
                ? () => import("../../pages/zh-CN/skeleton.joker")
                : () => import("../../pages/en/skeleton.joker")
        },
        {
            path: "loading",
            component: isZhCN
                ? () => import("../../pages/zh-CN/loading.joker")
                : () => import("../../pages/en/loading.joker")
        },
        {
            path: "empty",
            component: isZhCN
                ? () => import("../../pages/zh-CN/empty.joker")
                : () => import("../../pages/en/empty.joker")
        },
        {
            path: "message",
            component: isZhCN
                ? () => import("../../pages/zh-CN/message.joker")
                : () => import("../../pages/en/message.joker")
        },
        {
            path: "message-box",
            component: isZhCN
                ? () => import("../../pages/zh-CN/message-box.joker")
                : () => import("../../pages/en/message-box.joker")
        },
        {
            path: "notification",
            component: isZhCN
                ? () => import("../../pages/zh-CN/notification.joker")
                : () => import("../../pages/en/notification.joker")
        },
        {
            path: "result",
            component: isZhCN
                ? () => import("../../pages/zh-CN/result.joker")
                : () => import("../../pages/en/result.joker")
        },
        {
            path: "dialog",
            component: isZhCN
                ? () => import("../../pages/zh-CN/dialog.joker")
                : () => import("../../pages/en/dialog.joker")
        },
        {
            path: "popover",
            component: isZhCN
                ? () => import("../../pages/zh-CN/popover.joker")
                : () => import("../../pages/en/popover.joker")
        },
        {
            path: "popconfirm",
            component: isZhCN
                ? () => import("../../pages/zh-CN/popconfirm.joker")
                : () => import("../../pages/en/popconfirm.joker")
        },
        {
            path: "descriptions",
            component: isZhCN
                ? () => import("../../pages/zh-CN/descriptions.joker")
                : () => import("../../pages/en/descriptions.joker")
        },
        {
            path: "cascader",
            component: isZhCN
                ? () => import("../../pages/zh-CN/cascader.joker")
                : () => import("../../pages/en/cascader.joker")
        },
        {
            path: "timeline",
            component: isZhCN
                ? () => import("../../pages/zh-CN/timeline.joker")
                : () => import("../../pages/en/timeline.joker")
        },
        {
            path: "steps",
            component: isZhCN
                ? () => import("../../pages/zh-CN/steps.joker")
                : () => import("../../pages/en/steps.joker")
        },
        {
            path: "autocomplete",
            component: isZhCN
                ? () => import("../../pages/zh-CN/autocomplete.joker")
                : () => import("../../pages/en/autocomplete.joker")
        },
        {
            path: "card",
            component: isZhCN ? () => import("../../pages/zh-CN/card.joker") : () => import("../../pages/en/card.joker")
        },
        {
            path: "backtop",
            component: isZhCN
                ? () => import("../../pages/zh-CN/backtop.joker")
                : () => import("../../pages/en/backtop.joker")
        },
        {
            path: "time-picker",
            component: isZhCN
                ? () => import("../../pages/zh-CN/time-picker.joker")
                : () => import("../../pages/en/time-picker.joker")
        },
        {
            path: "date-picker",
            component: isZhCN
                ? () => import("../../pages/zh-CN/date-picker.joker")
                : () => import("../../pages/en/date-picker.joker")
        },
        {
            path: "pagination",
            component: isZhCN
                ? () => import("../../pages/zh-CN/pagination.joker")
                : () => import("../../pages/en/pagination.joker")
        },
        {
            path: "tree",
            component: isZhCN ? () => import("../../pages/zh-CN/tree.joker") : () => import("../../pages/en/tree.joker")
        },
        {
            path: "breadcrumb",
            component: isZhCN
                ? () => import("../../pages/zh-CN/breadcrumb.joker")
                : () => import("../../pages/en/breadcrumb.joker")
        },
        {
            path: "table",
            component: isZhCN
                ? () => import("../../pages/zh-CN/table.joker")
                : () => import("../../pages/en/table.joker")
        },
        {
            path: "collapse",
            component: isZhCN
                ? () => import("../../pages/zh-CN/collapse.joker")
                : () => import("../../pages/en/collapse.joker")
        },
        {
            path: "image",
            component: isZhCN
                ? () => import("../../pages/zh-CN/image.joker")
                : () => import("../../pages/en/image.joker")
        },
        {
            path: "drawer",
            component: isZhCN
                ? () => import("../../pages/zh-CN/drawer.joker")
                : () => import("../../pages/en/drawer.joker")
        },
        {
            path: "dropdown",
            component: isZhCN
                ? () => import("../../pages/zh-CN/dropdown.joker")
                : () => import("../../pages/en/dropdown.joker")
        },
        {
            path: "upload-btn",
            component: isZhCN
                ? () => import("../../pages/zh-CN/upload-btn.joker")
                : () => import("../../pages/en/upload-btn.joker")
        },
        {
            path: "tabs",
            component: isZhCN ? () => import("../../pages/zh-CN/tabs.joker") : () => import("../../pages/en/tabs.joker")
        }
    ];
}
