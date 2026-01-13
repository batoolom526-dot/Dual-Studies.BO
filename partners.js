// Partners page script (isolated to partners.html)
const partners = [
  {
    id: 1,
    name: 'GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit)',
    location: 'Bonn, Germany',
    tags: ['Capacity Building','Workforce Training'],
    since: 'Since 2022',
    logo: 'assets/partners/giz.svg',
    website: 'https://www.giz.de/en',
    description: `GIZ is a public-benefit federal enterprise owned by the German government that provides technical expertise for international cooperation and sustainable development. Operating in approximately 120 countries as of 2026, it employs more than 24,500 people, the majority of whom are local staff working directly in partner countries. GIZ primarily implements projects on behalf of the German Federal Ministry for Economic Cooperation and Development (BMZ), focusing on global challenges such as climate change mitigation, economic development, peacebuilding, and digital transformation. By combining global vision with local action, the agency aims to improve living conditions sustainably and shape a "future worth living" while simultaneously supporting German and European interests through stable international partnerships.`
  },
  {
    id: 2,
    name: 'TU Berlin',
    location: 'Berlin, Germany',
    tags: ['Engineering','Research','Exchange'],
    since: 'Since 2019',
    logo: 'assets/partners/tu_berlin.svg',
    website: 'https://www.tu.berlin/en/international/strategy/internationalizationhome',
    description: 'Technische Universität Berlin (TU Berlin) is a research university in Germany known for engineering, computer science, and interdisciplinary international collaborations. The university actively promotes internationalization and joint research projects.'
  },
  {
    id: 3,
    name: 'American University of Beirut (AUB)',
    location: 'Beirut, Lebanon',
    tags: ['Engineering','Exchange','Humanities'],
    since: 'Since 2018',
    logo: 'assets/partners/aub.svg',
    website: 'https://www.aub.edu.lb/oip/Pages/default.aspx',
    description: 'The American University of Beirut (AUB) is a leading research university in the MENA region, offering strong engineering and science programs and long-standing international exchange partnerships.'
  }
];

function renderPartnersGrid(list = partners){
  const grid = document.getElementById('partnersGrid');
  grid.innerHTML = '';
  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'partner-card';
    // Make cards keyboard reachable
    card.setAttribute('tabindex','0');
    const shortDesc = p.description.length > 140 ? p.description.slice(0,140).trim() + '…' : p.description;
    card.innerHTML = `
      <div class="partner-logo"><img src="${p.logo}" alt="${p.name} logo"/></div>
      <div class="partner-info">
        <div class="partner-name">${p.name}</div>
        <div class="partner-meta">${p.location} • ${p.since}</div>
        <div class="partner-desc">${shortDesc}</div>
        <div class="partner-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    `;
    card.addEventListener('click', () => openPartnerModal(p.id));
    card.addEventListener('keydown', (ev) => {
      if(ev.key === 'Enter' || ev.key === ' '){ ev.preventDefault(); openPartnerModal(p.id); }
    });
    grid.appendChild(card);
  });
}

function openPartnerModal(id){
  const p = partners.find(x => x.id === id);
  if(!p) return;
  const modal = document.getElementById('partnerModal');
  const body = document.getElementById('partnerModalBody');
  body.innerHTML = `
    <div class="partner-modal-top">
      <div class="partner-modal-logo"><img src="${p.logo}" alt="${p.name} logo"/></div>
      <div class="partner-modal-info">
        <h2>${p.name}</h2>
        <div class="partner-meta">${p.location} • ${p.since}</div>
      </div>
    </div>
    <div class="partner-modal-desc">${p.description}</div>
    <div class="partner-modal-actions">
      <a class="btn btn-primary" href="${p.website}" target="_blank" rel="noopener">Visit Website</a>
      <button class="btn btn-secondary" id="partnerModalCloseBtn">Close</button>
    </div>
  `;
  modal.classList.add('active');
  // hook up close buttons
  const closeBtn = document.getElementById('partnerModalCloseBtn');
  if(closeBtn) closeBtn.addEventListener('click', closePartnerModal);
  const existingClose = document.getElementById('partnerModalClose');
  if(existingClose) existingClose.addEventListener('click', closePartnerModal);
}

function closePartnerModal(){
  const modal = document.getElementById('partnerModal');
  if(modal) modal.classList.remove('active');
}

// Initialize when partners page loads
if(typeof window !== 'undefined'){
  window.addEventListener('DOMContentLoaded', () => {
    if(document.getElementById('partnersGrid')){
      renderPartnersGrid();

      // Setup search + filters
      const searchEl = document.getElementById('partnersSearch');
      const regionEl = document.getElementById('partnersRegion');
      const typeEl = document.getElementById('partnersType');

      function matchesFilter(p, q, region, type){
        const text = (p.name + ' ' + p.location + ' ' + p.tags.join(' ')).toLowerCase();
        if(q && !text.includes(q.toLowerCase())) return false;
        if(region && region !== '' && p.location.toLowerCase().indexOf(region.toLowerCase()) === -1) return false;
        if(type && type !== '' && p.tags.map(t=>t.toLowerCase()).indexOf(type.toLowerCase()) === -1) return false;
        return true;
      }

      function applyFilters(){
        const q = searchEl ? searchEl.value.trim() : '';
        const region = regionEl ? regionEl.value : '';
        const type = typeEl ? typeEl.value : '';
        const filtered = partners.filter(p => matchesFilter(p, q, region, type));
        renderPartnersGrid(filtered);
      }

      // simple debounce
      function debounce(fn, wait=200){
        let t;
        return (...args) => { clearTimeout(t); t = setTimeout(()=>fn(...args), wait); };
      }

      if(searchEl) searchEl.addEventListener('input', debounce(applyFilters, 180));
      if(regionEl) regionEl.addEventListener('change', applyFilters);
      if(typeEl) typeEl.addEventListener('change', applyFilters);

      // modal: close on background click or Escape
      const modal = document.getElementById('partnerModal');
      if(modal){
        modal.addEventListener('click', (ev)=>{ if(ev.target === modal) closePartnerModal(); });
        window.addEventListener('keydown', (ev)=>{ if(ev.key === 'Escape') closePartnerModal(); });
      }
    }
  });
}

    // Back to Top button behaviour
    (function(){
      const btn = document.getElementById('backToTop');
      if(!btn) return;
      function check(){
        if(window.scrollY > 220) btn.style.display = 'flex';
        else btn.style.display = 'none';
      }
      window.addEventListener('scroll', check);
      // initial
      check();
      btn.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));
    })();
