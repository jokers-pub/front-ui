export function getLang(): "zh-CN" | "en" {
    let lang: any = "zh-CN";

    return lang || (location.host.startsWith("cn") ? "zh-CN" : "en");
}
