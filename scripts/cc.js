hexo.extend.tag.register('cc', function() {
    return `
    <div class="post-cc">
        本文采用 <a href="https://creativecommons.org/licenses/by/4.0/deed.zh" target="_blank" rel="noopener">CC BY 4.0</a> 许可协议，转载请注明出处。
    </div>
    `;
});
