export function getLang() {
    let lang = "";

    return lang || (location.host.startsWith("cn") ? "zh-CN" : "en");
}
