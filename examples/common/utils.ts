export function getLang(): "zh-CN" | "en" {
    let lang: any = "";

    return lang || (location.host.startsWith("cn") ? "zh-CN" : "en");
}
