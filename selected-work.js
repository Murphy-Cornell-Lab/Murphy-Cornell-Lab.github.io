/* Authorship checked against publisher / PubMed records, October 8, 2026. */
const selectedWorks=[
{title:'Placeholder nucleosomes underlie germline-to-embryo DNA methylation reprogramming',journal:'Cell',year:2018,role:'First author',doi:'10.1016/j.cell.2018.01.022',summary:'A study of how placeholder nucleosomes protect regions of the genome from DNA methylation during the transition from germ cells to embryos.'},
{title:'Genome-wide chromatin accessibility is restricted by ANP32E',journal:'Nature Communications',year:2020,role:'Last & corresponding author',doi:'10.1038/s41467-020-18821-x',summary:'ANP32E regulates H2A.Z positioning to control how accessible DNA is across the genome.'},
{title:'Single-molecule analysis of combinatorial epigenomic states in normal and tumor cells',journal:'PNAS',year:2013,role:'First author',doi:'10.1073/pnas.1218495110',summary:'Single-molecule measurements reveal combinations of epigenetic marks in normal and tumor cells.'}
];

selectedWorks[1].image='nc-model.jpg';selectedWorks[1].crop='nc-crop';selectedWorks[1].credit='Murphy et al., 2020 · Figure 7e · CC BY 4.0';
selectedWorks.unshift({title:'Cooperative and Opposing Functions of ANP32E and VPS72 Govern Gene Promoter Chromatin Status',journal:'Research Square · Preprint',year:2026,role:'Corresponding author',doi:'10.21203/rs.3.rs-8398559/v1',summary:'ANP32E and VPS72 balance promoter activity and nucleosome stability through cooperative and opposing functions.',image:'shan-model.jpg',credit:'Murphy, Hua et al., 2026 · Figure 7 · CC BY 4.0'});
selectedWorks.splice(1,0,{title:'Partitioning of Transposon-Rich Maternal DNA is a Prerequisite for Embryonic Gene Activation',journal:'Research Square · Preprint',year:2026,role:'Lead contact',doi:'10.21203/rs.3.rs-9013907/v1',summary:'A study of how silencing maternal repetitive DNA enables RNA polymerase II to redistribute to genes during embryonic genome activation.',image:'duy-model.png',crop:'duy-crop',credit:'Murphy, Nguyen et al., 2026 · Figure 6F · CC BY 4.0'});
for(const work of selectedWorks){const record=window.publicationRecords.find(p=>p.title.toLowerCase()===work.title.toLowerCase());if(record)record.doi=work.doi}
if(!window.publicationRecords.some(p=>p.doi==='10.21203/rs.3.rs-9013907/v1'))window.publicationRecords.splice(1,0,{title:selectedWorks[1].title,authors:'P Murphy, D Nguyen, P Phromsiri, T McDonnell, K Briedis-Gert, A Pauli, M Welte, V Tropepe, F Meng',journal:'Research Square, 2026',year:2026,type:'Preprint',doi:selectedWorks[1].doi});
const homeBeforeSelectedWorks=pages.home;
pages.home=()=>{
 const html=homeBeforeSelectedWorks(), start=html.indexOf('<section class="section"><div class="feature">'), end=html.indexOf('<section',start+1);
 if(start<0||end<0)return html;
 return html.slice(0,start)+`<section class="section selected-work" aria-label="Selected work"><div class="section-head"><div><div class="eyebrow">Selected work</div><h2>Insights into cell identity.</h2></div><a href="#publications">All ${window.publicationRecords.length} publications →</a></div><div class="work-stage"></div><div class="work-controls"><button type="button" data-step="-1" aria-label="Previous paper">←</button><span class="work-count" aria-live="polite"></span><button type="button" data-step="1" aria-label="Next paper">→</button><button type="button" class="work-play">Pause</button></div></section>`+html.slice(end);
};
window.bindSelectedWork=()=>{
 const root=document.querySelector('.selected-work');if(!root)return;
 let index=0,timer,playing=!matchMedia('(prefers-reduced-motion: reduce)').matches;
 const stage=root.querySelector('.work-stage'),play=root.querySelector('.work-play');
 function show(){const w=selectedWorks[index];stage.innerHTML=`<article class="work-slide ${w.image?'':'text-only'}">${w.image?`<figure><a class="model-frame ${w.crop||''}" href="${w.image}" target="_blank" rel="noopener" aria-label="Open original figure"><img src="${w.image}" alt="Model from ${safe(w.title)}"></a><figcaption>${safe(w.credit)}${w.crop?' · Panel excerpt':''}</figcaption></figure>`:''}<div><div class="eyebrow">${safe(w.journal)} · ${w.year}</div><h3 class="selected-lead-title">${safe(w.title)}</h3><p>${safe(w.summary)}</p><a class="button" href="https://doi.org/${w.doi}" target="_blank" rel="noopener">Read ${w.journal.includes('Preprint')?'the preprint':'the paper'} ↗</a></div></article>`;root.querySelector('.work-count').textContent=`${index+1} / ${selectedWorks.length}`;}
 function schedule(){clearInterval(timer);play.textContent=playing?'Pause':'Play';if(playing)timer=setInterval(()=>{if(!document.hidden&&!root.matches(':hover')&&!root.contains(document.activeElement)){index=(index+1)%selectedWorks.length;show()}},10000)}
 root.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{index=(index+Number(b.dataset.step)+selectedWorks.length)%selectedWorks.length;playing=false;show();schedule()});play.onclick=()=>{playing=!playing;schedule()};show();schedule();window.cleanupSelectedWork=()=>clearInterval(timer);
};
render();
