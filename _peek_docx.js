// 临时脚本:探查 Documentation.docx 段落结构
const mammoth = require('mammoth');
const fs = require('fs');

mammoth.convertToHtml({ path: 'Documentation.docx' }).then((r) => {
    const html = r.value;
    fs.writeFileSync('_docx_preview.html', html);
    // 提取块级元素序列(段落/标题),打印文本预览
    const blocks = [...html.matchAll(/<(h[1-6]|p)[^>]*>([\s\S]*?)<\/\1>/g)].map(
        (m) => m[1] + '| ' + m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim().slice(0, 90)
    );
    console.log('块总数: ' + blocks.length);
    console.log(blocks.slice(0, 80).join('\n'));
    const strongOnly = blocks.filter((b) => /^p\|/.test(b)).length;
    console.log('...(共 ' + blocks.length + ' 块,其中段落 ' + strongOnly + ')');
}).catch((e) => { console.error('ERROR', e.message); process.exit(1); });
