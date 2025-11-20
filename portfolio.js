// portfolio.js - simple filter and modal
const portfolioItems = [
  {id:1,title:'School Management System',cat:'web',thumb:'assets/project1.svg',desc:'A full school management system.',tech:['HTML','Bootstrap','JS']},
  {id:2,title:'Mobile Quiz App',cat:'apps',thumb:'assets/project2.svg',desc:'Quiz mobile app made with Kivy.',tech:['Python','Kivy']},
  {id:3,title:'Calendar App',cat:'apps',thumb:'assets/project3.svg',desc:'Calendar with reminders.',tech:['Flutter','Dart']},
  {id:4,title:'Design Toolkit',cat:'tools',thumb:'assets/project4.svg',desc:'Small design components.',tech:['Figma','CSS']}
];

function renderPortfolio(filter='all'){
  const grid = document.getElementById('portfolioGrid');
  grid.innerHTML = '';
  const items = filter==='all'?portfolioItems:portfolioItems.filter(i=>i.cat===filter);
  items.forEach(it=>{
    const col = document.createElement('div'); col.className='col-md-3';
    col.innerHTML = `<div class="card glass-card p-2" data-id="${it.id}">
      <img src="${it.thumb}" class="img-fluid rounded mb-2" alt="${it.title}">
      <h6>${it.title}</h6>
      <small class="text-muted">${it.tech.join(', ')}</small>
    </div>`;
    col.querySelector('.card').addEventListener('click', ()=>openModal(it));
    grid.appendChild(col);
  });
}

function openModal(item){
  const modal = new bootstrap.Modal(document.getElementById('detailModal'));
  document.getElementById('modalContent').innerHTML = `
    <h4>${item.title}</h4>
    <img src="${item.thumb}" class="img-fluid mb-3">
    <p>${item.desc}</p>
    <p><strong>Tech:</strong> ${item.tech.join(', ')}</p>
  `;
  modal.show();
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderPortfolio('all');
  document.querySelectorAll('.filter-btn').forEach(b=>b.addEventListener('click',(e)=>{
    document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));
    e.target.classList.add('active');
    renderPortfolio(e.target.dataset.filter);
  }));
});
