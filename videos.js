// videos.js - manage video list, render cards and show embedded YouTube modal
const videoList = [
  {id:'v1',title:'Build a Modern Website with Bootstrap',url:'https://www.youtube.com/watch?v=5qap5aO4i9A',desc:'Step-by-step guide to create a responsive modern website using Bootstrap 5.'},
  {id:'v2',title:'Python Kivy Project - Step by Step',url:'https://www.youtube.com/watch?v=2Vf1Q4eK0Zk',desc:'Create cross-platform mobile apps with Python and Kivy.'},
  {id:'v3',title:'Termux Essentials for Beginners',url:'https://www.youtube.com/watch?v=3GwjfUFyY6M',desc:'Useful Termux commands and setup for development on Android.'},
  {id:'v4',title:'Intro to Cybersecurity Tools',url:'https://www.youtube.com/watch?v=dQw4w9WgXcQ',desc:'Overview of ethical tools and workflows for beginners.'},
  {id:'v5',title:'React-like UI from Scratch',url:'https://www.youtube.com/watch?v=9bZkp7q19f0',desc:'Build a lightweight reactive UI library from scratch.'},
  {id:'v6',title:'School Management System Demo',url:'https://www.youtube.com/watch?v=V-_O7nl0Ii0',desc:'Walkthrough of a school management web application.'}
];

function getYoutubeId(url){
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,11})/);
  return m?m[1]:null;
}

function renderVideoGrid(limit=3){
  const grid = document.getElementById('videoGrid');
  if(!grid) return;
  grid.innerHTML = '';
  videoList.slice(0,limit).forEach(v=>{
    // allow translation overrides
    const tr = (window.__i18n && window.__i18n.videos_list && window.__i18n.videos_list[v.id])? window.__i18n.videos_list[v.id] : {};
    const vtitle = tr.title || v.title;
    const vdesc = tr.desc || v.desc;
    const id = getYoutubeId(v.url);
    const thumb = id?`https://img.youtube.com/vi/${id}/hqdefault.jpg`:'assets/thumb.svg';
    const col = document.createElement('div'); col.className='col-md-4';
    col.innerHTML = `
      <div class="card video-thumb glass-card p-0" data-aos="zoom-in">
        <img src="${thumb}" class="card-img-top" alt="${v.title}">
        <div class="card-body">
          <h6 class="card-title">${vtitle}</h6>
          <p class="small text-muted">${vdesc}</p>
          <div class="d-flex justify-content-between">
            <button class="btn btn-sm btn-primary watch-now" data-id="${v.id}">Watch Now</button>
            <button class="btn btn-sm btn-outline-light share-btn" data-url="${v.url}">Share</button>
          </div>
        </div>
      </div>`;
    grid.appendChild(col);
  });
  // show/hide load more
  const loadBtn = document.getElementById('loadMoreVideos');
  if(loadBtn) loadBtn.style.display = (limit < videoList.length)?'inline-block':'none';
}

function openVideoModalById(id){
  const v = videoList.find(x=>x.id===id); if(!v) return;
  const yt = getYoutubeId(v.url);
  const embed = yt?`<iframe width="100%" height="480" src="https://www.youtube.com/embed/${yt}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`:'<p>Invalid video URL</p>';
  document.getElementById('videoModalContent').innerHTML = `
    <div class="row">
      <div class="col-md-8">${embed}</div>
      <div class="col-md-4">
        <h5>${v.title}</h5>
        <p class="small text-muted">${v.desc}</p>
        <div class="mt-3">
          <a class="btn btn-primary" href="${v.url}" target="_blank">Open on YouTube</a>
        </div>
      </div>
    </div>`;
  const modal = new bootstrap.Modal(document.getElementById('videoModal'));
  modal.show();
}

document.addEventListener('DOMContentLoaded', ()=>{
  renderVideoGrid(3);
  // load more
  const loadMore = document.getElementById('loadMoreVideos');
  if(loadMore) loadMore.addEventListener('click', ()=>{ renderVideoGrid(videoList.length); loadMore.style.display='none'; });

  document.body.addEventListener('click', (e)=>{
    if(e.target.closest('.watch-now')){
      const id = e.target.closest('.watch-now').dataset.id; openVideoModalById(id);
    }
    if(e.target.closest('.share-btn')){
      const url = e.target.closest('.share-btn').dataset.url;
      try{ navigator.clipboard.writeText(url); alert('Link copied to clipboard'); }
      catch(err){ window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,'_blank'); }
    }
  });
  // re-render on language change
  window.addEventListener('languageChanged', ()=>{ renderVideoGrid(limit); });
});
