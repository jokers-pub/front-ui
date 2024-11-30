import { removeFilter } from "@joker.front/shared";
import { zIndexManage } from "./zindex";

type ModalItem = {
    id: string;
    zIndex: string;
};

type InstanceItem = {
    closeOnPressEscape?: boolean;
    close?: Function;
};

let modalDom: HTMLElement | undefined = undefined;

let instances: Record<string, InstanceItem> = {};

function createModal() {
    if (modalDom) return modalDom;

    modalDom = document.createElement("div");

    modalDom.addEventListener(
        "touchmove",
        (event) => {
            event.preventDefault();
            event.stopPropagation();
        },
        { passive: true }
    );

    modalDom.classList.add("jk-modal", "jk-modal-enter");

    setTimeout(() => {
        modalDom?.classList.remove("jk-modal-enter");
    }, 200);

    PopupManager.parentNode.appendChild(modalDom);

    return modalDom;
}

function register(id: string, instance: InstanceItem) {
    instances[id] = instance;
}
function destroy(id: string) {
    delete instances[id];
}

export let PopupManager = {
    parentNode: document.body,

    modalQueue: [] as ModalItem[],

    getInstance(id: string) {
        return instances[id];
    },

    open(id: string, instance: InstanceItem) {
        if (this.modalQueue.some((m) => m.id === id)) return;

        register(id, instance);

        createModal();

        let zIndex = zIndexManage.nextZIndex().toString();

        modalDom!.style.zIndex = zIndex;
        modalDom!.style.display = "";

        this.modalQueue.push({
            id,
            zIndex
        });
    },
    close(id: string) {
        if (!modalDom) return;

        if (this.modalQueue.length) {
            let topModal = this.modalQueue[this.modalQueue.length - 1];

            if (topModal.id === id) {
                this.modalQueue.pop();

                if (this.modalQueue.length) {
                    modalDom.style.zIndex = this.modalQueue[this.modalQueue.length - 1].zIndex;
                }
            } else {
                //队列中，不呈现，直接剔除
                removeFilter(this.modalQueue, (item: ModalItem) => item.id === id);
            }
        }

        destroy(id);

        if (this.modalQueue.length === 0) {
            modalDom.classList.add("jk-modal-leave");

            setTimeout(() => {
                modalDom?.classList.remove("jk-modal-leave");

                if (this.modalQueue.length === 0) {
                    modalDom?.remove();
                    modalDom = undefined;
                }
            }, 200);
        }
    },
    getTopPopup() {
        if (this.modalQueue.length) {
            let topModal = this.modalQueue[this.modalQueue.length - 1];

            return this.getInstance(topModal.id);
        }
    }
};

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        let topPopup = PopupManager.getTopPopup();
        if (topPopup?.closeOnPressEscape) {
            topPopup?.close?.();
        }
    }
});
