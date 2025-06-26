(function () {
    const baseWidth = 1920; // 基准宽度
    const html = document.documentElement;

    function setFontSize() {
        const scale = html.clientWidth / baseWidth;
        html.style.fontSize = (scale *16) + 'px'; // 设置根元素字体大小

    }
    setFontSize(); // 初始化设置
    window.addEventListener('resize', setFontSize); // 窗口大小变化
}
)();