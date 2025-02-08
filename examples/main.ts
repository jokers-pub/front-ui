import App from "./app.joker";
import { Router, WebHistory } from "@joker.front/router";
import { registerValidateAll, setLang } from "../src/index";
import DemoRow from "./common/components/demo-row.joker";
import DemoContainer from "./common/components/demo-container.joker";
import { registerGlobalComponent } from "@joker.front/core";

import Index from "./pages/index.joker";
import Layout from "./common/layout.joker";
import { getRouters } from "./common/datas/router";
import { getLang } from "./common/utils";

registerGlobalComponent({
    DemoRow: DemoRow,
    DemoContainer
});

registerValidateAll();

new Router({
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

setLang(getLang());
new App().$mount(document.getElementById("app"));
