import { Loading } from "../../src";

let loadingTarget: any;
let loadingCount: number = 0;

export function showLoading() {
    loadingTarget = Loading({
        fullscreen: true
    });

    loadingCount++;
}

export function hideLoading() {
    if (loadingCount > 0) {
        loadingCount--;

        if (loadingCount === 0) {
            loadingTarget.close();
        }
    }
}
