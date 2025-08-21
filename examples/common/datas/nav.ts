import { getLang } from "../utils";

export function getNavData() {
    if (getLang() === "zh-CN") {
        return [
            { title: "首页", path: "/index" },
            { title: "组件", path: "/component/layout" },
            { title: "核心框架", class: "line", path: "https://front.jokers.pub", target: "_blank" },
            { title: "官网", path: "https://www.jokers.pub", target: "_blank" },
            { title: "官方智能开发平台", path: "https://viscode.jokers.pub", target: "_blank" }
        ];
    } else {
        return [
            { title: "Home", path: "/index" },
            { title: "Component", path: "/component/layout" },
            { title: "Core Framework", class: "line", path: "https://front.jokers.pub/en", target: "_blank" },
            { title: "Official Website", path: "https://www.jokers.pub/en", target: "_blank" },
            { title: "Visualization Tool", path: "https://viscode.jokers.pub/en", target: "_blank" }
        ];
    }
}
