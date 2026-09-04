hexo.extend.tag.register('poem', function(args, content) {
    // const title = args[0] || '无题';
    const author = args[0] || '佚名';
    // <div class="poem-title">${title}</div>
    return `
    <div class="poem-box">
        <div class="poem-content">
            ${content.split('\n').map(line =>
                line.trim()
                    ? `<div class="poem-line">${line}</div>`
                    : `<div class="poem-empty-line">&nbsp;</div>`
            ).join('')}
        </div>
        <div class="poem-author">—— ${author}</div>
        <div class="poem-copyright">© ${hexo.config.author} 版权所有，未经许可请勿转载</div>
    </div>
    `;
}, {ends: true});
