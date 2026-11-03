const teamPhoto=()=>`<figure class="team-photo"><img src="lab-group.jpg" alt="Murphy Lab group posing with bowling balls during a bowling outing" width="2396" height="1279"><figcaption><span>LAB LIFE</span> A bowling outing with the Murphy Lab.</figcaption></figure>`;
const peopleWithoutPhoto=pages.people;
pages.people=()=>{const html=peopleWithoutPhoto();const cut=html.indexOf('<section class="section">');return html.slice(0,cut)+`<section class="section team-section">${teamPhoto()}</section>`+html.slice(cut)};
const homeWithoutPhoto=pages.home;
pages.home=()=>{const html=homeWithoutPhoto();const marker='<section class="section"><div class="feature">';return html.replace(marker,`<section class="section lab-life-preview"><a href="#people" aria-label="Meet the Murphy Lab team"><img src="lab-group.jpg" alt="Murphy Lab group at a bowling outing" width="2396" height="1279" loading="lazy"></a><div><div class="eyebrow">Life in the lab</div><h2>People make<br>the discoveries.</h2><p>A glimpse of the Murphy Lab beyond the bench.</p><a class="button secondary" href="#people">Meet the lab →</a></div></section>`+marker)};
render();
