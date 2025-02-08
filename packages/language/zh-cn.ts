export const LANG_ZH_CN = {
    week: "周",
    weeks: ["日", "一", "二", "三", "四", "五", "六"],
    months: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
    year: "年",
    month: "月",
    prevYear: "前一年",
    nextYear: "后一年",
    prevMonth: "上个月",
    nextMonth: "下个月",
    selectDate: "选择日期",
    selectTime: "选择时间",
    startDate: "开始日期",
    startTime: "开始时间",
    endDate: "结束日期",
    endTime: "结束时间",
    cancel: "取消",
    confirm: "确定",
    start: "开始",
    end: "结束",
    emptyText: "暂无数据",
    submiting: "正在提交中，请勿操作",
    illegalCharacters: "输入内容存在非法字符，请重新填写",

    validateError: "验证失败",
    validateRequired: "此项为必填项",
    validateIsInt: "请输入正整数类型",
    validateIsNumber: "请填写数字类型的值",
    validatePhone1: "请输入11位手机号",
    validatePhone2: "手机号码格式错误，请重新输入",
    validateEmail: "请输入正确的邮箱地址",
    validateMatcher: "正则验证失败",
    validateLength1: "输入的长度请勿超过",
    validateLength2: "输入的长度请勿小于",
    validateLength3: "输入的长度应为",

    imgLoadError: "加载失败",
    inputPlaceholder: "请输入内容",
    messageBoxTitle: "提示",

    pagerTsotal: "共 {total} 条",
    pagerGoto: "前往",
    pagerPagesize: "条/页",

    rates: ["极差", "失望", "一般", "满意", "惊喜"],

    selectPlaceholder: "请选择",
    noMatchText: "无匹配数据",
    createNew: "创建新值",

    loading: "加载中",

    selectFile: "选择文件",
    uploadValidateCount: (maxFileCount: number) => `请选择最多选择${maxFileCount}个文件`,
    uploadValidateType: (name: string, mimeType: string[]) =>
        `${name}不是被允许的上传类型，可上传类型有：${mimeType.join(",")}，请重新选择。`,
    uploadValidateSize: (name: string, max: number) => `${name}文件超出了限制大小：${max}kb`
};
