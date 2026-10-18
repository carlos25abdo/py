// Setup Ace Editor
document.addEventListener('DOMContentLoaded', () => {
    // We are loading Ace dynamically or from CDN
    let checkAce = setInterval(() => {
        if (window.ace) {
            clearInterval(checkAce);
            initEditor();
        }
    }, 100);
});

function initEditor() {
    var editor = ace.edit("codeEditor");
    editor.setTheme("ace/theme/tomorrow_night_eighties");
    editor.session.setMode("ace/mode/python");
    editor.setOptions({
        fontSize: "16px",
        showPrintMargin: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true
    });

    const runBtn = document.getElementById('runCodeBtn');
    const consoleOutput = document.getElementById('consoleOutput');

    runBtn.addEventListener('click', () => {
        const code = editor.getValue();
        consoleOutput.classList.remove('error');
        consoleOutput.innerHTML = "جاري التشغيل...\n";
        
        setTimeout(() => {
            // Check if there is a custom validator on the page
            if (typeof window.validateLesson === 'function') {
                window.validateLesson(code, consoleOutput);
            } else {
                consoleOutput.innerHTML = "تم التنفيذ.";
            }
        }, 500);
    });
}
