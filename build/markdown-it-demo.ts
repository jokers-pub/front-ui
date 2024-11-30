import MarkdownIt from "markdown-it";
import ParserBlock from "markdown-it/lib/parser_block";
import { RenderRule } from "markdown-it/lib/renderer";

const DEMOID = "JOKERDEMO";
const DIVID = "JOKERDIV";
export let demoPlugin: MarkdownIt.PluginSimple = (md) => {
    let renderDefault: RenderRule = (tokens, idx, _options, _, slf) => {
        // add a class to the opening tag
        if (tokens[idx].nesting === 1) {
            tokens[idx].attrJoin("component", "@(components.DEMO_JOKER_" + tokens[idx].info + ")");
        }

        return slf.renderToken(tokens, idx, _options);
    };

    var min_markers = 3,
        marker_str = "!",
        marker_char = marker_str.charCodeAt(0),
        marker_len = marker_str.length,
        render = renderDefault;

    let container: ParserBlock.RuleBlock = (state, startLine, endLine, silent) => {
        var pos,
            nextLine,
            marker_count,
            markup,
            params,
            token,
            old_parent,
            old_line_max,
            auto_closed = false,
            start = state.bMarks[startLine] + state.tShift[startLine],
            max = state.eMarks[startLine];

        // Check out the first character quickly,
        // this should filter out most of non-containers
        //
        if (marker_char !== state.src.charCodeAt(start)) {
            return false;
        }

        // Check out the rest of the marker string
        //
        for (pos = start + 1; pos <= max; pos++) {
            if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
                break;
            }
        }

        marker_count = Math.floor((pos - start) / marker_len);
        if (marker_count < min_markers) {
            return false;
        }
        pos -= (pos - start) % marker_len;

        markup = state.src.slice(start, pos);
        params = state.src.slice(pos, max).trim().split(" ", 2)[0];

        if (silent) {
            return true;
        }

        // Search for the end of the block
        nextLine = startLine;

        for (;;) {
            nextLine++;
            if (nextLine >= endLine) {
                // unclosed block should be autoclosed by end of document.
                // also block seems to be autoclosed by end of parent
                break;
            }

            start = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];

            if (start < max && state.sCount[nextLine] < state.blkIndent) {
                // non-empty line with negative indent should stop the list:
                // - ```
                //  test
                break;
            }

            if (marker_char !== state.src.charCodeAt(start)) {
                continue;
            }

            if (state.sCount[nextLine] - state.blkIndent >= 4) {
                // closing fence should be indented less than 4 spaces
                continue;
            }

            for (pos = start + 1; pos <= max; pos++) {
                if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
                    break;
                }
            }

            // closing code fence must be at least as long as the opening one
            if (Math.floor((pos - start) / marker_len) < marker_count) {
                continue;
            }

            // make sure tail has spaces only
            pos -= (pos - start) % marker_len;
            pos = state.skipSpaces(pos);

            if (pos < max) {
                continue;
            }

            // found!
            auto_closed = true;
            break;
        }

        old_parent = state.parentType;
        old_line_max = state.lineMax;
        state.parentType = "blockquote";

        // this will prevent lazy continuations from ever going past our end marker
        state.lineMax = nextLine;

        token = state.push(`blockquote_${DEMOID}_open`, "DemoContainer", 1);
        token.markup = markup;
        token.block = true;
        token.info = params;
        token.map = [startLine, nextLine];

        state.md.block.tokenize(state, startLine + 1, nextLine);

        token = state.push(`blockquote_${DEMOID}_close`, "DemoContainer", -1);
        token.markup = state.src.slice(start, pos);
        token.block = true;

        state.parentType = old_parent;
        state.lineMax = old_line_max;
        state.line = nextLine + (auto_closed ? 1 : 0);

        return true;
    };

    md.block.ruler.before("fence", "blockquote_" + DEMOID, container, {
        alt: ["paragraph", "reference", "blockquote", "list"]
    });
    md.renderer.rules[`blockquote_${DEMOID}_open`] = render;
    md.renderer.rules[`blockquote_${DEMOID}_close`] = render;
};

export let divPlugin: MarkdownIt.PluginSimple = (md) => {
    let renderDefault: RenderRule = (tokens, idx, _options, _, slf) => {
        // add a class to the opening tag
        if (tokens[idx].nesting === 1) {
            tokens[idx].attrJoin("class", tokens[idx].info);
        }

        return slf.renderToken(tokens, idx, _options);
    };

    var min_markers = 3,
        marker_str = ":",
        marker_char = marker_str.charCodeAt(0),
        marker_len = marker_str.length,
        render = renderDefault;

    let container: ParserBlock.RuleBlock = (state, startLine, endLine, silent) => {
        var pos,
            nextLine,
            marker_count,
            markup,
            params,
            token,
            old_parent,
            old_line_max,
            auto_closed = false,
            start = state.bMarks[startLine] + state.tShift[startLine],
            max = state.eMarks[startLine];

        // Check out the first character quickly,
        // this should filter out most of non-containers
        //
        if (marker_char !== state.src.charCodeAt(start)) {
            return false;
        }

        // Check out the rest of the marker string
        //
        for (pos = start + 1; pos <= max; pos++) {
            if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
                break;
            }
        }

        marker_count = Math.floor((pos - start) / marker_len);
        if (marker_count < min_markers) {
            return false;
        }
        pos -= (pos - start) % marker_len;

        markup = state.src.slice(start, pos);
        params = state.src.slice(pos, max).trim().split(" ", 2)[0];

        if (silent) {
            return true;
        }

        // Search for the end of the block
        nextLine = startLine;

        for (;;) {
            nextLine++;
            if (nextLine >= endLine) {
                // unclosed block should be autoclosed by end of document.
                // also block seems to be autoclosed by end of parent
                break;
            }

            start = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];

            if (start < max && state.sCount[nextLine] < state.blkIndent) {
                // non-empty line with negative indent should stop the list:
                // - ```
                //  test
                break;
            }

            if (marker_char !== state.src.charCodeAt(start)) {
                continue;
            }

            if (state.sCount[nextLine] - state.blkIndent >= 4) {
                // closing fence should be indented less than 4 spaces
                continue;
            }

            for (pos = start + 1; pos <= max; pos++) {
                if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
                    break;
                }
            }

            // closing code fence must be at least as long as the opening one
            if (Math.floor((pos - start) / marker_len) < marker_count) {
                continue;
            }

            // make sure tail has spaces only
            pos -= (pos - start) % marker_len;
            pos = state.skipSpaces(pos);

            if (pos < max) {
                continue;
            }

            // found!
            auto_closed = true;
            break;
        }

        old_parent = state.parentType;
        old_line_max = state.lineMax;
        state.parentType = "blockquote";

        // this will prevent lazy continuations from ever going past our end marker
        state.lineMax = nextLine;

        token = state.push(`blockquote_${DIVID}_open`, "div", 1);
        token.markup = markup;
        token.block = true;
        token.info = params;
        token.map = [startLine, nextLine];

        state.md.block.tokenize(state, startLine + 1, nextLine);

        token = state.push(`blockquote_${DIVID}_close`, "div", -1);
        token.markup = state.src.slice(start, pos);
        token.block = true;

        state.parentType = old_parent;
        state.lineMax = old_line_max;
        state.line = nextLine + (auto_closed ? 1 : 0);

        return true;
    };

    md.block.ruler.before("fence", "blockquote_" + DIVID, container, {
        alt: ["paragraph", "reference", "blockquote", "list"]
    });
    md.renderer.rules[`blockquote_${DIVID}_open`] = render;
    md.renderer.rules[`blockquote_${DIVID}_close`] = render;
};

export let linkPlugin: MarkdownIt.PluginSimple = (md) => {
    // 确保每次调用render时都会调用这个钩子
    md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
        let isoutlink = false;
        // 遍历token中的attrs数组
        for (let i = 0; i < tokens[idx].attrs!.length; i++) {
            // 检查属性名是否为"href"，如果是，修改属性值
            let [name, value] = tokens[idx].attrs![i];
            if (name === "href") {
                if (!value.startsWith("#")) {
                    isoutlink = true;
                }
                break; // 找到href属性后即可停止查找
            }
        }

        if (isoutlink) {
            tokens[idx].attrs?.push(["target", "_blank"]);
        }
        // 返回token，修改后的内容将会在渲染时使用
        return self.renderToken(tokens, idx, options);
    };
};
