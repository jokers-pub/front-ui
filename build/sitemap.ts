import fs from "node:fs";
import { MENUS_ZH_CN, MENUS_EN } from "../examples/common/datas/menu";
import path from "node:path";

let result: string[] = [];
for (let item of MENUS_EN) {
    if (item.children?.length) {
        for (let cItem of item.children) {
            result.push(`https://ui.jokers.pub` + cItem.path || "");
        }
    }
}

for (let item of MENUS_ZH_CN) {
    if (item.children?.length) {
        for (let cItem of item.children) {
            result.push(`https://ui.jokers.pub` + cItem.path || "");
        }
    }
}

let xmlContent = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://ui.jokers.pub</loc>
</url>
<url>
<loc>https://ui.jokers.pub/cn</loc>
</url>
${result
    .map((n) => {
        return `<url>
<loc>${n}</loc>
</url>`;
    })
    .join("\n")}
</urlset>
`;

fs.writeFileSync(path.resolve("./dist/sitemap.xml"), xmlContent, "utf8");
