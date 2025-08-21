export function getLang(): "zh-CN" | "en" {
    let lang: any = "";

    return lang || (location.pathname.startsWith("/en") ? "en" : "zh-CN");
}
