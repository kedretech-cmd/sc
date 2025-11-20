// theme.js - dark/light toggle persisted in localStorage
const themeToggle = document.getElementById('themeToggle');
function applyTheme(t){
  if(t==='dark'){
    document.documentElement.style.setProperty('--bg','#071326');
    document.body.classList.remove('light-mode');
    themeToggle.innerHTML='<i class="bi bi-moon-fill"></i>';
  } else {
    document.documentElement.style.setProperty('--bg','#f7fbff');
    document.body.classList.add('light-mode');
    themeToggle.innerHTML='<i class="bi bi-sun-fill"></i>';
  }
  localStorage.setItem('kedre_theme',t);
}
// load
const saved = localStorage.getItem('kedre_theme')||'dark'; applyTheme(saved);
themeToggle.addEventListener('click', ()=> applyTheme(localStorage.getItem('kedre_theme')==='dark' ? 'light' : 'dark'));
