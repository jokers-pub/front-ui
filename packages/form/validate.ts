import { registerGlobalFunction } from "@joker.front/core";
import { CtrlItem } from "./form-ctrl";

export const validateGlobalFunction = {
    isRequired(message?: string) {
        return (value?: string, ctrl?: CtrlItem) => {
            let errorMsg = message || ctrl?.ctrl.props["placeholder"] || `此项为必填项`;
            // 空
            if (value === null || value === undefined) return errorMsg;
            if (Array.isArray(value)) {
                // value 为数组的情况
                if (value.length === 0) return errorMsg;
            } else if (typeof value === "string") {
                // value 为字符串的情况
                if (value.trim() === "") return errorMsg;
            } else if (typeof value === "object") {
                // value 为对象 （null已经过滤掉）
                if (Object.keys(value).length === 0) return errorMsg;
            }
        };
    },
    isInt: (message?: string) => {
        return (value: any) => {
            if (isNaN(value) || value.indexOf(".") !== -1 || value.indexOf("-") !== -1) {
                return message || "请输入正整数类型";
            }
        };
    },
    isNumber: (message?: string) => {
        return (value: any) => {
            if (isNaN(value)) {
                return message || "请填写数字类型的值";
            }
        };
    },
    isPhone: (message?: string) => {
        return (value: any) => {
            if (!value) return;
            if (value.length !== 11) {
                return message || "请输入11位手机号";
            }

            if (/^1[3456789]\d{9}$/.test(value) === false) {
                return message || "手机号码格式错误，请重新输入";
            }
        };
    },
    isEmail: (message?: string) => {
        return (value: any) => {
            if (!value) return;
            if (
                /^([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|-|.]?)*[a-zA-Z0-9]+.[a-zA-Z]{2,3}$/.test(
                    value
                ) === false
            ) {
                return message || "请输入正确的邮箱地址";
            }
        };
    },
    isMatched: (pattern: string, message?: string) => {
        if (!pattern) {
            throw new Error("需要配置pattern属性");
        }
        return (value: any) => {
            if (!value) return;

            let errorMsg = message || "正则验证失败";

            if (pattern && errorMsg) {
                if (pattern.indexOf("/") === 0 && pattern.lastIndexOf("/") === pattern.length - 1) {
                    pattern = pattern.substring(1, pattern.length - 1);
                }
                let clientRegex = new RegExp(pattern);
                if (clientRegex.test(value) === false) {
                    return errorMsg;
                }
            }
        };
    },
    isLengthInRange: (min?: number, max?: number, message?: string) => {
        return (value: any) => {
            if (value === undefined) return;
            if (!min && !max) {
                throw new Error("需配置最小值和最大值");
            }

            if (!message) {
                if (!min) {
                    message = `输入的长度请勿超过 ${max}`;
                } else if (!max) {
                    message = `输入的长度请勿小于${min}`;
                } else {
                    message = `输入的长度应为 ${min} 到 ${max}`;
                }
            }

            let strLen = (value || "").length;
            if (min === 0) {
                if (strLen > max) return message;
            } else if (max === 0) {
                if (strLen < min) message;
            } else {
                if (strLen > max || strLen < min) return message;
            }
        };
    }
};

export function registerValidateAll() {
    registerGlobalFunction(validateGlobalFunction);
}
