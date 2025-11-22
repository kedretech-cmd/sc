// videos.js - manage video list, render cards and show embedded YouTube modal
const videoList = [
  {id:'v1',title:'HOW TO LEARN PROGRAMMING IN 3 MONTHS',url:'https://www.youtube.com/watch?v=jaI7EDdqNdE',desc:'Learn the roadmap to becoming a programmer in just 3 months.'},
  {id:'v2',title:'How to Remove Frp Tecno pop 7 || FRP BYPASS',url:'https://www.youtube.com/watch?v=Kw9doycDD14',desc:'Step-by-step guide to bypass FRP on Tecno Pop 7.'},
  {id:'v3',title:'Sweet Time With 💚',url:'https://www.youtube.com/watch?v=WW8mXgEVMUk',desc:'Enjoying some sweet moments. Check out this vlog.'},
  {id:'v4',title:'THE MOST POWERFUL Ai in 2025',url:'https://www.youtube.com/watch?v=9xTPOjv60O4',desc:'Exploring the most powerful AI tools and trends coming in 2025.'},
  {id:'v5',title:'Kedre Tech Channel Intro',url:'https://www.youtube.com/watch?v=kAQg0Ckl6pA',desc:'Welcome to Kedre Tech! Here is what our channel is all about.'},
  {id:'v6',title:'Village Life Vlog',url:'https://www.youtube.com/watch?v=ZrIQ-IOIfoI',desc:'A glimpse into village life. Relaxing and authentic content.'},
  {id:'v7',title:'Silte Ethiopia',url:'https://www.youtube.com/watch?v=QnrMJUGdDX8',desc:'Exploring the culture and beauty of Silte, Ethiopia.'},
  {id:'v8',title:'Kedre Tech Update',url:'https://www.youtube.com/watch?v=nM0S_fB46TQ',desc:'Latest updates and news from Kedre Tech.'},
  {id:'v9',title:'LEARN. PRACTICE. BUILD. – Start Your Journey!',url:'https://www.youtube.com/watch?v=0koip1NoRmo',desc:'Start your programming journey today with these tips.'},
  {id:'v10',title:'YOUR TIME IS NOW! | Motivational Tech Talk',url:'https://www.youtube.com/watch?v=KST5AK3NEUs',desc:'Motivational talk for developers, creators, and dreamers.'},
  {id:'v11',title:'Kedre Tech Shorts',url:'https://www.youtube.com/watch?v=REvBFK38AiU',desc:'Quick tips and tech highlights.'},
  {id:'v12',title:'AI NEWS JULY 2025 | GPT-5.5 & More',url:'https://www.youtube.com/watch?v=PKhM423sz_M',desc:'Latest AI news: GPT-5.5, Google Gemini, regulations, and more.'},
  {id:'v13',title:'Top 5 AI Tools Every Programmer MUST Use',url:'https://www.youtube.com/watch?v=PVX3AqWCTRw',desc:'Essential AI tools to boost your programming productivity.'},
  {id:'v14',title:'What is a Server? | Simple Explanation',url:'https://www.youtube.com/watch?v=qjjmcF-d2s4',desc:'Simple explanation of what a server is, with examples.'},
  {id:'v15',title:'How to Host Your Code Online for Free',url:'https://www.youtube.com/watch?v=WqEH_uzrpq4',desc:'Step-by-step guide to hosting code on GitHub, Netlify, and Replit.'},
  {id:'v16',title:'What is a Database? | Simple Explanation',url:'https://www.youtube.com/watch?v=Rx3sfLEeVro',desc:'Understanding databases: simple explanation for beginners.'},
  {id:'v17',title:'Start Learn Programming Today',url:'https://www.youtube.com/watch?v=i2GV9nLTN0U',desc:'Why and how you should start learning programming today.'},
  {id:'v18',title:'Kedre Tech Live',url:'https://www.youtube.com/watch?v=AZSM2QrlA34',desc:'Live session and Q&A with Kedre Tech.'},
  {id:'v19',title:'Create a Website on Your Phone!',url:'https://www.youtube.com/watch?v=fTE-1o_7Gwk',desc:'Build a website using ChatGPT, Grok AI, and Acode on your phone.'},
  {id:'v20',title:'Write Code Without Getting Bored',url:'https://www.youtube.com/watch?v=HMMEHc1aTLg',desc:'Fun and easy coding tips to keep you motivated.'}
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
