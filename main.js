// main.js - initialize AOS, populate dynamic sections, preloader, back-to-top
document.addEventListener('DOMContentLoaded', function(){
  // AOS init
  if(window.AOS) AOS.init({duration:700,once:true});

  // Preloader
  const pre = document.getElementById('preloader');
  setTimeout(()=>{ pre && (pre.style.display='none'); },900);

  // Back to top
  const back = document.getElementById('backToTop');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY>400) back.classList.add('show'); else back.classList.remove('show');
    // navbar shadow
    const nav = document.querySelector('.glass-nav');
    if(window.scrollY>20) nav.style.backdropFilter='blur(14px)'; else nav.style.backdropFilter='blur(10px)';
  });
  back.addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

  // Video rendering is handled by videos.js (separate module)

  // contact form simple validation
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message) { alert('Please fill all fields'); return; }
    alert('Thanks! Message received (demo).');
    this.reset();
  });

  // demo blog posts
  const blogGrid = document.getElementById('blogGrid');
  const blogs = [
    {title:'How to Learn Web Dev Fast',excerpt:'A practical path to build portfolio projects',tags:['HTML','CSS','JavaScript']},
    {title:'Kivy Apps for Beginners',excerpt:'Make mobile apps with Python and Kivy',tags:['Python','Kivy']},
    {title:'Top Kali Tools 2025',excerpt:'Tools every beginner should know',tags:['Hacking','Tools']}
  ];
  blogGrid.innerHTML = blogs.map(b=>`<div class="col-md-4" data-aos="fade-up"><div class="card glass-card p-3"><img src="assets/thumb.svg" class="img-fluid rounded mb-2" alt=""><h6>${b.title}</h6><p class="small text-muted">${b.excerpt}</p><div>${b.tags.map(t=>`<span class="badge bg-transparent border border-1 me-1">${t}</span>`).join('')}</div></div></div>`).join('');
});
