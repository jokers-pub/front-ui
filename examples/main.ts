import App from "./app.joker";
import { Router } from "@joker.front/router";
import { registerValidateAll } from "../src/index";
import DemoRow from "./common/components/demo-row.joker";
import DemoContainer from "./common/components/demo-container.joker";
import { registerGlobalComponent } from "@joker.front/core";
import { showLoading } from "./common/loading";
import Index from "./pages/index.joker";
import Layout from "./common/layout.joker";

registerGlobalComponent({
    DemoRow: DemoRow,
    DemoContainer
});

registerValidateAll();

let router = new Router({
    routes: [
        {
            path: "/",
            redirect: "/index"
        },
        {
            path: "/index",
            component: Index
        },
        {
            path: "/component/start",
            component: Layout,
            children: [
                {
                    path: "/component/start",
                    component: () => import("./pages/start.joker")
                },
                {
                    path: "/component/button",
                    component: () => import("./pages/button.joker")
                },
                {
                    path: "/component/icon",
                    component: () => import("./pages/icon.joker")
                },
                {
                    path: "/component/layout",
                    component: () => import("./pages/layout.joker")
                },
                {
                    path: "/component/color",
                    component: () => import("./pages/color.joker")
                },
                {
                    path: "/component/link",
                    component: () => import("./pages/link.joker")
                },
                {
                    path: "/component/scrollbar",
                    component: () => import("./pages/scrollbar.joker")
                },
                {
                    path: "/component/radio",
                    component: () => import("./pages/radio.joker")
                },
                {
                    path: "/component/checkbox",
                    component: () => import("./pages/checkbox.joker")
                },
                {
                    path: "/component/input",
                    component: () => import("./pages/input.joker")
                },
                {
                    path: "/component/textarea",
                    component: () => import("./pages/textarea.joker")
                },
                {
                    path: "/component/number",
                    component: () => import("./pages/number.joker")
                },
                {
                    path: "/component/password",
                    component: () => import("./pages/password.joker")
                },
                {
                    path: "/component/form",
                    component: () => import("./pages/form.joker")
                },
                {
                    path: "/component/transition",
                    component: () => import("./pages/transition.joker")
                },
                {
                    path: "/component/select",
                    component: () => import("./pages/select.joker")
                },
                {
                    path: "/component/color-picker",
                    component: () => import("./pages/color-picker.joker")
                },
                {
                    path: "/component/switch",
                    component: () => import("./pages/switch.joker")
                },
                {
                    path: "/component/tooltip",
                    component: () => import("./pages/tooltip.joker")
                },
                {
                    path: "/component/tag",
                    component: () => import("./pages/tag.joker")
                },
                {
                    path: "/component/alert",
                    component: () => import("./pages/alert.joker")
                },
                {
                    path: "/component/carousel",
                    component: () => import("./pages/carousel.joker")
                },
                {
                    path: "/component/progress",
                    component: () => import("./pages/progress.joker")
                },
                {
                    path: "/component/badge",
                    component: () => import("./pages/badge.joker")
                },
                {
                    path: "/component/avatar",
                    component: () => import("./pages/avatar.joker")
                },
                {
                    path: "/component/slider",
                    component: () => import("./pages/slider.joker")
                },
                {
                    path: "/component/divider",
                    component: () => import("./pages/divider.joker")
                },
                {
                    path: "/component/rate",
                    component: () => import("./pages/rate.joker")
                },
                {
                    path: "/component/skeleton",
                    component: () => import("./pages/skeleton.joker")
                },
                {
                    path: "/component/loading",
                    component: () => import("./pages/loading.joker")
                },
                {
                    path: "/component/empty",
                    component: () => import("./pages/empty.joker")
                },
                {
                    path: "/component/message",
                    component: () => import("./pages/message.joker")
                },
                {
                    path: "/component/message-box",
                    component: () => import("./pages/message-box.joker")
                },
                {
                    path: "/component/notification",
                    component: () => import("./pages/notification.joker")
                },
                {
                    path: "/component/result",
                    component: () => import("./pages/result.joker")
                },
                {
                    path: "/component/dialog",
                    component: () => import("./pages/dialog.joker")
                },
                {
                    path: "/component/popover",
                    component: () => import("./pages/popover.joker")
                },
                {
                    path: "/component/popconfirm",
                    component: () => import("./pages/popconfirm.joker")
                },
                {
                    path: "/component/descriptions",
                    component: () => import("./pages/descriptions.joker")
                },
                {
                    path: "/component/cascader",
                    component: () => import("./pages/cascader.joker")
                },
                {
                    path: "/component/timeline",
                    component: () => import("./pages/timeline.joker")
                },
                {
                    path: "/component/steps",
                    component: () => import("./pages/steps.joker")
                },
                {
                    path: "/component/autocomplete",
                    component: () => import("./pages/autocomplete.joker")
                },
                {
                    path: "/component/card",
                    component: () => import("./pages/card.joker")
                },
                {
                    path: "/component/backtop",
                    component: () => import("./pages/backtop.joker")
                },
                {
                    path: "/component/time-picker",
                    component: () => import("./pages/time-picker.joker")
                },
                {
                    path: "/component/date-picker",
                    component: () => import("./pages/date-picker.joker")
                },
                {
                    path: "/component/pagination",
                    component: () => import("./pages/pagination.joker")
                },
                {
                    path: "/component/tree",
                    component: () => import("./pages/tree.joker")
                },
                {
                    path: "/component/breadcrumb",
                    component: () => import("./pages/breadcrumb.joker")
                },
                {
                    path: "/component/table",
                    component: () => import("./pages/table.joker")
                },
                {
                    path: "/component/collapse",
                    component: () => import("./pages/collapse.joker")
                },
                {
                    path: "/component/image",
                    component: () => import("./pages/image.joker")
                },
                {
                    path: "/component/drawer",
                    component: () => import("./pages/drawer.joker")
                },
                {
                    path: "/component/dropdown",
                    component: () => import("./pages/dropdown.joker")
                },
                {
                    path: "/component/upload-btn",
                    component: () => import("./pages/upload-btn.joker")
                },
                {
                    path: "/component/tabs",
                    component: () => import("./pages/tabs.joker")
                }
            ]
        }
    ]
});

new App().$mount(document.getElementById("app"));

router.beforeRouteCallbacks.add(() => {
    showLoading();
});
