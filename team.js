const currentTeam=[
{name:'Karli Casler',role:'Lab Member'},
{name:'Noah Reger',role:'Lab Member'},
{name:'Duy Nguyen',role:'Lab Member'},
{name:'Mengling Zhang',role:'Postdoctoral Researcher'},
{name:'Miraz Ahammad Sadi',role:'Lab Member'},
{name:'Mystie Parker',role:'Lab Member'},
{name:'Paige Schneider',role:'Lab Member'},
{name:'William Foster Biloski',role:'Lab Member'},
{name:'Cyrus Bahrambegi',role:'Lab Member'},
{name:'Garrett Nicholas Lee',role:'Lab Member'},
{name:'Ben Andrew Lin',role:'Undergraduate Researcher'},
{name:'Luca Valdes',role:'Undergraduate Researcher'}
];
const peopleWithGroupPhoto=pages.people;
pages.people=()=>{const html=peopleWithGroupPhoto();const start=html.indexOf('<div class="empty"><span class="status">Roster update pending');return html.slice(0,start)+`<section class="section"><div class="section-head"><div><div class="eyebrow">Our team</div><h2>Current lab members</h2></div></div><div class="member-grid">${currentTeam.map(member=>`<article class="member"><h3>${safe(member.name)}</h3><p>${safe(member.role)}</p></article>`).join('')}</div></section>`};
const sourceBeforeRoster=pages.sources;
pages.sources=()=>sourceBeforeRoster()+`<div class="empty"><h2>Team information</h2><p>The current roster was supplied directly by the laboratory on October 8, 2026. Full names were checked against the supplied name list and available public sources. Mengling Zhang’s postdoctoral role and Ben Andrew Lin’s and Luca Valdes’s undergraduate roles were supplied by the laboratory. Current roles and institutional affiliations follow the information supplied by the laboratory. Individual research summaries link to public sources where available.</p></div>`;
render();

