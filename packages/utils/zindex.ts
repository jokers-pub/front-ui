export let zIndexManage = {
    zindex: 2000,
    nextZIndex: function () {
        return this.zindex++;
    }
};
