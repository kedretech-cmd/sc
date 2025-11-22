// store.js - Advanced Electronics Store
const STORE_NUMBER = '0908195656';

const products = [
  // --- PHONES ---
  // Samsung
  {
    id: 's24u', category: 'phone', brand: 'samsung', title: 'Samsung Galaxy S24 Ultra', price: '$1299',
    img: 'assets/s24ultra.svg', // Placeholder path
    specs: { display: '6.8" QHD+ AMOLED', processor: 'Snapdragon 8 Gen 3', ram: '12GB', storage: '256GB/512GB', camera: '200MP Main', battery: '5000mAh' },
    desc: 'The ultimate Galaxy experience with AI features and S-Pen.'
  },
  {
    id: 's23fe', category: 'phone', brand: 'samsung', title: 'Samsung Galaxy S23 FE', price: '$599',
    img: 'assets/s23fe.svg',
    specs: { display: '6.4" FHD+ AMOLED', processor: 'Exynos 2200', ram: '8GB', storage: '128GB', camera: '50MP Main', battery: '4500mAh' },
    desc: 'Flagship features at an affordable price point.'
  },
  {
    id: 'a55', category: 'phone', brand: 'samsung', title: 'Samsung Galaxy A55', price: '$479',
    img: 'assets/a55.svg',
    specs: { display: '6.6" FHD+ AMOLED', processor: 'Exynos 1480', ram: '8GB', storage: '128GB', camera: '50MP Main', battery: '5000mAh' },
    desc: 'Premium design with metal frame and awesome security.'
  },
  
  // Apple
  {
    id: 'ip15pm', category: 'phone', brand: 'apple', title: 'iPhone 15 Pro Max', price: '$1199',
    img: 'assets/ip15pm.svg',
    specs: { display: '6.7" Super Retina XDR', processor: 'A17 Pro', ram: '8GB', storage: '256GB', camera: '48MP Main', battery: '4422mAh' },
    desc: 'Titanium design, powerful A17 Pro chip, and USB-C.'
  },
  {
    id: 'ip13', category: 'phone', brand: 'apple', title: 'iPhone 13', price: '$599',
    img: 'assets/ip13.svg',
    specs: { display: '6.1" Super Retina XDR', processor: 'A15 Bionic', ram: '4GB', storage: '128GB', camera: '12MP Dual', battery: '3227mAh' },
    desc: 'Still a powerhouse with great cameras and battery life.'
  },

  // Tecno
  {
    id: 'camon30', category: 'phone', brand: 'tecno', title: 'Tecno Camon 30 Premier', price: '$450',
    img: 'assets/camon30.svg',
    specs: { display: '6.77" LTPO AMOLED', processor: 'Dimensity 8200', ram: '12GB', storage: '512GB', camera: '50MP Sony IMX890', battery: '5000mAh' },
    desc: 'Master of photography with dual-chip imaging system.'
  },
  {
    id: 'spark20', category: 'phone', brand: 'tecno', title: 'Tecno Spark 20 Pro+', price: '$220',
    img: 'assets/spark20.svg',
    specs: { display: '6.78" FHD+ AMOLED', processor: 'Helio G99', ram: '8GB', storage: '256GB', camera: '108MP Main', battery: '5000mAh' },
    desc: 'Curved screen elegance on a budget.'
  },

  // Infinix
  {
    id: 'note40', category: 'phone', brand: 'infinix', title: 'Infinix Note 40 Pro', price: '$300',
    img: 'assets/note40.svg',
    specs: { display: '6.78" FHD+ AMOLED', processor: 'Dimensity 7020', ram: '8GB', storage: '256GB', camera: '108MP OIS', battery: '5000mAh' },
    desc: 'All-round fast charging with MagCharge support.'
  },
  {
    id: 'hot40', category: 'phone', brand: 'infinix', title: 'Infinix Hot 40 Pro', price: '$180',
    img: 'assets/hot40.svg',
    specs: { display: '6.78" FHD+ LCD 120Hz', processor: 'Helio G99', ram: '8GB', storage: '128GB', camera: '108MP Main', battery: '5000mAh' },
    desc: 'Gaming performance for budget gamers.'
  },

  // Xiaomi / Redmi
  {
    id: 'rn13', category: 'phone', brand: 'xiaomi', title: 'Redmi Note 13 Pro+', price: '$400',
    img: 'assets/rn13.svg',
    specs: { display: '6.67" 1.5K AMOLED', processor: 'Dimensity 7200 Ultra', ram: '12GB', storage: '512GB', camera: '200MP OIS', battery: '5000mAh' },
    desc: 'Flagship killer with IP68 rating and 120W charging.'
  },

  // Google
  {
    id: 'pixel8pro', category: 'phone', brand: 'google', title: 'Google Pixel 8 Pro', price: '$999',
    img: 'assets/pixel8pro.svg',
    specs: { display: '6.7" LTPO OLED', processor: 'Google Tensor G3', ram: '12GB', storage: '128GB', camera: '50MP Main', battery: '5050mAh' },
    desc: 'The most advanced Pixel cameras and Google AI.'
  },

  // OnePlus
  {
    id: 'op12', category: 'phone', brand: 'oneplus', title: 'OnePlus 12', price: '$799',
    img: 'assets/op12.svg',
    specs: { display: '6.82" 2K ProXDR', processor: 'Snapdragon 8 Gen 3', ram: '16GB', storage: '512GB', camera: '50MP Hasselblad', battery: '5400mAh' },
    desc: 'Smooth beyond belief with massive battery life.'
  },

  // Sony
  {
    id: 'xperia1v', category: 'phone', brand: 'sony', title: 'Sony Xperia 1 V', price: '$1399',
    img: 'assets/xperia1v.svg',
    specs: { display: '6.5" 4K HDR OLED', processor: 'Snapdragon 8 Gen 2', ram: '12GB', storage: '256GB', camera: 'Exmor T for Mobile', battery: '5000mAh' },
    desc: 'Next-gen sensor. Next-gen imaging. For creators.'
  },

  // Asus
  {
    id: 'rog8', category: 'phone', brand: 'asus', title: 'Asus ROG Phone 8', price: '$1099',
    img: 'assets/rog8.svg',
    specs: { display: '6.78" 165Hz AMOLED', processor: 'Snapdragon 8 Gen 3', ram: '16GB', storage: '512GB', camera: '50MP Gimbal OIS', battery: '5500mAh' },
    desc: 'Beyond gaming. A premium daily driver.'
  },

  // --- COMPUTERS ---
  {
    id: 'mbp14', category: 'computer', brand: 'apple', title: 'MacBook Pro 14"', price: '$1599',
    img: 'assets/mbp14.svg',
    specs: { display: '14.2" Liquid Retina XDR', processor: 'M3 Pro', ram: '18GB', storage: '512GB SSD', battery: '18 Hours' },
    desc: 'Mind-blowing performance for pros.'
  },
  {
    id: 'xps13', category: 'computer', brand: 'dell', title: 'Dell XPS 13', price: '$1299',
    img: 'assets/xps13.svg',
    specs: { display: '13.4" FHD+', processor: 'Intel Core Ultra 7', ram: '16GB', storage: '512GB SSD', battery: '12 Hours' },
    desc: 'Iconic design, now even more powerful.'
  },
  {
    id: 'hpvictus', category: 'computer', brand: 'hp', title: 'HP Victus 15', price: '$850',
    img: 'assets/victus.svg',
    specs: { display: '15.6" FHD 144Hz', processor: 'Intel Core i5-13420H', ram: '8GB', storage: '512GB SSD', gpu: 'RTX 3050' },
    desc: 'Solid gaming performance without breaking the bank.'
  }
];

let currentCategory = 'all';
let currentBrand = 'all';
let visibleCount = 8; // Initial number of items to show

function renderStore() {
  const grid = document.getElementById('storeGrid');
  const loadMoreBtn = document.getElementById('loadMoreStore');
  if (!grid) return;
  grid.innerHTML = '';

  // Filter Logic
  // Reverse products to show latest first
  let items = [...products].reverse();
  
  if (currentCategory !== 'all') {
    items = items.filter(p => p.category === currentCategory);
  }
  if (currentBrand !== 'all') {
    items = items.filter(p => p.brand === currentBrand);
  }

  if (items.length === 0) {
    grid.innerHTML = '<div class="col-12 text-center py-5"><h5 class="text-muted">No products found.</h5></div>';
    if(loadMoreBtn) loadMoreBtn.style.display = 'none';
    return;
  }

  // Pagination Logic
  const visibleItems = items.slice(0, visibleCount);
  
  visibleItems.forEach(p => {
    const col = document.createElement('div');
    col.className = 'col-sm-6 col-lg-3';
    col.innerHTML = `
      <div class="card glass-card p-2 h-100 product-card" data-aos="fade-up">
        <div class="position-relative">
          <img src="${p.img}" class="img-fluid rounded mb-2 w-100" alt="${p.title}" style="height: 200px; object-fit: contain; background: rgba(255,255,255,0.05);">
          <span class="badge bg-primary position-absolute top-0 end-0 m-2">${p.brand.toUpperCase()}</span>
        </div>
        <div class="card-body p-2 d-flex flex-column">
          <h6 class="fw-bold mb-1 text-truncate" title="${p.title}">${p.title}</h6>
          <div class="text-accent fw-bold mb-2">${p.price}</div>
          <p class="small text-muted mb-3 flex-grow-1" style="font-size: 0.85rem;">${p.desc}</p>
          
          <div class="d-grid gap-2">
            <button class="btn btn-sm btn-outline-light details-btn" data-id="${p.id}">View Details</button>
            <button class="btn btn-sm btn-primary order-btn" data-id="${p.id}">Order Now</button>
          </div>
        </div>
      </div>`;
    grid.appendChild(col);
  });

  // Handle Load More Button Visibility
  if (loadMoreBtn) {
    if (visibleCount >= items.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = 'inline-block';
      // Remove old listener to prevent duplicates (simple way)
      const newBtn = loadMoreBtn.cloneNode(true);
      loadMoreBtn.parentNode.replaceChild(newBtn, loadMoreBtn);
      
      newBtn.addEventListener('click', () => {
        visibleCount += 4; // Load 4 more
        renderStore();
      });
    }
  }

  document.querySelectorAll('.details-btn, .order-btn').forEach(b => b.addEventListener('click', e => openProductModal(e.currentTarget.dataset.id)));
}

function openProductModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  
  const target = document.getElementById('productDetail');
  
  // Generate specs table
  const specsHtml = Object.entries(p.specs).map(([k, v]) => `
    <div class="d-flex justify-content-between border-bottom border-secondary py-2">
      <span class="text-muted text-capitalize">${k}</span>
      <span class="fw-bold text-light text-end">${v}</span>
    </div>
  `).join('');

  target.innerHTML = `
    <div class="row g-4">
      <div class="col-md-5 text-center">
        <div class="p-4 rounded" style="background: rgba(255,255,255,0.05);">
          <img src="${p.img}" class="img-fluid rounded shadow-lg" alt="${p.title}" style="max-height: 300px;">
        </div>
        <h3 class="mt-4 fw-bold text-accent">${p.price}</h3>
      </div>
      <div class="col-md-7">
        <h3 class="fw-bold mb-2">${p.title}</h3>
        <span class="badge bg-outline-light mb-3 border">${p.brand.toUpperCase()}</span>
        <p class="lead fs-6 mb-4">${p.desc}</p>
        
        <h5 class="fw-bold mb-3 border-bottom pb-2">Specifications</h5>
        <div class="mb-4 specs-container">
          ${specsHtml}
        </div>
        
        <div class="d-grid gap-2 d-md-flex mt-4">
          <a class="btn btn-primary flex-grow-1" href="tel:${STORE_NUMBER}"><i class="bi bi-telephone-fill me-2"></i>Call Now</a>
          <a class="btn btn-success flex-grow-1" id="whatsappLink" href="#"><i class="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
        <div class="mt-2 d-flex gap-2">
           <a class="btn btn-outline-light flex-grow-1" href="sms:${STORE_NUMBER}?body=${encodeURIComponent('I want to buy ' + p.title)}"><i class="bi bi-chat-dots-fill me-2"></i>SMS</a>
           <button class="btn btn-outline-light flex-grow-1" id="copyNumber"><i class="bi bi-clipboard me-2"></i>Copy Number</button>
        </div>
      </div>
    </div>`;

  // WhatsApp Logic
  const waNumber = STORE_NUMBER.replace(/[^0-9]/g, '');
  document.getElementById('whatsappLink').href = `https://wa.me/${waNumber}?text=${encodeURIComponent('Hi, I am interested in buying the ' + p.title)}`;

  // Copy Number Logic
  document.getElementById('copyNumber').addEventListener('click', () => {
    navigator.clipboard.writeText(STORE_NUMBER).then(() => alert('Phone number copied!'));
  });

  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', () => {
  renderStore();

  // Category Filters
  document.querySelectorAll('.store-filter').forEach(b => b.addEventListener('click', e => {
    document.querySelectorAll('.store-filter').forEach(x => x.classList.remove('active'));
    e.currentTarget.classList.add('active');
    currentCategory = e.currentTarget.dataset.filter;
    renderStore();
  }));

  // Brand Filters (Delegation for dynamically added buttons if needed, but we'll add them in HTML)
  const brandContainer = document.getElementById('brandFilters');
  if(brandContainer) {
      brandContainer.addEventListener('click', e => {
          if(e.target.classList.contains('brand-filter')) {
              document.querySelectorAll('.brand-filter').forEach(x => x.classList.remove('active', 'bg-primary', 'text-white'));
              e.target.classList.add('active', 'bg-primary', 'text-white');
              currentBrand = e.target.dataset.brand;
              renderStore();
          }
      });
  }
  
  // Floating button
  const storeBtn = document.getElementById('openStore');
  if (storeBtn) storeBtn.addEventListener('click', () => { document.getElementById('store').scrollIntoView({ behavior: 'smooth' }); });
  
  window.addEventListener('languageChanged', () => { renderStore(); });
});
