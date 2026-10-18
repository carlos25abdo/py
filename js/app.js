// Base Application Logic

class App {
    constructor() {
        this.init();
    }

    init() {
        console.log("PythonMaster - Learning Platform Initialized");
        this.checkTheme();
        this.setupEventListeners();
    }

    checkTheme() {
        // Simple dark mode check and assignment
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    setupEventListeners() {
        // Here we can attach global event listeners like theme togglers in the future
    }
}

// Initialize the app on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
