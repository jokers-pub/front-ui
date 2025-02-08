import { Component, ShallowObserver, VNode } from "@joker.front/core";
import { componentName } from "../utils";
import { logger } from "@joker.front/shared";

/** 组件库内部使用 */
export class FormCtrl<T = Record<string, any>> extends Component<
    {
        error: boolean;
        value: any;
        name: string;
        size: string;
        validate: Function;
        disabled: boolean;
        readonly: boolean;
        statusIcon: boolean;
    } & T
> {
    constructor(...args: any[]) {
        super(...args);

        this.$on("created", () => {
            //确保有值
            this.model.value ??= undefined;
            this.$syncProp("value");
            this.formItemOption = registerFormCtrl(this);
        });
    }

    formItemOption: ReturnType<typeof registerFormCtrl>;

    get isError() {
        return this.props.error || this.formItemOption?.ctrl.validateState.value === "error";
    }

    get form() {
        return this.$root?.closest((n) => {
            return n instanceof VNode.Component && n.component.name === componentName("form");
        })?.component;
    }

    get sizeClass() {
        return this.props.size || this.form?.props.size;
    }

    /** 控件自定义校验 */
    ctrlValidate?(val: any): string | void | Promise<string | void>;

    /** 控件自定义前置校验 */
    beforeValidate?(): void;

    triggerValidate() {
        this.$trigger("validate");
    }

    get value() {
        return this.model.value;
    }

    set value(val: any) {
        this.model.value = val;
    }
}

export type CtrlItem = {
    name: string;
    ctrl: Component<any>;
    formItem: Component<any> & { showErrorMessage: Function; clearErrorMessage: Function };
    validateState: ShallowObserver<any>;
    _validateDefferred?: { cancal: boolean; resolve: Function; active: Function };
};

export function registerFormCtrl(com: Component<any>) {
    if (!com.props.name) return;

    if ("value" in com.model === false) {
        logger.warn(
            "formCtrl",
            `The registered control does not conform to the rules of the Form form control. The [model.value] property is missing.`,
            com
        );
        return;
    }

    let name = com.props.name;

    if (com.$root && com.$root instanceof VNode.Node) {
        let form = com.$root?.closest((n) => {
            return n instanceof VNode.Component && n.component.name === componentName("form");
        })?.component;

        if (!form) {
            return;
        }

        let formItem = com.$root?.closest((n) => {
            return n instanceof VNode.Component && n.component.name === componentName("form-item");
        })?.component;

        form.registerFormCtrl(name, { ctrl: com, formItem });

        com.$on("validate", () => {
            //事件触发做默认异常补偿
            form?.validate(name).catch((e) => {});
        });

        com.$on("beforeDestroy", () => {
            form.unRegisterFormCtrl(name, com);
        });

        return {
            form,
            formItem,
            ctrl: form.ctrls[name] as CtrlItem,
            unRegisterFormCtrl: () => {
                form.unRegisterFormCtrl(name, com);
            }
        };
    }
}
