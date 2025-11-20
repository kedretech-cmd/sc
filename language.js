// language.js - simple JSON-based language switcher
const langFiles = {
  en: 'lang/en.json',
  am: 'lang/am.json',
  or: 'lang/or.json',
  ti: 'lang/ti.json'
};
const langSelects = document.querySelectorAll('.lang-select');
async function loadLang(lang){
  try{
    const res = await fetch(langFiles[lang]);
    const data = await res.json();
    // simple replacements
    document.title = data.title || document.title;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(data[key]) el.innerHTML = data[key];
    });
    // some targeted selectors
    document.querySelector('.hero-title') && (document.querySelector('.hero-title').textContent = data.hero_title || document.querySelector('.hero-title').textContent);
    document.getElementById('typewriter') && (document.getElementById('typewriter').textContent = data.hero_sub || document.getElementById('typewriter').textContent);
    localStorage.setItem('kedre_lang',lang);
    // update dropdown label
    document.getElementById('langDropdown').textContent = (lang==='en'?'EN': lang==='am'?'አማ': lang==='or'?'ORO':'ትግ');
    // expose translations to other scripts
    setTranslations(data);
  }catch(e){console.warn('lang load failed',e)}
}

// expose translations globally and emit event for dynamic modules
function setTranslations(data){
  window.__i18n = data;
  const ev = new CustomEvent('languageChanged',{detail:data});
  window.dispatchEvent(ev);
}


langSelects.forEach(btn=>btn.addEventListener('click', (ev)=>{
  ev.preventDefault(); const lang = btn.dataset.lang; loadLang(lang);
}));

// auto-load saved
document.addEventListener('DOMContentLoaded', ()=>{
  const saved = localStorage.getItem('kedre_lang') || 'en';
  loadLang(saved);
});
