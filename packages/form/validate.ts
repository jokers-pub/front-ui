import { registerGlobalFunction } from "@joker.front/core";
import { CtrlItem } from "./form-ctrl";
import { getValueByLang } from "../utils/lang";

export const validateGlobalFunction = {
    isRequired(message?: string) {
        return (value?: string, ctrl?: CtrlItem) => {
            let errorMsg = message || ctrl?.ctrl.props["placeholder"] || getValueByLang("validateRequired");
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
                return message || getValueByLang("validateIsInt");
            }
        };
    },
    isNumber: (message?: string) => {
        return (value: any) => {
            if (isNaN(value)) {
                return message || getValueByLang("validateIsNumber");
            }
        };
    },
    isPhone: (message?: string) => {
        return (value: any) => {
            if (!value) return;
            if (value.length !== 11) {
                return message || getValueByLang("validatePhone1");
            }

            if (/^1[3456789]\d{9}$/.test(value) === false) {
                return message || getValueByLang("validatePhone2");
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
                return message || getValueByLang("validateEmail");
            }
        };
    },
    isMatched: (pattern: string, message?: string) => {
        if (!pattern) {
            throw new Error("isMatched:The pattern attribute needs to be configured.");
        }
        return (value: any) => {
            if (!value) return;

            let errorMsg = message || getValueByLang("validateMatcher");

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
                throw new Error("isLengthInRange: The minimum and maximum values need to be configured.");
            }

            if (!message) {
                if (!min) {
                    message = `${getValueByLang("validateLength1")} ${max}`;
                } else if (!max) {
                    message = `${getValueByLang("validateLength2")} ${min}`;
                } else {
                    message = `${getValueByLang("validateLength3")} ${min} - ${max}`;
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
