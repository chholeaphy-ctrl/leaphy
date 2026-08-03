function applyPlaceholders(lang) {
  document.querySelectorAll('[data-en-ph]').forEach(function (el) {
    el.setAttribute('placeholder', lang === 'km' ? el.dataset.kmPh : el.dataset.enPh);
  });
}

function setLang(lang) {
  document.querySelectorAll('.i18n').forEach(function (el) {
    el.textContent = lang === 'km' ? el.dataset.km : el.dataset.en;
  });

  applyPlaceholders(lang);

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  document.body.classList.toggle('lang-km', lang === 'km');

  try {
    localStorage.setItem('savoryPlateLang', lang);
  } catch (e) {
    /* localStorage unavailable — language just won't persist between pages */
  }
}

(function initLang() {
  var saved = 'en';
  try {
    saved = localStorage.getItem('savoryPlateLang') || 'en';
  } catch (e) {
    /* ignore */
  }
  setLang(saved);
})();
