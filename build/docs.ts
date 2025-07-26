import MarkdownIt from "markdown-it";
import { globSync } from "glob";
import path from "node:path";
import fs from "node:fs";
import { demoPlugin, divPlugin, linkPlugin } from "./markdown-it-demo";
import { normalizePath } from "./utils";
import { prettierify } from "@joker.front/prettier-plugin";
import prettier from "prettier";
let args: Record<string, string> = {};

for (let i = 2; i < process.argv.length; i++) {
    let item = process.argv[i];

    let params = item.split("=");

    let name = params[0].replace(/\-\-/, "").trim();

    args[name] = params[1] || "";
}
let lang = args.lang;

let docsRoot = normalizePath(path.join(__dirname, "../docs/" + lang));
let examplesComponentRoot = normalizePath(path.join(__dirname, "../examples/components"));
let pageRoot = normalizePath(path.join(__dirname, "../examples/pages/" + lang));

let md = new MarkdownIt({});
md.use(demoPlugin);
md.use(divPlugin);
md.use(linkPlugin);

let docs = globSync(docsRoot + "/*.md", {});
for (let file of docs) {
    let content = fs.readFileSync(file).toString();
    let fileName = getFileName(file);
    let reg = /(!!!)(.*?)(!!!)/;
    let result = "";
    let str = content;
    let match = str.match(reg);
    if (match === null) {
        result = md.render(str);
    } else {
        while (match !== null) {
            let demoName = match[2].trim();

            let componentPath = normalizePath(path.join(examplesComponentRoot, `/${fileName}/${demoName}.joker`));

            if (fs.existsSync(componentPath) === false) {
                throw new Error(`未找到相应的组件：${componentPath}`);
            }

            let componentContent = fs.readFileSync(componentPath).toString();

            result += str.substring(0, match.index!);

            result += ["!!! " + demoName, "``` html", componentContent, "```", "!!!", ""].join("\n");

            str = str.substring(match.index! + match[0].length);

            match = str.match(reg);
        }

        if (str) {
            result += str;
        }
        result = md.render(result);
    }

    result = result.replace(/<table>/g, '<table class="mkd-table">');
    generatePage(fileName, result);
}

async function generatePage(fileName: string, content: string) {
    let result: string[] = [];

    result.push(
        await prettierify(
            prettier,
            [
                "<template>",
                "<div ref='container' class='joker-demo-container'>",
                content,
                "<BottomNav />",
                "</div>",
                "</template>"
            ].join("\n"),
            "template"
        )
    );

    result.push("<script>");
    result.push(await prettierify(prettier, getScriptPart(fileName), "typescript"));
    result.push("</script>");

    let str = result.join("\n");

    fs.writeFileSync(`${pageRoot}/${fileName}.joker`, str);
}

function getScriptPart(fileName: string) {
    let result: string[] = [];
    result.push(`import { Component } from "@joker.front/core";`);
    result.push(`import hljs from "highlight.js/lib/common";`);
    result.push('import BottomNav from "../../common/components/bottom-nav.joker";');

    let componentPath = normalizePath(path.join(examplesComponentRoot, `/${fileName}`));
    let demosPath = globSync(normalizePath(path.join(componentPath, `/*.joker`)), {});
    let demos: Record<string, string> = {};
    for (let demoPath of demosPath) {
        let importPath = normalizePath(path.relative(pageRoot, demoPath));
        let fileName = getFileName(demoPath);

        if (fileName.startsWith("demo") === false) continue;

        let name = "DEMO_JOKER_" + fileName;

        demos[name] = importPath;

        result.push(`import ${name} from '${importPath}';`);
    }

    result.push("export default class extends Component {");
    result.push("components={");
    let components: string[] = ["BottomNav"];
    for (let name in demos) {
        components.push(name);
    }
    result.push(components.join(",\n"));
    result.push("}");

    result.push(`mounted(){`);
    result.push(`let container= this.$getRef('container')?.output!;`);
    result.push(`container.querySelectorAll('pre code').forEach((el:HTMLElement) => {
        hljs.highlightElement(el);
      });`);
    result.push("}");
    result.push("}");

    return result.join("\n");
}

function getFileName(file: string): string {
    file = normalizePath(file);
    return file.substring(file.lastIndexOf("/") + 1).split(".")[0];
}
