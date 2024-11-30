import dayjs, { ManipulateType } from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import weekOfYear from "dayjs/plugin/weekOfYear";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(advancedFormat);
dayjs.extend(weekOfYear);
dayjs.extend(customParseFormat);

export const DEFAULT_FORMATS: Record<string, string> = {
    date: "YYYY-MM-DD",
    month: "YYYY-MM",
    datetime: "YYYY-MM-DD HH:mm:ss",
    time: "HH:mm:ss",
    week: "YYYY-ww",
    timerange: "HH:mm:ss",
    daterange: "YYYY-MM-DD",
    monthrange: "YYYY-MM",
    datetimerange: "YYYY-MM-DD HH:mm:ss",
    year: "YYYY"
};

const DATE_FORMATTER = function (value: Date, format: string) {
    return dayjs(value).format(format);
};

const DATE_PARSER = function (text: string, format: string) {
    return dayjs(text, format).toDate();
};

const RANGE_FORMATTER = function (value: any, format: string) {
    if (Array.isArray(value) && value.length === 2) {
        const start = value[0];
        const end = value[1];

        if (start && end) {
            return [DATE_FORMATTER(start, format), DATE_FORMATTER(end, format)];
        }
    }
    return "";
};
const RANGE_PARSER = function (array: any, format: string, separator: string) {
    if (!Array.isArray(array)) {
        array = array.split(separator);
    }
    if (array.length === 2) {
        const range1 = array[0];
        const range2 = array[1];

        return [DATE_PARSER(range1, format), DATE_PARSER(range2, format)];
    }
    return [];
};
const TYPE_VALUE_RESOLVER_MAP = {
    default: {
        formatter(value: any) {
            if (!value) return "";
            return "" + value;
        },
        parser(text: any) {
            if (text === undefined || text === "") return undefined;
            return text;
        }
    },
    week: {
        formatter(value: any, format: string) {
            return dayjs(value).format(format);
        },
        parser(text: any) {
            if (!text) return undefined;

            if (text instanceof Date) return text;

            let arr = text.split("-");

            let year = arr[0];
            let weekNum = arr[1];

            //@ts-ignore
            return dayjs(`${year}-01-01`, "YYYY-MM-DD").week(parseFloat(weekNum)).toDate();
        }
    },
    date: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    datetime: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    daterange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    monthrange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    datetimerange: {
        formatter: RANGE_FORMATTER,
        parser: RANGE_PARSER
    },
    timerange: {
        formatter(values: [string | TimeMode], format: string) {
            if (!values) return [];

            let result = [];
            for (let value of values) {
                result.push(formatTime(value, format));
            }

            return result;
        },
        parser(text: string[], format: string) {
            if (text === undefined || text.length === 0) return undefined;

            let result = [];
            for (let item of text) {
                result.push(formatTime(item, format));
            }

            return result;
        }
    },
    time: {
        formatter(value: string | TimeMode, format: string) {
            if (!value) return "";

            return formatTime(value, format);
        },
        parser(text: string, format: string) {
            if (text === undefined || text === "") return undefined;

            return formatTime(text, format);
        }
    },
    month: {
        formatter: DATE_FORMATTER,
        parser: DATE_PARSER
    },
    year: {
        formatter(value: number | Date, format: string) {
            if (typeof value === "number") {
                return dayjs(new Date(value, 0, 1)).format(format);
            } else {
                return dayjs(value).format(format);
            }
        },
        parser: DATE_PARSER
    }
};
export function parseAsFormatAndType(value: any, customFormat: string | undefined, type: string, rangeSeparator = "-") {
    if (!value) return undefined;

    //@ts-ignore
    let parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP.default).parser;

    //@ts-ignore
    let format = customFormat || DEFAULT_FORMATS[type];

    return parser(value, format, rangeSeparator);
}

export function formatAsFormatAndType(value: any, customFormat: string | undefined, type: string) {
    if (!value) return undefined;

    //@ts-ignore
    let formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP.default).formatter;

    //@ts-ignore
    let format = customFormat || DEFAULT_FORMATS[type];

    return formatter(value, format);
}

export type TimeMode = {
    hours: number;
    minutes: number;
    seconds: number;
};

export function parseTime(time: string | TimeMode | undefined, format: string): TimeMode {
    if (typeof time === "object") return time;

    let value = dayjs(time, format);

    if (isNaN(value.hour()) === false) {
        return {
            hours: value.hour(),
            minutes: value.minute(),
            seconds: value.second()
        };
    }

    //fixed
    return { hours: 0, minutes: 0, seconds: 0 };
}

export function compareTime(value1: string | TimeMode, value2: string | TimeMode, format: string) {
    if (typeof value1 === "string") {
        value1 = parseTime(value1, format);
    }

    if (typeof value2 === "string") {
        value2 = parseTime(value2, format);
    }

    let var1 = value1.seconds + value1.minutes * 60 + value1.hours * 60 * 60;
    let var2 = value2.seconds + value2.minutes * 60 + value2.hours * 60 * 60;

    if (var1 === var2) {
        return 0;
    }

    return var1 > var2 ? 1 : -1;
}

export function validateTimeInRange(
    time: string | TimeMode,
    format: string,
    selectableRange: Array<(TimeMode | string)[] | string> | undefined
) {
    if (!selectableRange?.length) return true;

    for (let item of selectableRange) {
        let start: any;
        let end: any;

        if (typeof item === "string") {
            let arrItem = item.split("-");

            start = arrItem[0];
            end = arrItem[1];
        } else {
            start = item[0];
            end = item[1];
        }

        if (compareTime(time, start, format) >= 0 && compareTime(time, end, format) <= 0) {
            return true;
        }
    }

    return false;
}

export function addDate(date: Date, val: number, type: ManipulateType) {
    return dayjs(date).add(val, type).toDate();
}

export function subtractDate(date: Date, val: number, type: ManipulateType) {
    return dayjs(date).subtract(val, type).toDate();
}

function formatTime(time: TimeMode | string, format: string) {
    if (time === undefined || time === "") return "";

    if (typeof time === "string") {
        time = parseTime(time, format);
    }

    return dayjs(`${time.hours}:${time.minutes}:${time.seconds || "00"}`, "HH:mm:ss").format(format);
}

export function extractDateFormat(format: string) {
    return format
        .replace(/\W?m{1,2}|\W?ZZ/g, "")
        .replace(/\W?h{1,2}|\W?s{1,3}|\W?a/gi, "")
        .trim();
}

export function extractTimeFormat(format: string) {
    return format.replace(/\W?D{1,2}|\W?Do|\W?d{1,4}|\W?M{1,4}|\W?y{2,4}/g, "").trim();
}

export function getStartDateOfMonth(year: number, month: number): Date {
    let result = new Date(year, month, 1);

    let day = result.getDay();

    return subtractDate(result, day === 0 ? 7 : day, "d");
}

export function getDayCountOfMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
}

export function getDayCountOfYear(year: number) {
    let isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

    return isLeapYear ? 366 : 365;
}

export function getWeekNumber(date: Date) {
    return dayjs(date).week();
}

export function clearTime(date: Date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
}

export function parseDate(val: string, format: string) {
    return dayjs(val, format).toDate();
}

export function setTime(date: Date, time: string) {
    let timeModel = parseTime(time, "HH:mm:ss");
    return dayjs(date).set("h", timeModel.hours).set("m", timeModel.minutes).set("s", timeModel.seconds).toDate();
}

export type Shortcut = { text: string; onClick: (callBack: (val?: any) => void) => void };
