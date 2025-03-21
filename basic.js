/** js document */
console.log('基础JS加载中……');

// 动态加载CSS文件
(function() {
    //字体css
    var cssUrl = 'https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkai/dist/LXGWWenKai-Regular/result.css'; // CSS URL
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


// 回到顶部按钮
// 等待DOM内容加载完毕
document.addEventListener('DOMContentLoaded', function() {
    // 尝试获取ID为'gotop'的元素
    var gotop = document.getElementById('gotop');

    // 检查元素是否存在
    if (gotop) {
        // 元素存在，添加滚动事件监听器
        window.addEventListener("scroll", handleScroll);

        // 处理滚动事件的函数
        function handleScroll() {
            var oTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (oTop >= 80) {
                gotop.style.display = "block";
            } else {
                gotop.style.display = "none";
            }
        }

        // 为gotop按钮绑定点击事件
        gotop.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    } else {
        // 元素不存在，输出错误信息到控制台
        console.error('元素 #gotop 不存在，请检查HTML代码或确保代码在DOM加载后执行。');
    }
});


// 折叠窗口的展开和收起功能
// 定义一个函数，用于设置所有toggleButton的点击事件
function setupToggleButtons() {
    // 获取所有具有'toggleButton'类名的元素
    const toggleButtons = document.querySelectorAll('.foldButton');

    // 遍历所有toggleButton元素
    toggleButtons.forEach(function(toggleButton) {
        // 获取与当前toggleButton相关联的fold元素
        const fold = toggleButton.closest('.folder');
        const foldtip = toggleButton.querySelector('.triangle p2');

        // 给toggleButton添加点击事件监听器
        toggleButton.addEventListener('click', function() {
            // 检查fold是否存在
            if (fold) {
                // 切换fold的展开和收起状态
                if (fold.classList.contains('folding')) {
                    // 如果当前是收起状态，则展开
                    fold.classList.remove('folding');
                    fold.classList.add('unfold');

                    // 同时将foldtip中的文本改为表示展开状态的符号
                    foldtip.textContent = '▼';
                } else {
                    // 如果当前是展开状态，则收起
                    fold.classList.remove('unfold');
                    fold.classList.add('folding');

                    // 同时将foldtip中的文本改为表示收起状态的符号
                    foldtip.textContent = '▶';
                }
            }
        });
    });
}

// 等待DOM内容加载完毕后再执行设置函数
document.addEventListener('DOMContentLoaded', setupToggleButtons);



// 侧边按钮折叠窗口的展开和收起功能
// 定义一个函数，用于设置所有toggleButton的点击事件
function setupSideToggleButtons() {
    // 获取所有具有'sideFoldButton'类名的元素
    const toggleButtons = document.querySelectorAll('.sideFoldButton');

    // 遍历所有toggleButton元素
    toggleButtons.forEach(function(toggleButton) {
        // 获取与当前toggleButton相关联的sideFolder元素
        const fold = toggleButton.closest('.sideFolder');
        const foldtip = toggleButton.querySelector('.sideTriangle p2');

        // 给toggleButton添加点击事件监听器
        toggleButton.addEventListener('click', function() {
            // 检查fold是否存在
            if (fold) {
                // 切换fold的展开和收起状态
                if (fold.classList.contains('sideFolding')) {
                    // 如果当前是收起状态，则展开
                    fold.classList.remove('sideFolding');
                    fold.classList.add('sideUnfold');

                    // 同时将foldtip中的文本改为表示展开状态的符号
                    foldtip.textContent = '▼';
                } else {
                    // 如果当前是展开状态，则收起
                    fold.classList.remove('sideUnfold');
                    fold.classList.add('sideFolding');

                    // 同时将foldtip中的文本改为表示收起状态的符号
                    foldtip.textContent = '▶';
                }
            }
        });
    });
}

// 等待DOM内容加载完毕后再执行设置函数
document.addEventListener('DOMContentLoaded', setupSideToggleButtons);


// 复制当前时间按钮的功能

document.addEventListener('DOMContentLoaded', function() {
    // 通过class查找按钮
    const copyTimeButtons = document.querySelectorAll('.copyTimeButton');

    copyTimeButtons.forEach(button => {
        let timeoutId = null; // 用于存储定时器的ID

        button.addEventListener('click', function() {
            // 清除之前的提示文字和定时器
            clearTimeout(timeoutId); // 取消任何正在进行的倒计时
            button.textContent = button.textContent.replace(/ \(.*?\)$/, '');

            // 获取当前时间并格式化为RFC822格式
            const now = new Date();
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const day = days[now.getDay()];
            const date = now.getDate();
            const month = months[now.getMonth()];
            const year = now.getFullYear();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const timeZoneOffset = -now.getTimezoneOffset() / 60;
            const timeZone = (timeZoneOffset >= 0 ? '+' : '-') + String(Math.abs(timeZoneOffset)).padStart(2, '0') + '00';
            const rfc822Time = `${day}, ${date} ${month} ${year} ${hours}:${minutes}:${seconds} ${timeZone}`;

            // 复制到剪贴板，并显示提示文字
            navigator.clipboard.writeText(rfc822Time).then(function() {
                // 复制成功，添加提示文字
                const tipText = ' (复制成功)';
                button.textContent += tipText;

                // 设置定时器，3秒后清除提示文字
                timeoutId = setTimeout(function() {
                    button.textContent = button.textContent.replace(tipText, '');
                }, 3000);
            }).catch(function(err) {
                console.error('复制失败: ', err);
                // 复制失败，添加提示文字
                const tipText = ' (复制失败)';
                button.textContent += tipText;

                // 同样设置定时器，3秒后清除提示文字
                timeoutId = setTimeout(function() {
                    button.textContent = button.textContent.replace(tipText, '');
                }, 3000);
            });
        });
    });
});