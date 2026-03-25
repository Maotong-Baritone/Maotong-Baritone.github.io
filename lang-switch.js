
function setupLanguageSwitcher() {
    const langBtn = document.getElementById('lang-switch');
    if (!langBtn) return;

    // 获取保存的语言，默认为英文
    let currentLang = localStorage.getItem('preferredLang') || 'en';
    applyLanguage(currentLang);

    langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'zh' : 'en';
        localStorage.setItem('preferredLang', currentLang);
        applyLanguage(currentLang);
    });
}

function applyLanguage(lang) {
    document.body.classList.remove('lang-en', 'lang-zh');
    document.body.classList.add('lang-' + lang);
    
    const langBtn = document.getElementById('lang-switch');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? '中文' : 'English';
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', setupLanguageSwitcher);
