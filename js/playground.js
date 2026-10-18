// Setup Ace Editor for Playground
document.addEventListener('DOMContentLoaded', () => {
    let checkAce = setInterval(() => {
        if (window.ace) {
            clearInterval(checkAce);
            initPlayground();
        }
    }, 100);
});

function initPlayground() {
    var editor = ace.edit("playgroundEditor");
    editor.setTheme("ace/theme/tomorrow_night_eighties");
    editor.session.setMode("ace/mode/python");
    editor.setOptions({
        fontSize: "16px",
        showPrintMargin: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true
    });

    const runBtn = document.getElementById('runPlaygroundBtn');
    const consoleOutput = document.getElementById('playgroundOutput');

    runBtn.addEventListener('click', () => {
        const code = editor.getValue();
        consoleOutput.classList.remove('error');
        consoleOutput.innerHTML = "جاري التشغيل...\n";
        
        // محاكاة بسيطة للتشغيل في نسخة الويب الثابتة
        setTimeout(() => {
            if (code.includes('print(')) {
                // استخراج النص المطبوع بشكل مبسط جداً للمحاكاة
                const match = code.match(/print\(['"](.*)['"]\)/);
                if (match && match[1]) {
                     consoleOutput.innerHTML = match[1];
                } else {
                     consoleOutput.innerHTML = "تم تنفيذ الكود بنجاح (راجع الدوال المكتوبة).";
                }
            } else if (code.trim() === "") {
                consoleOutput.innerHTML = "";
            } else {
                consoleOutput.innerHTML = "تم تنفيذ الكود. (استخدم print لرؤية المخرجات)";
            }
        }, 500);
    });
}
