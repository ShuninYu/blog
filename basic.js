/** js document */

// 动态加载CSS文件
(function() {
    //字体css
    var cssUrl = 'https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkai/dist/LXGWWenKai-Regular/result.css'; // 替换为你的CSS URL
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    
    // 兼容旧版浏览器获取<head>
    var head = document.head || document.getElementsByTagName('head')[0];
    
    // 避免重复添加（可选）
    var existingLinks = head.getElementsByTagName('link');
    for (var i = 0; i < existingLinks.length; i++) {
        if (existingLinks[i].href === cssUrl) {
            return; // 如果已存在相同CSS链接，则不再添加
        }
    }
    
    head.appendChild(link);

    // 添加调试信息
    console.log('[Debug] 正在尝试插入CSS:', cssUrl);
    link.onload = function() {
        console.log('[Debug] CSS加载成功:', cssUrl);
    };
    link.onerror = function() {
        console.error('[Debug] CSS加载失败:', cssUrl);
    };
})();