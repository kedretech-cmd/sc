// tutorials.js - render tutorial cards and show detailed multi-part info in modal
const tutorialsData = [
  {
    id: 't-web-1',
    title: 'Web Development - Modern UI with Bootstrap',
    icon: 'bi-code-slash',
    difficulty: 'Beginner → Intermediate',
    duration: '4 hours (6 lessons)',
    excerpt: 'Build responsive, accessible websites using HTML5, CSS3 and Bootstrap 5.',
    lessons: [
      'Setup & tooling',
      'HTML structure and semantics',
      'Responsive layout with Bootstrap',
      'Animations & AOS',
      'Forms & validation',
      'Deploying static sites'
    ],
    resources: [{label:'Lesson playlist', url:'#'},{label:'Starter repo', url:'#'}],
    thumb: 'assets/thumb.svg',
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 't-py-1',
    title: 'Python & Kivy - Mobile Apps',
    icon: 'bi-python',
    difficulty: 'Intermediate',
    duration: '5 hours (8 lessons)',
    excerpt: 'Create cross-platform mobile apps using Python and Kivy.',
    lessons: ['Intro to Kivy','Layouts & Widgets','App logic','State & Storage','Packaging APKs','Publishing tips'],
    resources: [{label:'Kivy docs', url:'#'},{label:'Example app', url:'#'}],
    thumb: 'assets/project2.svg',
    video: '#'
  },
  {
    id: 't-cy-1',
    title: 'Cybersecurity Basics - Termux & Kali',
    icon: 'bi-shield-lock',
    difficulty: 'Beginner → Advanced',
    duration: '6 hours (10 lessons)',
    excerpt: 'Hands-on tutorials for Termux and Kali Linux practical tasks (ethical use).',
    lessons: ['Termux setup','SSH & keys','Reconnaissance','Tools overview','Pen-testing basics'],
    resources: [{label:'Ethics & rules', url:'#'}],
    thumb: 'assets/project3.svg',
    video: '#'
  }
];

function renderTutorials(){
  const grid = document.getElementById('tutorialGrid');
  grid.innerHTML = '';
  tutorialsData.forEach(t=>{
    const col = document.createElement('div'); col.className='col-md-4';
    col.innerHTML = `
      <div class="glass-card p-3 h-100" data-aos="zoom-in">
        <div class="d-flex align-items-start">
          <div class="me-3 fs-1 neon"><i class="bi ${t.icon}"></i></div>
          <div class="flex-fill">
            <h5>${(window.__i18n && window.__i18n.tutorials_data && window.__i18n.tutorials_data[t.id] && window.__i18n.tutorials_data[t.id].title) || t.title}</h5>
            <p class="small text-muted mb-2">${(window.__i18n && window.__i18n.tutorials_data && window.__i18n.tutorials_data[t.id] && window.__i18n.tutorials_data[t.id].excerpt) || t.excerpt}</p>
            <div class="mb-2"><strong>Duration:</strong> ${t.duration} • <strong>Level:</strong> ${t.difficulty}</div>
            <div>
              <button class="btn btn-sm btn-primary explore-btn" data-id="${t.id}">Explore</button>
              <a class="btn btn-sm btn-outline-light ms-2" href="${t.video}" target="_blank">Watch</a>
            </div>
          </div>
        </div>
      </div>`;
    grid.appendChild(col);
  });

  // attach listeners
  document.querySelectorAll('.explore-btn').forEach(b=>b.addEventListener('click', (ev)=>{
    const id = ev.currentTarget.dataset.id; openTutorialModal(id);
  }));
}

function openTutorialModal(id){
  const t = tutorialsData.find(x=>x.id===id); if(!t) return;
  const detail = document.getElementById('tutorialDetail');
  detail.innerHTML = `
    <div class="row">
      <div class="col-md-5"><img src="${t.thumb}" class="img-fluid rounded mb-3" alt="${t.title}"></div>
      <div class="col-md-7">
        <h4>${t.title}</h4>
        <p class="small text-muted">${t.excerpt}</p>
        <p><strong>Duration:</strong> ${t.duration} &nbsp; <strong>Level:</strong> ${t.difficulty}</p>
        <h6>Lessons</h6>
        <ol>${t.lessons.map(ls=>`<li>${ls}</li>`).join('')}</ol>
        <h6>Resources</h6>
        <ul>${t.resources.map(r=>`<li><a href="${r.url}" target="_blank">${r.label}</a></li>`).join('')}</ul>
        <div class="mt-3">
          <a class="btn btn-primary me-2" href="${t.video}" target="_blank">Watch Intro</a>
          <button class="btn btn-outline-light" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>`;
  const modal = new bootstrap.Modal(document.getElementById('tutorialModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderTutorials();
  window.addEventListener('languageChanged', ()=>{ renderTutorials(); });
});
