const typescript = require("rollup-plugin-typescript2");
const path = require("node:path");

module.exports = {
    publicDir: "./public",
    base: "./",
    build: {
        rollupOptions: {
            external: ["@joker.front/core"]
        },
        assetsDir: "",
        lib: {
            entry: "./src/index.ts",
            name: "index",
            fileName: "index"
        }
    },
    plugins: [
        Object.assign(
            typescript({
                tsconfig: path.join(process.cwd(), "tsconfig.json"),
                clean: true,
                check: false,
                useTsconfigDeclarationDir: true
            }),
            {
                enforce: "pre"
            }
        )
    ]
};
