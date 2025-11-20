// store.js - renders products (phones & computers) and provides ordering via phone/SMS/copy
const STORE_NUMBER = '0908195656';

const products = [
  {id:'p1',category:'phone',title:'Kedre Phone A',price:'$199',img:'assets/phone1.svg',specs:{ram:'4 GB',battery:'4000 mAh',storage:'64 GB'},desc:'Reliable midrange phone with strong battery.'},
  {id:'p2',category:'phone',title:'Kedre Phone B',price:'$279',img:'assets/phone2.svg',specs:{ram:'6 GB',battery:'5000 mAh',storage:'128 GB'},desc:'Slim design, great camera, fast charging.'},
  {id:'p3',category:'computer',title:'Kedre Laptop A',price:'$599',img:'assets/comp1.svg',specs:{ram:'8 GB',cpu:'Intel i5',storage:'256 GB SSD'},desc:'Portable laptop for developers and students.'},
  {id:'p4',category:'computer',title:'Kedre Desktop B',price:'$799',img:'assets/comp2.svg',specs:{ram:'16 GB',cpu:'AMD Ryzen 5',storage:'512 GB SSD'},desc:'Desktop workstation for productivity.'}
];

function renderStore(filter='all'){
  const grid = document.getElementById('storeGrid');
  if(!grid) return;
  grid.innerHTML='';
  const items = filter==='all'?products:products.filter(p=>p.category===filter);
  items.forEach(p=>{
    const col = document.createElement('div'); col.className='col-sm-6 col-lg-3';
    col.innerHTML = `
      <div class="card glass-card p-2 h-100" data-aos="fade-up">
        <img src="${p.img}" class="img-fluid rounded mb-2" alt="${p.title}">
        <h6>${p.title}</h6>
        <div class="small text-muted mb-2">${p.price}</div>
        <p class="small text-muted">${p.desc}</p>
        <div class="d-flex justify-content-between align-items-center">
          <button class="btn btn-sm btn-primary order-btn" data-id="${p.id}">Order</button>
          <button class="btn btn-sm btn-outline-light details-btn" data-id="${p.id}">Details</button>
        </div>
      </div>`;
    grid.appendChild(col);
  });

  document.querySelectorAll('.details-btn').forEach(b=>b.addEventListener('click', e=>openProductModal(e.currentTarget.dataset.id)));
  document.querySelectorAll('.order-btn').forEach(b=>b.addEventListener('click', e=>openProductModal(e.currentTarget.dataset.id)));
}

function openProductModal(id){
  const p = products.find(x=>x.id===id); if(!p) return;
  const target = document.getElementById('productDetail');
  target.innerHTML = `
    <div class="row">
      <div class="col-md-6"><img src="${p.img}" class="img-fluid rounded" alt="${p.title}"></div>
      <div class="col-md-6">
        <h4>${p.title}</h4>
        <p class="small text-muted">${p.price}</p>
        <p>${p.desc}</p>
        <ul>
          ${Object.entries(p.specs).map(([k,v])=>`<li><strong>${k.toUpperCase()}:</strong> ${v}</li>`).join('')}
        </ul>
        <div class="mt-3">
          <a class="btn btn-primary me-2" href="tel:${STORE_NUMBER}">Call: ${STORE_NUMBER}</a>
          <a class="btn btn-outline-light me-2" href="sms:${STORE_NUMBER}?body=${encodeURIComponent('Hello, I want to order '+p.title)}">${window.__i18n?window.__i18n.order_sms:'Send SMS'}</a>
          <button class="btn btn-outline-light me-2" id="copyNumber">${window.__i18n?window.__i18n.order_copy:'Copy number'}</button>
          <a class="btn btn-success" id="whatsappLink" href="#">WhatsApp</a>
        </div>
      </div>
    </div>`;

  // whatsapp link (note: requires international number without + or 0 — user can replace if needed)
  const wa = document.getElementById('whatsappLink');
  const waNumber = STORE_NUMBER.replace(/[^0-9]/g,'');
  wa.href = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hello, I want to order '+p.title)}`;

  document.getElementById('copyNumber').addEventListener('click', ()=>{ navigator.clipboard.writeText(STORE_NUMBER).then(()=>alert('Number copied to clipboard')); });

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderStore('all');
  document.querySelectorAll('.store-filter').forEach(b=>b.addEventListener('click', e=>{ document.querySelectorAll('.store-filter').forEach(x=>x.classList.remove('active')); e.currentTarget.classList.add('active'); renderStore(e.currentTarget.dataset-filter); }));
  // floating store button scrolls to section
  const storeBtn = document.getElementById('openStore');
  if(storeBtn) storeBtn.addEventListener('click', ()=>{ document.getElementById('store').scrollIntoView({behavior:'smooth'}); });
  // re-render on language change to update labels in modal
  window.addEventListener('languageChanged', ()=>{ renderStore('all'); });
});
