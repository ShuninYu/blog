console.log("Hello, world!");

// 定义一个函数，用于设置toggleButton的点击事件
function setupToggleButton() {
    // 获取ID为'toggleButton'的元素
    const toggleButton = document.getElementById('toggleButton');

    // 检查toggleButton是否存在
    if (toggleButton) {
        // 给toggleButton添加点击事件监听器
        toggleButton.addEventListener('click', function() {
            // 获取ID为'content'的元素
            const content = document.getElementById('content');

            // 检查content是否存在
            if (content) {
                // 检查'content'元素的maxHeight样式属性是否存在值
                if (content.style.maxHeight) {
                    // 如果maxHeight存在值，说明内容当前是被限制的，我们将其设为null来展开全部内容
                    content.style.maxHeight = null;

                    // 同时将按钮的文本改为'展开阅读全文'
                    this.textContent = '展开阅读全文';
                } else {
                    // 如果maxHeight不存在值，说明内容当前是全部展开的，我们将其设为内容的scrollHeight来收起内容
                    content.style.maxHeight = content.scrollHeight + 'px';

                    // 同时将按钮的文本改为'收起'
                    this.textContent = '收起';
                }
            }
        });
    }
}

// 等待DOM内容加载完毕后再执行设置函数
document.addEventListener('DOMContentLoaded', setupToggleButton);