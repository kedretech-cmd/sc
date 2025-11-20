// blog.js - renders multiple detailed blog posts and shows full content in a modal
const blogPosts = [
  {
    id: 'b-001',
    title: 'How to Learn Web Development Fast (Practical Path)',
    date: '2025-07-12',
    thumb: 'assets/thumb.svg',
    excerpt: 'A pragmatic, project-first roadmap to learn HTML, CSS and JavaScript quickly and effectively.',
    tags: ['HTML','CSS','JavaScript','Career'],
    content: `<p>Start by building small projects: landing pages, portfolios, then progress to web apps. Focus on semantics, accessibility, and deployment. This post outlines a 12-week plan, recommended resources, and project ideas to build a compelling portfolio.</p>
      <h5>Week-by-week</h5>
      <ul><li>Weeks 1–2: HTML + CSS fundamentals</li><li>Weeks 3–5: Responsive layouts & Bootstrap</li><li>Weeks 6–8: JavaScript & DOM</li><li>Weeks 9–12: Projects & deploy</li></ul>`
  },
  {
    id: 'b-002',
    title: 'Kivy Mobile Apps: From Idea to APK',
    date: '2025-03-02',
    thumb: 'assets/project2.svg',
    excerpt: 'A practical guide to build and package a Kivy app for Android, including tips for UI and performance.',
    tags: ['Python','Kivy','Mobile'],
    content: `<p>Kivy lets you write cross-platform UI in Python. In this article we cover layout best-practices, optimizing performance, handling touch input, and packaging with Buildozer.</p>
      <h5>Key tips</h5>
      <ol><li>Use Canvas carefully for heavy graphics</li><li>Profile on device early</li><li>Split long tasks to threads</li></ol>`
  },
  {
    id: 'b-003',
    title: 'Ethical Termux & Kali Basics for Beginners',
    date: '2024-11-05',
    thumb: 'assets/project3.svg',
    excerpt: 'Practical, ethics-first introduction to Termux tools and Kali basics — learn how to use tools responsibly.',
    tags: ['Security','Kali','Termux'],
    content: `<p>This post introduces Termux and Kali tools with an emphasis on legal and ethical boundaries. Understand recon, scanning, and reporting practices.</p>
      <p><strong>Important:</strong> Only use these tools on systems you own or have explicit permission to test.</p>`
  },
  {
    id: 'b-004',
    title: 'Designing Faster UIs with Bootstrap 5',
    date: '2025-01-20',
    thumb: 'assets/project4.svg',
    excerpt: 'Patterns and utilities in Bootstrap 5 that help you prototype and ship interfaces faster without sacrificing quality.',
    tags: ['Bootstrap','Design','UI'],
    content: `<p>Bootstrap 5 provides a flexible grid, utilities, and components. Learn how to customize themes, use CSS variables, and create reusable components.</p>`
  },
  {
    id: 'b-005',
    title: 'Practical AI for Developers: Small Projects to Learn',
    date: '2025-06-11',
    thumb: 'assets/thumb.svg',
    excerpt: 'Small, hands-on AI projects that teach core concepts without overwhelming you — focusing on chatbots, summarizers, and simple classification tasks.',
    tags: ['AI','Projects','Python'],
    content: `<p>Explore approachable AI projects: sentiment analyzer, text summarizer, and a small chatbot. We cover dataset selection, model choice, and deployment tips.</p>`
  }
];

function renderBlogList(){
  const container = document.getElementById('blogPage');
  container.innerHTML = '';
  blogPosts.forEach(p=>{
    // allow override from translations
    const tr = (window.__i18n && window.__i18n.blog_posts && window.__i18n.blog_posts[p.id]) ? window.__i18n.blog_posts[p.id] : {};
    const title = tr.title || p.title;
    const excerpt = tr.excerpt || p.excerpt;
    const col = document.createElement('div'); col.className='col-md-4';
    col.innerHTML = `
      <div class="card glass-card p-3 h-100" data-aos="fade-up">
        <img src="${p.thumb}" class="img-fluid rounded mb-2" alt="${title}" />
        <h5>${title}</h5>
        <small class="text-muted">${p.date} • ${p.tags.join(', ')}</small>
        <p class="mt-2 small text-muted">${excerpt}</p>
        <div class="mt-auto d-flex justify-content-between align-items-center">
          <button class="btn btn-sm btn-primary read-btn" data-id="${p.id}">Read More</button>
          <div>${p.tags.map(t=>`<span class="badge bg-transparent border border-1 ms-1">${t}</span>`).join('')}</div>
        </div>
      </div>`;
    container.appendChild(col);
  });

  document.querySelectorAll('.read-btn').forEach(b=>b.addEventListener('click', (e)=>{
    const id = e.currentTarget.dataset.id; openPostModal(id);
  }));
}

function openPostModal(id){
  const post = blogPosts.find(p=>p.id===id); if(!post) return;
  const target = document.getElementById('postDetail');
  target.innerHTML = `
    <div class="row">
      <div class="col-md-8">
        <h3>${post.title}</h3>
        <small class="text-muted">${post.date} • ${post.tags.join(', ')}</small>
        <div class="mt-3">${post.content}</div>
      </div>
      <div class="col-md-4">
        <img src="${post.thumb}" class="img-fluid rounded mb-3" alt="${post.title}" />
        <div class="mt-2"><a class="btn btn-outline-light" href="#">Open resources</a></div>
      </div>
    </div>`;
  const modal = new bootstrap.Modal(document.getElementById('postModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', ()=>{
  if(window.AOS) AOS.refresh();
  renderBlogList();
  // re-render on language change if translations are loaded
  window.addEventListener('languageChanged', ()=>{
    renderBlogList();
  });
});
