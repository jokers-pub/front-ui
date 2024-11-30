import { Component } from "@joker.front/core";
import JokerMessageBox from "./index.joker";

type MessageCom = Component & { inputValue: string };

export type PropsOption = Partial<{
    $type: string;
    message: string;
    title: string;
    customClass: string;
    iconClass: string;
    id: string;
    center: boolean;
    type: "warning" | "error" | "success" | "info";
    closable: boolean;
    distinguishCancelAndClose: boolean;
    useHtml: boolean;
    showInput: boolean;
    inputPlaceholder: string;
    inputValue: string;
    validate: (val: string) => string | boolean | void | undefined;
    cancelButtonText: string;
    confirmButtonText: string;
    showConfirmButton: boolean;
    showCancelButton: boolean;
    roundButton: boolean;
    closeOnClickModal: boolean;
    closeOnPressEscape: boolean;
    beforeClose: (action: Action, instance: MessageCom, doClose: Function) => void;
    callback: (action: Action, instance: MessageCom) => void;
}>;

export type Action = "close" | "cancel" | "confirm";

type QueueItemType = { option: PropsOption; instance?: MessageCom };

let msgQueue: QueueItemType[] = [];

let currentMsg: QueueItemType | undefined = undefined;

function showNextMsg() {
    if (currentMsg) return;

    if (msgQueue.length) {
        currentMsg = msgQueue.shift();

        let instance = new JokerMessageBox(currentMsg?.option);

        instance.$mount(document.body);

        //@ts-ignore
        currentMsg.instance = instance;
    } else {
        currentMsg = undefined;
    }
}

function MessageBox(option: string | PropsOption, callback?: PropsOption["callback"]) {
    if (typeof option === "string") {
        option = { message: option };
    }
    callback = option.callback ?? callback;

    option.callback = (action, instance) => {
        callback?.(action, instance);

        currentMsg = undefined;
        showNextMsg();
    };

    //若携带id 则统一队列中只会弹出一次
    if (option.id && (currentMsg?.option.id === option.id || msgQueue.some((n) => n.option.id === option.id))) return;

    msgQueue.push({
        //@ts-ignore
        option
    });

    showNextMsg();
}

MessageBox.alert = function (message: string, titleOrOption?: string | PropsOption, option?: PropsOption) {
    option ??= {};
    if (typeof titleOrOption === "object") {
        option = titleOrOption;
    } else if (typeof titleOrOption === "string") {
        option.title = titleOrOption;
    }

    option.$type = "alert";
    option.message = message;
    //alert 强提示，需要确认，默认不建议其他方式关闭
    option.closeOnClickModal ??= false;
    option.closeOnPressEscape ??= false;

    MessageBox(option);
};

MessageBox.confirm = function (message: string, titleOrOption?: string | PropsOption, option?: PropsOption) {
    option ??= {};
    if (typeof titleOrOption === "object") {
        option = titleOrOption;
    } else if (typeof titleOrOption === "string") {
        option.title = titleOrOption;
    }

    option.closeOnClickModal ??= false;
    option.$type = "confirm";
    option.message = message;
    option.showCancelButton = true;

    MessageBox(option);
};

MessageBox.prompt = function (message: string, titleOrOption?: string | PropsOption, option?: PropsOption) {
    option ??= {};
    if (typeof titleOrOption === "object") {
        option = titleOrOption;
    } else if (typeof titleOrOption === "string") {
        option.title = titleOrOption;
    }

    option.$type = "prompt";
    option.message = message;
    option.closeOnClickModal ??= false;
    option.showCancelButton = true;
    option.showInput = true;

    MessageBox(option);
};

MessageBox.closeAll = function () {
    currentMsg?.instance?.$destroy(true);

    currentMsg = undefined;
    msgQueue.length = 0;
};

export { MessageBox };
