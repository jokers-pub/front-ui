export type PropsType = {
    /** 禁用 */
    disabled: boolean;
    /** 当前页码 */
    currentPage: number;
    /** 总页数 */
    pageCount: number;
    /** 分页控件最大显示个数，超过显示... */
    pagerCount: number;
    /** 上一页文本 */
    prevText: string;
    /** 下一页文本 */
    nextText: string;
    /** 共多少条数据 */
    total: number;
    /** 每页多少条配置选择项 */
    pageSizes: Array<number>;
};
