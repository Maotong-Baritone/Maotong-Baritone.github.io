document.addEventListener('DOMContentLoaded', () => {
  const langSwitchBtn = document.getElementById('lang-switch');
  const body = document.body;

  // 1. 初始化检查：获取本地存储中的语言偏好 (默认英语)
  const currentLang = localStorage.getItem('preferredLanguage') || 'en';
  
  if (currentLang === 'zh') {
    body.classList.add('lang-zh');
    langSwitchBtn.textContent = 'English';
  } else {
    body.classList.remove('lang-zh');
    langSwitchBtn.textContent = '中文';
  }

  // 2. 核心切换功能
  function toggleLanguage() {
    if (body.classList.contains('lang-zh')) {
      // 切换到英语
      body.classList.remove('lang-zh');
      localStorage.setItem('preferredLanguage', 'en');
      langSwitchBtn.textContent = '中文';
    } else {
      // 切换到中文
      body.classList.add('lang-zh');
      localStorage.setItem('preferredLanguage', 'zh');
      langSwitchBtn.textContent = 'English';
    }
  }

  // 3. 鼠标/触摸点击事件绑定
  langSwitchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleLanguage();
  });

  // 4. 键盘无障碍事件绑定 (针对使用 Tab 键导航的用户，按 Enter 或 空格 即可切换)
  langSwitchBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleLanguage();
    }
  });
});