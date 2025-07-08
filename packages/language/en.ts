export const LANG_EN = {
    week: "Week",
    weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    year: "Year",
    month: "Month",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    selectDate: "Select Date",
    selectTime: "Select Time",
    startDate: "Start Date",
    startTime: "Start Time",
    endDate: "End Date",
    endTime: "End Time",
    cancel: "Cancel",
    confirm: "Confirm",
    start: "Start",
    end: "End",
    emptyText: "No data",
    submiting: "Submitting. Please do not operate.",

    validateError: "Validation failed",
    validateRequired: "This field is required",
    validateIsInt: "Please enter a positive integer",
    validateIsNumber: "Please enter a numeric value",
    validatePhone1: "Please enter an 11-digit mobile phone number",
    validatePhone2: "The mobile phone number format is incorrect. Please re-enter.",
    validateEmail: "Please enter a valid email address",
    validateMatcher: "Regular expression validation failed",
    validateLength1: "The input length should not exceed",
    validateLength2: "The input length should not be less than",
    validateLength3: "The input length should be",

    imgLoadError: "Loading failed",
    inputPlaceholder: "Please enter content",
    messageBoxTitle: "Message",

    pagerTsotal: "Total {total} items",
    pagerGoto: "Go to",
    pagerPagesize: "items/page",

    rates: ["Very poor", "Disappointed", "Average", "Satisfied", "Surprised"],

    selectPlaceholder: "Please select",
    noMatchText: "No matching data",
    createNew: "Create new value",

    loading: "Loading",
    messageBox: {
        confirm: "OK",
        cancel: "Cancel"
    },

    selectFile: "Select file",
    uploadValidateCount: (maxFileCount: number) => `Please select a maximum of ${maxFileCount} files`,
    uploadValidateType: (name: string, mimeType: string[]) =>
        `${name} is not an allowed upload type. Allowed types are: ${mimeType.join(",")}. Please select again.`,
    uploadValidateSize: (name: string, max: number) => `${name} file exceeds the size limit: ${max}kb`
};
