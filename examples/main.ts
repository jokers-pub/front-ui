import App from "./app.joker";
import { Router, WebHistory } from "@joker.front/router";
import { registerValidateAll } from "../src/index";
import DemoRow from "./common/components/demo-row.joker";
import DemoContainer from "./common/components/demo-container.joker";
import { registerGlobalComponent } from "@joker.front/core";
import { hideLoading, showLoading } from "./common/loading";
import Index from "./pages/index.joker";
import Layout from "./common/layout.joker";
import { getRouters } from "./common/datas/router";

registerGlobalComponent({
    DemoRow: DemoRow,
    DemoContainer
});

registerValidateAll();

let router = new Router({
    history: import.meta.define.routerType === "html5" ? new WebHistory() : undefined,
    routes: [
        {
            path: "/",
            component: Index
        },
        {
            path: "/index",
            component: Index
        },
        {
            path: "/component",
            component: Layout,
            children: getRouters()
        }
    ]
});

new App().$mount(document.getElementById("app"));

router.beforeRouteCallbacks.add(() => {
    showLoading();
});
router.afterRouteCallbacks.add(() => {
    hideLoading();
});
