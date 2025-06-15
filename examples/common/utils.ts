export function getLang(): "zh-CN" | "en" {
    let lang: any = "en";

    return lang || (location.pathname.startsWith("/cn") ? "zh-CN" : "en");
}
