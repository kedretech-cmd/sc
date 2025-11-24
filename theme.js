// theme.js - dark/light toggle persisted in localStorage
const themeToggle = document.getElementById('themeToggle');

function applyTheme(t) {
  if (t === 'dark') {
    document.body.classList.remove('light-mode');
    themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  } else {
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  }
  localStorage.setItem('kedre_theme', t);
}

// load
const saved = localStorage.getItem('kedre_theme') || 'dark';
applyTheme(saved);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = localStorage.getItem('kedre_theme') || 'dark';
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}
