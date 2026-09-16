// 临时脚本:Documentation.docx → Markdown(保留原文批注,不改内容)
// 流程:mammoth HTML(图片写盘)→ turndown(GFM 表格)→ 粗体行转标题 → 按章拆分
const mammoth = require('mammoth');
const TurndownService = require('turndown');
const gfm = require('turndown-plugin-gfm');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.resolve(__dirname, '../../public/uploads/images/khand-en');

// 图片写盘(避免 base64 内联),返回 CMS 站内相对路径
let imgSeq = 0;
const options = {
    convertImage: mammoth.images.imgElement(function (image) {
        imgSeq++;
        const ext = (image.contentType.split('/')[1] || 'png').replace('jpeg', 'jpg');
        const name = `en-${imgSeq}.${ext}`;
        return image.readAsBase64String().then((b64) => {
            fs.mkdirSync(IMG_DIR, { recursive: true });
            fs.writeFileSync(path.join(IMG_DIR, name), Buffer.from(b64, 'base64'));
            return { src: '/uploads/images/khand-en/' + name };
        });
    }),
};

const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
td.use(gfm);

const chapters = ['Product Overview', 'Hardware']; // docx 正文中实际存在的两章

mammoth.convertToHtml({ path: 'Documentation.docx' }, options).then((r) => {
    let md = td.turndown(r.value);

    // 整行粗体段落 → 标题:章名用 ##,其余小节用 ###(便于文档页生成大纲)
    md = md.split('\n').map((line) => {
        const m = line.match(/^\*\*(.+)\*\*$/);
        if (!m) return line;
        const text = m[1].replace(/\s+/g, ' ').trim();
        if (chapters.includes(text)) return '## ' + text;
        return '### ' + text;
    }).join('\n');

    // 按章拆分(章标题行 = "## 章名")
    const lines = md.split('\n');
    const starts = {};
    lines.forEach((ln, i) => {
        const t = ln.trim();
        if (chapters.includes(t.replace(/^## /, '')) && t.startsWith('## ')) starts[t] = i;
    });

    const result = {};
    const chapterLines = Object.keys(starts).sort((a, b) => starts[a] - starts[b]);
    chapterLines.forEach((key, idx) => {
        const s = starts[key];
        const e = idx + 1 < chapterLines.length ? starts[chapterLines[idx + 1]] : lines.length;
        result[key.replace(/^## /, '')] = lines.slice(s, e).join('\n').trim();
    });

    fs.writeFileSync(path.resolve(__dirname, '../../_en_docs_split.json'), JSON.stringify(result, null, 2));
    for (const key of chapterLines) {
        const c = key.replace(/^## /, '');
        console.log(`== ${c} == ${result[c].length} 字符,图片 ${((result[c].match(/!\[\]\(/g) || []).length)} 张`);
    }
    console.log('图片落盘数: ' + imgSeq);
    console.log('未覆盖的章: ' + chapters.filter((c) => !result[c]).join(', '));
}).catch((e) => { console.error('ERROR', e.message); process.exit(1); });
