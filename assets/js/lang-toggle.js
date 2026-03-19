/**
 * Language Toggle Script
 * Manages switching between Chinese (中文) and English (EN) versions
 */

function toggleLanguage() {
  const currentLang = getCurrentLanguage();
  const newLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
  
  // Map current page to corresponding language version
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  let targetPath = '';
  
  if (newLang === 'en') {
    // Switch to English
    if (currentPath === '' || currentPath === '/') {
      targetPath = '/en/';
    } else if (currentPath === '/cv') {
      targetPath = '/cv/'; // CV page is language-agnostic
    } else {
      targetPath = '/en/';
    }
  } else {
    // Switch to Chinese
    if (currentPath === '/en' || currentPath === '/en/') {
      targetPath = '/';
    } else if (currentPath === '/cv') {
      targetPath = '/cv/'; // CV page is language-agnostic
    } else {
      targetPath = '/';
    }
  }
  
  // Save language preference
  localStorage.setItem('preferred-lang', newLang);
  
  // Redirect to new language version
  if (targetPath) {
    const baseUrl = window.location.origin + (window.location.pathname.includes('.github') ? '' : '');
    window.location.href = baseUrl + targetPath;
  }
}

function getCurrentLanguage() {
  // Get from URL path
  const currentPath = window.location.pathname;
  if (currentPath.includes('/en')) {
    return 'en';
  }
  return 'zh-CN';
}

function updateLanguageButtonText() {
  const langText = document.getElementById('lang-text');
  if (langText) {
    const currentLang = getCurrentLanguage();
    if (currentLang === 'en') {
      langText.textContent = '中文';
    } else {
      langText.textContent = 'EN';
    }
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  updateLanguageButtonText();
  
  // Try to restore user's preferred language (optional)
  const preferredLang = localStorage.getItem('preferred-lang');
  if (preferredLang) {
    const currentLang = getCurrentLanguage();
    // You could implement auto-redirect here if needed
    // For now, just show the preference in the button
  }
});
