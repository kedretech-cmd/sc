// typewriter.js - simple rotating typewriter effect
const phrases = ['Learn','Build','Create','Innovate'];
let tIdx=0, charIdx=0, forward=true;
function tick(){
  const el = document.getElementById('typewriter');
  if(!el) return;
  const current = phrases[tIdx];
  if(forward){
    charIdx++; if(charIdx<=current.length) el.textContent = current.slice(0,charIdx);
    else { forward=false; setTimeout(tick,800); return; }
  } else {
    charIdx--; if(charIdx>=0) el.textContent = current.slice(0,charIdx);
    else { forward=true; tIdx=(tIdx+1)%phrases.length; setTimeout(tick,300); return; }
  }
  setTimeout(tick,120);
}
document.addEventListener('DOMContentLoaded', tick);
