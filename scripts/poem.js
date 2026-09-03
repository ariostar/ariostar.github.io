hexo.extend.tag.register('poem', function(args, content) {
    // const title = args[0] || '无题';
    const author = args[0] || '佚名';
    // <div class="poem-title">${title}</div>
    return `
    <div class="poem-box">
        <div class="poem-content">
            ${content.split('\n').map(line =>
                line.trim() ? `<div class="poem-line">${line}</div>` : ''
            ).join('')}
        </div>
        <div class="poem-author">—— ${author}</div>
    </div>
    `;
}, {ends: true});
