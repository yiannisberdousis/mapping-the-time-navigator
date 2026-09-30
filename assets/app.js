
function resetFinder(){localStorage.setItem('mappingTimeScore','0')}
function addScore(delta,next){const s=parseInt(localStorage.getItem('mappingTimeScore')||'0',10)+delta;localStorage.setItem('mappingTimeScore',String(s));location.href=next}
function setPathway(p){localStorage.setItem('mappingTimePathway',p)}
function setRoute(r){localStorage.setItem('mappingTimeRoute',r)}
function recommendation(){
 const score=parseInt(localStorage.getItem('mappingTimeScore')||'0',10);
 const modular=score>=0; const p=modular?'modular':'full'; setPathway(p);
 const box=document.getElementById('result'); if(!box)return;
 box.innerHTML=`<div class="kicker">Recommended pathway</div>
 <h2>${modular?'Pathway A · Modular Project':'Pathway B · Full Project'}</h2>
 <p>${modular
 ? 'Recommended when teachers wish to introduce the project within a limited timeframe or integrate it into existing Mathematics, Data Literacy or STEM units without committing to the full project sequence.'
 : 'Recommended for schools and teachers who have dedicated project time available and wish to implement the complete learning experience.'}</p>
 <div class="actions"><a class="btn primary" href="../routes/index.html">Choose the Data Route</a>
 <a class="btn secondary" href="${modular?'../modular/index.html':'../full/index.html'}">Open this pathway</a></div>`;
}
function routeContinue(route){setRoute(route);const p=localStorage.getItem('mappingTimePathway')||'modular';location.href=p==='full'?'../full/index.html':'../modular/index.html'}
function showSelection(){
 const p=localStorage.getItem('mappingTimePathway'), r=localStorage.getItem('mappingTimeRoute');
 document.querySelectorAll('[data-route]').forEach(x=>x.classList.toggle('selected',x.dataset.route===r));
 document.querySelectorAll('[data-selection]').forEach(x=>{
   const path=p?(p==='full'?'Full Pathway':'Modular Pathway'):'Pathway not selected';
   const route=r?`Route ${r}`:'Data Route not selected';
   x.innerHTML=`<b>Your implementation:</b> ${path} · ${route}`;
 });
}
function copyExact(btn){
 const text=btn.getAttribute('data-copy');
 navigator.clipboard.writeText(text).then(()=>{
   const old=btn.textContent;btn.textContent='Copied';btn.classList.add('copied');
   setTimeout(()=>{btn.textContent=old;btn.classList.remove('copied')},1300)
 });
}
