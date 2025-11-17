/* main.js - custom site behavior
   - Theme (dark/light) switching (persisted in localStorage)
   - Smooth scroll for anchor links
   - Simple contact form validation and fake submit
   - Project modal population
   - Small reveal helper (in addition to AOS)
*/

(function(){
  'use strict';

  // Helpers
  const qs = (s, el=document) => el.querySelector(s);
  const qsa = (s, el=document) => Array.from(el.querySelectorAll(s));

  // Theme toggle
  const themeToggle = qs('#themeToggle');
  const userPref = localStorage.getItem('nsti-theme');
  if(userPref === 'dark') document.body.classList.add('dark');
  if(themeToggle){
    themeToggle.checked = document.body.classList.contains('dark');
    themeToggle.addEventListener('change', (e)=>{
      document.body.classList.toggle('dark', e.target.checked);
      localStorage.setItem('nsti-theme', e.target.checked ? 'dark' : 'light');
    });
  }

  // Footer year
  const yearEl = qs('#year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Smooth scroll for internal links (native scroll-behavior is set, but add offset for sticky header)
  qsa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      if(href.startsWith('#')){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target){
          const headerOffset = document.querySelector('.navbar')?.offsetHeight || 72;
          const rect = target.getBoundingClientRect();
          const scrollTop = window.pageYOffset + rect.top - headerOffset - 10;
          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
          // collapse navbar on mobile
          const bsCollapseEl = document.querySelector('.navbar-collapse');
          if(bsCollapseEl && bsCollapseEl.classList.contains('show')){
            const bsCollapse = bootstrap.Collapse.getInstance(bsCollapseEl) || new bootstrap.Collapse(bsCollapseEl);
            bsCollapse.hide();
          }
        }
      }
    });
  });

  // Contact form handling (client-side only)
  const contactForm = qs('#contactForm');
  const formAlert = qs('#formAlert');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      // simple validation
      const name = qs('#name', contactForm);
      const email = qs('#email', contactForm);
      const message = qs('#message', contactForm);
      let valid = true;
      [name, email, message].forEach(field => {
        if(!field.value.trim()){
          field.classList.add('is-invalid');
          valid = false;
        } else {
          field.classList.remove('is-invalid');
        }
      });
      if(!valid) return;
      // Simulate send
      formAlert.innerHTML = '<div class="alert alert-info">Sending message...</div>';
      setTimeout(()=>{
        formAlert.innerHTML = '<div class="alert alert-success">Thank you! Your message has been received.</div>';
        contactForm.reset();
      }, 900);
    });
  }

  // Project modal population
  const projectModal = qs('#projectModal');
  if(projectModal){
    projectModal.addEventListener('show.bs.modal', function(e){
      const button = e.relatedTarget;
      const title = button.getAttribute('data-title') || 'Project';
      const body = button.getAttribute('data-body') || '';
      qs('.modal-title', projectModal).textContent = title;
      qs('#projectBody', projectModal).textContent = body;
    });
  }

  // ጤና section collapse toggle: update button text and optionally open when navigating
  const tinaToggleBtn = qs('#tinaToggleBtn');
  const tinaDetailsEl = qs('#tinaDetails');
  if(tinaDetailsEl && tinaToggleBtn && window.bootstrap){
    // ensure we have a Collapse instance but don't auto-toggle on init
    const tinaCollapse = bootstrap.Collapse.getOrCreateInstance(tinaDetailsEl, { toggle: false });
    const setTinaBtnText = (open) => tinaToggleBtn.textContent = open ? 'ዝርዝር ዝጋ' : 'ዝርዝር ክፈት';
    // initialize label
    setTinaBtnText(tinaDetailsEl.classList.contains('show'));
    // update on show/hide
    tinaDetailsEl.addEventListener('shown.bs.collapse', ()=> setTinaBtnText(true));
    tinaDetailsEl.addEventListener('hidden.bs.collapse', ()=> setTinaBtnText(false));

    // If user clicks a link to the section (for example the quick-link), open details after scroll
    qsa('a[href="#dept-tina"]').forEach(a => {
      a.addEventListener('click', function(){
        // small timeout to allow smooth scroll to run first
        setTimeout(()=> tinaCollapse.show(), 450);
      });
    });
  }

  // Reveal on scroll (simple, in addition to AOS)
  const reveals = qsa('.reveal');
  const onScroll = () => {
    const top = window.innerHeight * 0.9;
    reveals.forEach(el => {
      const box = el.getBoundingClientRect();
      if(box.top < top){ el.classList.add('visible'); }
    });
  };
  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);

})();
