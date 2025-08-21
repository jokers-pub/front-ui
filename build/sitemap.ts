import fs from "node:fs";
import { MENUS_ZH_CN, MENUS_EN } from "../examples/common/datas/menu";
import path from "node:path";

let result: string[] = [];
for (let item of MENUS_ZH_CN) {
    if (item.children?.length) {
        for (let cItem of item.children) {
            result.push(`https://ui.jokers.pub` + cItem.path || "");
        }
    }
}
for (let item of MENUS_EN) {
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
<loc>https://ui.jokers.pub/en</loc>
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

// 目标文件路径
const filePath = path.resolve("./examples/dist/sitemap.xml");
// 提取目录路径
const dirPath = path.dirname(filePath);

// 检查目录是否存在，不存在则创建（包括所有父目录）
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
}

// 写入文件
fs.writeFileSync(filePath, xmlContent, "utf8");
