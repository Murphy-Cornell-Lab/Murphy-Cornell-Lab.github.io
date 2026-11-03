const portraitSources={
'Mengling Zhang':{file:'mengling.jpg',credit:'Photo provided by the lab'},
'Karli Casler':{file:'karli.jpg',source:'https://www.urmc.rochester.edu/labs/murphy/lab-members'},
'Noah Reger':{file:'noah.jpg',source:'https://www.sas.rochester.edu/bio/spotlight/archive/2025/2025_05_reger.html'},
'Duy Nguyen':{file:'duy.jpg',source:'https://www.urmc.rochester.edu/education/md-phd/current-students/students'},
'Mystie Parker':{file:'mystie.jpg',source:'https://www.eyh.cornell.edu/volunteer/chairs.php'},
'Paige Schneider':{file:'paige.jpg?v=20261103',credit:'Photo provided by the lab'}
};
const peopleBeforePortraits=pages.people;
pages.people=()=>{let html=peopleBeforePortraits();html=html.replace('<article class="card"><span class="number">PRINCIPAL INVESTIGATOR</span>',`<article class="card pi-profile"><figure><img src="patrick.jpg" alt="Patrick J. Murphy" width="320" height="360"></figure><div><span class="number">PRINCIPAL INVESTIGATOR</span>`);html=html.replace('Cornell faculty profile ↗</a></article>','Cornell faculty profile ↗</a></div></article>');currentTeam.forEach((member,i)=>{const actual=portraitSources[member.name];const photo=actual?actual.file:'avatar-'+i+'.svg';const caption=actual?'':'Illustrative placeholder · Not a likeness';html=html.replace(`<article class="member"><h3>${safe(member.name)}</h3>`,`<article class="member"><figure class="member-portrait"><img src="${photo}" alt="${actual?safe(member.name):'Illustrative placeholder for '+safe(member.name)+'; not a likeness'}" width="480" height="540" loading="lazy">${caption?`<figcaption>${caption}</figcaption>`:''}</figure><h3>${safe(member.name)}</h3>`)});return html};
render();
