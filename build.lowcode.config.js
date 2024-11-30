const typescript = require("rollup-plugin-typescript2");
const path = require("node:path");
const externalGlobals = require("rollup-plugin-external-globals");
module.exports = {
    publicDir: "./public",
    base: "./",
    build: {
        outDir: "dist_lowcode",
        rollupOptions: {
            external: ["@joker.front/core"]
        },
        assetsDir: "",
        lib: {
            entry: "./src/index.ts",
            name: "index",
            fileName: "index.lowcode"
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
        ),
        externalGlobals({
            "@joker.front/core": 'window[Symbol.for("JOKER")]'
        })
    ]
};
