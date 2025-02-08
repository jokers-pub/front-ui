import { LANG_ZH_CN } from "../language/zh-cn";
import { LANG_EN } from "../language/en";

let lang = "";

export function getLang() {
    return lang || (navigator.language === "zh-CN" ? "zh-CN" : "en");
}

export function setLang(value: "zh-CN" | "en") {
    lang = value;
}

export function getValueByLang(key: string) {
    let langData: Record<string, any> = getLang() === "zh-CN" ? LANG_ZH_CN : LANG_EN;

    return langData[key];
}
