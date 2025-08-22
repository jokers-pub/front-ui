export type PropsOption = Partial<{
    id: string;
    customClass: string;
    position: string;
    title: string;
    message: string;
    type: string;
    duration: number;
    closable: boolean;
    iconClass: string;
    offset: number;
    useHtml: boolean;
    onClose: Function;
    onClick: Function;
}>;

import { Component } from "@joker.front/core";
import JokerMessage from "./index.joker";
import { removeFilter } from "@joker.front/shared";

let seed = 0;

let allInstances: { position: string; instance: Component & Record<string, any> }[] = [];

const space = 16;

function Notification(option: string | PropsOption) {
    if (typeof option === "string") {
        option = { message: option };
    }

    option ??= {};

    option.id ||= `message` + seed++;

    //若携带id 则统一队列中只会弹出一次
    if (option.id && allInstances.some((n) => n.instance.id === option.id)) return;

    option.offset ||= 20;
    let position = option.position || "top-right";
    let instances = allInstances.filter((m) => m.position === position).map((m) => m.instance);

    instances.forEach((m) => {
        //@ts-ignore
        option.offset += m.offsetHeight + space;
    });

    let instance = new JokerMessage(option);

    instance.$mount(document.body);

    instance.$on("close", () => {
        let instances = allInstances.filter((m) => m.position === position).map((m) => m.instance);

        let len = instances.length;

        let index = instances.indexOf(instance);

        //@ts-ignore;
        let removeHeight = instance.offsetHeight;

        //剔除
        removeFilter(allInstances, (m) => {
            return m.position === position && m.instance === instance;
        });

        if (len <= 1 || index === -1 || index > instances.length - 1) return;

        //更改后面的offset
        for (let i = index + 1; i < len; i++) {
            let offsetNow = instances[i].model.offset;
            instances[i].setOffset(offsetNow - removeHeight - space);
        }
    });

    allInstances.push({ position, instance });
}

Notification.success = function (option: PropsOption) {
    option.type = "success";
    return Notification(option);
};

Notification.warning = function (option: PropsOption) {
    option.type = "warning";
    return Notification(option);
};

Notification.info = function (option: PropsOption) {
    option.type = "info";
    return Notification(option);
};

Notification.error = function (option: PropsOption) {
    option.type = "error";
    return Notification(option);
};

Notification.closeAll = function () {
    for (let i = allInstances.length - 1; i >= 0; i--) {
        allInstances[i].instance.close();
    }
};
export { Notification };
