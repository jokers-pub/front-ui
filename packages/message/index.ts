import { Component } from "@joker.front/core";
import JokerMessage from "./index.joker";
import { remove } from "@joker.front/shared";

export type PropsOption = Partial<{
    onClose: Function;
    id: string;
    message: string;
    type: "warning" | "error" | "success" | "info";
    iconClass: string;
    center: boolean;
    closable: boolean;
    customClass: string;
    duration: number;
    offset: number;
    useHtml: boolean;
}>;
let seed = 0;

let instances: (Component & Record<string, any>)[] = [];

const space = 16;

function Message(option: string | PropsOption) {
    if (typeof option === "string") {
        option = { message: option };
    }

    option ??= {};

    option.id ||= `message` + seed++;
    option.offset ||= 20;

    //重复id 不做输出
    if (instances.some((n: any) => n.id === option.id)) return;

    instances.forEach((m) => {
        //@ts-ignore
        option.offset += m.offsetHeight + space;
    });

    let instance = new JokerMessage(option);

    instance.$mount(document.body);

    instance.$on("close", () => {
        let len = instances.length;

        let index = instances.indexOf(instance);

        //@ts-ignore;
        let removeHeight = instance.offsetHeight;

        //剔除
        remove(instances, instance);

        if (len <= 1 || index === -1 || index > instances.length - 1) return;

        //更改后面的offset
        for (let i = index; i < len - 1; i++) {
            let offsetNow = instances[i].model.offset;
            instances[i].setOffset(offsetNow - removeHeight - space);
        }
    });

    instances.push(instance);
}

Message.success = function (message: string) {
    return Message({
        type: "success",
        message
    });
};

Message.warning = function (message: string) {
    return Message({
        type: "warning",
        message
    });
};

Message.info = function (message: string) {
    return Message({
        type: "info",
        message
    });
};

Message.error = function (message: string) {
    return Message({
        type: "error",
        message
    });
};

Message.closeAll = function () {
    for (let i = instances.length - 1; i >= 0; i--) {
        instances[i].close();
    }
};
export { Message };
