declare module "*.joker" {
    import type { Component } from "@joker.front/core";

    const compnent: typeof Component & {
        install: () => void;
    };

    export default compnent;
}
