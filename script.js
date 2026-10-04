/* ================= DATA ================= */
/* Real event data extracted from: Turkey_SAM_program.xlsx, Scientific_program.xlsx,
   Customer_ID_List.xlsx, and the two Berniq/Libyan Wings flight tickets.
   Event date confirmed from source files: 07-10 October 2026 (tickets & program both say "26"). */

const CUSTOMERS = [
  {city:'Benghazi', name:'Fadhlullah Ali Mansour Abraheem'},
  {city:'Benghazi', name:'Faraj Abdulsalam Faraj Almuntaser'},
  {city:'Benghazi', name:'Mohammed Belgasem Mohammed Omar'},
  {city:'Benghazi', name:'Moayed Musbah Mohamed Elmaghour'},
  {city:'Benghazi', name:'Mohamed H Hamed Mohamed'},
  {city:'Benghazi', name:'Ali Ramadhan Ali Habeel'},
  {city:'Benghazi', name:'Faraj Abdulkarim Salih Alfareetees'},
  {city:'Benghazi', name:'Wesam Mohammed Salem Elhamali'},
  {city:'Benghazi', name:'Randa F Mohamed Eldaghili'},
  {city:'Benghazi', name:'Abdulsalam Alsayid Abdulsalam Sunousi'},
  {city:'Benghazi', name:'Haytham Abdulmawlay Hassan Alsunousi'},
  {city:'Tripoli', name:'Ashraf Basheer Alhadi Shabi'},
  {city:'Tripoli', name:'Amjad Shukri Abdulsalam Aldabbar'},
  {city:'Tripoli', name:'Mohamed Abdalla Muftah Elbuaishi'},
  {city:'Tripoli', name:'Mahmoud Mustafa Miftah Immeemin'},
  {city:'Tripoli', name:'Mohamed Osama M Shwiraf'},
  {city:'Tripoli', name:'Fuad Khalleefah Ali Aler'},
  {city:'Tripoli', name:'Ahmed Muftah M Emhemed'},
  {city:'Tripoli', name:'Hakim Elkoni E Emdakim'},
  {city:'Tripoli', name:'Ahmed Alrammah Almahdi Ikraysh'},
  {city:'Tripoli', name:'Mohammed Abdulsalam Omar Idrah'},
  {city:'Tripoli', name:'Mohamed Ahmed Mohamed Kundi'},
  {city:'Tripoli', name:'Mohammed Ali Mohammed Alaswad'},
  {city:'Tripoli', name:'Tariq Basheer Ali Abuojaylah'},
  {city:'Tripoli', name:'Nasr Aldeen Mohammed Nasr'},
  {city:'Tripoli', name:'Salah Mellal'},
  {city:'Tripoli', name:'Basma Mousa Ibrahim El Habbash'},
  {city:'Tripoli', name:'Yasri M M Ali Eshtewi'},
  {city:'Tripoli', name:'Abdulmunem Mare Mohammed Abouhjab'},
  {city:'Tripoli', name:'Salah Emhemmed Abusahmeen'},
  {city:'Egypt', name:'Mohamed Fawzy Khatab'},
  {city:'EVA Team', name:'Wael Anwar'},
  {city:'EVA Team', name:'Ahmed El Gahawy'},
  {city:'EVA Team', name:'Peter Karmy'},
];

const PROGRAM = [
  {label:'Day 1', date:'Wed 07 Oct', items:[
    {t:'13:00', h:'Flight Arrival', d:'Group arrival in Istanbul (Tripoli & Benghazi flights)'},
    {t:'13:45–15:00', h:'Airport Transfer', d:'Private group transfer to the hotel'},
    {t:'15:00–15:30', h:'Hotel Check-in', d:'Check-in at Point Hotel 5★ Taksim'},
    {t:'15:30–16:30', h:'Welcome Coffee Break', d:'Welcome refreshments upon arrival at the hotel'},
    {t:'16:30–19:00', h:'Leisure Time', d:'Time to rest and refresh'},
    {t:'19:00–20:00', h:'Opening & Program Overview', d:'Opening ceremony and agenda overview'},
    {t:'20:00–20:30', h:'Transfer to Dinner', d:'Evening transfer to restaurant'},
    {t:'20:30–22:30', h:'Welcome Dinner', d:'Group dinner at Meat Moot Ortaköy'},
    {t:'22:30–23:00', h:'Return Transfer', d:'Private transfer back to Point Hotel 5★'},
  ]},
  {label:'Day 2', date:'Thu 08 Oct', items:[
    {t:'07:00–08:45', h:'Breakfast', d:'Point Hotel Restaurant'},
    {t:'09:00–11:00', h:'Scientific Session', d:'Scientific Session — Day 1 (see Scientific Agenda tab)'},
    {t:'11:00–12:00', h:'Coffee Break', d:'Lobby gathering for departure'},
    {t:'12:00–14:00', h:'Scenic Drive to Sapanca', d:'Departure for the Sapanca excursion'},
    {t:'14:00–16:00', h:'Sapanca Sightseeing Tour', d:'Visit to Glass Terrace, Sapanca Lake, Teleferic Sapanca and Maşukiye with leisure activities'},
    {t:'16:00–17:00', h:'Group Lunch', d:'Inclusive group lunch at Sapanca'},
    {t:'17:00–19:00', h:'Return Drive to Istanbul', d:'Scenic drive back to Point Hotel 5★'},
    {t:'19:00 onwards', h:'Evening at Leisure', d:'Free evening to enjoy Taksim'},
  ]},
  {label:'Day 3', date:'Fri 09 Oct', items:[
    {t:'07:00–08:45', h:'Breakfast', d:'Point Hotel Restaurant'},
    {t:'09:00–12:00', h:'Scientific Session', d:'Scientific Session — Day 2 (see Scientific Agenda tab)'},
    {t:'12:00–13:00', h:'Coffee Break', d:''},
    {t:'13:00–14:00', h:'Jumu’ah Prayer', d:'Friday prayer break'},
    {t:'14:00–19:00', h:'Leisure & City Exploration', d:'Free time for shopping and exploring Istanbul — optional transfer to Olivium Outlet Mall (see below)'},
    {t:'19:30–20:00', h:'Transfer to Dinner', d:'Evening transfer to restaurant'},
    {t:'20:00–22:30', h:'Gala Dinner', d:'Farewell dinner at Kuzu Beyi Restaurant'},
    {t:'22:30–23:00', h:'Return Transfer', d:'Private transfer back to Point Hotel 5★'},
  ], olivium:true},
  {label:'Day 4', date:'Sat 10 Oct', items:[
    {t:'07:00–10:00', h:'Breakfast', d:'Point Hotel Restaurant'},
    {t:'10:00–10:30', h:'Hotel Check-out', d:'Luggage collection and check-out'},
    {t:'10:30–11:30', h:'Departure Transfer', d:'Private group transfer to Istanbul Airport'},
    {t:'11:30', h:'Airport Check-in', d:'Flight check-in and passport control'},
    {t:'14:00', h:'Departure', d:'Flights depart back to Tripoli and Benghazi'},
  ]},
];

const SCIENTIFIC = [
  {label:'Day 1', date:'Wed 07 Oct', sessions:[
    {t:'19:00 – 20:00', speaker:'Dr. Wael Anwar', role:'Near East Commercial Excellence and Libya Country Head, Emerging Markets', topic:'Opening & Corporate Presentation', chair:''},
  ]},
  {label:'Day 2', date:'Thu 08 Oct', sessions:[
    {t:'09:00 – 10:30', speaker:'Dr. Mohamed Fawzy Khatab', role:'Professor of Orthopedic and Spine Surgery, Faculty of Medicine, Ain Shams University, Egypt', topic:'Back Pain: Solving the Dilemma — Neuropathy Workshop', chair:'Chairman: Dr. Yousri Shtiwy — Head of Orthopedic Dept, TMC'},
    {t:'10:30 – 11:00', speaker:'EVA Staff', role:'', topic:'From Legacy to Innovation: Introducing Thiotacid Plus XR', chair:''},
  ]},
  {label:'Day 3', date:'Fri 09 Oct', sessions:[
    {t:'09:00 – 09:45', speaker:'Dr. Basma El Habash', role:'Professor of Rheumatology and Musculoskeletal Diseases, Faculty of Medicine, Tripoli University', topic:'Rethinking Osteoarthritis Management: A Multimodal Approach', chair:'Chairmen: Dr. Salah Abou Sahmin — Head of Orthopedic Dept, Abou Slim Hospital for Accidents\nDr. Randa El Deghely — Head of Orthopedic Dept, The Libyan International University'},
    {t:'09:45 – 10:30', speaker:'Dr. Mahmoud Imemen', role:'Consultant Orthopedic Surgeon, Head of Orthopedic Dept, Al Khadra Hospital, Tripoli, Libya', topic:'When Pain Is More Than Musculoskeletal: The Neuropathic Component', chair:''},
    {t:'10:30 – 11:00', speaker:'EVA Staff', role:'', topic:'Genuphil Family: Addressing Different Needs in Osteoarthritis', chair:''},
  ]},
];

const HOTEL = {lat:41.0387, lon:28.9861};
const EVENT_START = new Date('2026-10-07T09:00:00');
/* Olivium responses have no backend to collect into — set this to the organizer's
   WhatsApp number (international format, digits only, e.g. "218911234567") so the
   "Send my response to the organizer" button opens a chat pre-addressed to them.
   Leave blank to just open WhatsApp's normal share sheet instead. */
const ORGANIZER_WHATSAPP = '';

/* Google Sheet logging for Olivium responses — paste the Apps Script Web App
   URL here (see setup steps provided separately). Every tap of Yes/No also
   posts the attendee's name, city and choice as a new row in that Sheet.
   Leave blank to skip Sheet logging (WhatsApp share still works either way). */
const OLIVIUM_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwcr3H_WgtzwWS2IqTXOBnawPbWjRZnKW2HdGWqgUwEpjEwesOSjdv0pMZOjOqWbCQrtQ/exec';

/* ================= storage helpers ================= */
function loadProfile(){
  try{
    const raw = localStorage.getItem('orthosam_profile');
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
function storeProfile(profile){
  try{ localStorage.setItem('orthosam_profile', JSON.stringify(profile)); }catch(e){/* best effort */}
}
function loadOlivium(){
  try{
    const raw = localStorage.getItem('orthosam_olivium');
    return raw ? JSON.parse(raw) : null;
  }catch(e){ return null; }
}
function storeOlivium(choice){
  try{ localStorage.setItem('orthosam_olivium', JSON.stringify({choice, at: new Date().toISOString()})); }catch(e){/* best effort */}
}

let profile = {name:'', city:'', photo:''};

function initials(name){
  return name.split(' ').filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();
}

function applyProfile(){
  document.getElementById('greetName').textContent = profile.name ? ('Welcome, ' + profile.name) : 'Welcome';
  document.getElementById('greetCity').textContent = profile.city ? profile.city : '';
  const imgs = [document.getElementById('homeAvatarImg')];
  const icons = [document.getElementById('homeAvatarIcon')];
  if(profile.photo){
    imgs.forEach(i=>{i.src=profile.photo; i.style.display='block';});
    icons.forEach(i=>i.style.display='none');
  } else {
    icons.forEach(i=>i.style.display='block');
    imgs.forEach(i=>i.style.display='none');
  }
}

function resizeImage(file, cb){
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const size = 240;
      const canvas = document.createElement('canvas');
      canvas.width = size; canvas.height = size;
      const ctx = canvas.getContext('2d');
      const s = Math.max(size/img.width, size/img.height);
      const w = img.width*s, h = img.height*s;
      ctx.drawImage(img, (size-w)/2, (size-h)/2, w, h);
      cb(canvas.toDataURL('image/jpeg', 0.75));
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ================= onboarding: searchable name picker ================= */
const onboarding = document.getElementById('onboarding');
const nameSearch = document.getElementById('nameSearch');
const nameResults = document.getElementById('nameResults');
const selectedChip = document.getElementById('selectedChip');
let pendingSelection = null;

function renderResults(query){
  const q = query.trim().toLowerCase();
  if(!q){ nameResults.classList.remove('show'); nameResults.innerHTML=''; return; }
  const matches = CUSTOMERS.filter(c => c.name.toLowerCase().includes(q));
  if(matches.length===0){
    nameResults.innerHTML = '<div class="nr-empty">No attendee matches — check the spelling, or continue with the name you typed.</div>';
  } else {
    nameResults.innerHTML = matches.slice(0,8).map(c => `
      <div class="nr-item" data-name="${c.name.replace(/"/g,'&quot;')}" data-city="${c.city}">
        ${c.name} <span>${c.city}</span>
      </div>`).join('');
  }
  nameResults.classList.add('show');
}

nameSearch.addEventListener('input', () => renderResults(nameSearch.value));
nameSearch.addEventListener('focus', () => { if(nameSearch.value.trim()) renderResults(nameSearch.value); });
nameResults.addEventListener('click', (e) => {
  const item = e.target.closest('.nr-item');
  if(!item || !item.dataset.name) return;
  selectAttendee(item.dataset.name, item.dataset.city || '');
});
document.addEventListener('click', (e) => {
  if(!e.target.closest('.search-wrap')) nameResults.classList.remove('show');
});

function selectAttendee(name, city){
  pendingSelection = {name, city};
  nameSearch.value = '';
  nameResults.classList.remove('show');
  document.getElementById('selectedChipName').textContent = name;
  document.getElementById('selectedChipCity').textContent = city || 'Attendee';
  document.getElementById('selectedChipDot').textContent = initials(name);
  selectedChip.classList.add('show');
  document.getElementById('obEnter').disabled = false;
}
document.getElementById('selectedChipClear').addEventListener('click', () => {
  pendingSelection = null;
  selectedChip.classList.remove('show');
  document.getElementById('obEnter').disabled = true;
});

document.getElementById('obPhotoPick').onclick = () => document.getElementById('obPhotoInput').click();
document.getElementById('obPhotoInput').onchange = e => {
  if(!e.target.files[0]) return;
  resizeImage(e.target.files[0], dataUrl => {
    profile.photo = dataUrl;
    const img = document.getElementById('obPhotoImg');
    img.src = dataUrl; img.style.display='block';
    document.getElementById('obPhotoIcon').style.display='none';
  });
};
document.getElementById('obEnter').onclick = () => {
  if(!pendingSelection) return;
  profile.name = pendingSelection.name;
  profile.city = pendingSelection.city;
  storeProfile(profile);
  applyProfile();
  onboarding.style.display = 'none';
};

/* ---------------- edit sheet (change name/photo later) ---------------- */
const sheetBg = document.getElementById('sheetBg');
function openSheet(){
  document.getElementById('sheetName').textContent = profile.name || 'Not selected';
  document.getElementById('sheetCity').textContent = profile.city || '';
  const img = document.getElementById('sheetPhotoImg');
  if(profile.photo){ img.src = profile.photo; img.style.display='block'; document.getElementById('sheetPhotoIcon').style.display='none'; }
  sheetBg.classList.add('show');
}
function closeSheet(){ sheetBg.classList.remove('show'); }
document.getElementById('homeAvatarBtn').onclick = openSheet;
document.getElementById('sheetPhotoPick').onclick = () => document.getElementById('sheetPhotoInput').click();
document.getElementById('sheetPhotoInput').onchange = e => {
  if(!e.target.files[0]) return;
  resizeImage(e.target.files[0], dataUrl => {
    profile.photo = dataUrl;
    const img = document.getElementById('sheetPhotoImg');
    img.src = dataUrl; img.style.display='block';
    document.getElementById('sheetPhotoIcon').style.display='none';
    storeProfile(profile);
    applyProfile();
  });
};
document.getElementById('sheetChangeName').onclick = () => {
  closeSheet();
  profile = {name:'', city:'', photo: profile.photo};
  storeProfile(profile);
  onboarding.style.display = 'flex';
};

/* ---------------- tabs ---------------- */
function goTab(name){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+name).classList.add('active');
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.tab===name));
  document.getElementById('views').scrollTop = 0;
}

/* ---------------- program rendering ---------------- */
let activeDay = 0;
function renderDayTabs(){
  const wrap = document.getElementById('daytabs');
  wrap.innerHTML = '';
  PROGRAM.forEach((d,i)=>{
    const b = document.createElement('button');
    b.className = 'daychip' + (i===activeDay?' active':'');
    b.textContent = d.label;
    b.onclick = () => { activeDay = i; renderDayTabs(); renderTimeline(); };
    wrap.appendChild(b);
  });
}
function renderTimeline(){
  const day = PROGRAM[activeDay];
  document.getElementById('daylabel').textContent = day.date;
  const tl = document.getElementById('timeline');
  tl.innerHTML = day.items.map(it => `
    <div class="titem">
      <div class="time">${it.t}</div>
      <h4>${it.h}</h4>
      ${it.d ? `<p>${it.d}</p>` : ''}
    </div>`).join('');

  const ov = document.getElementById('oliviumCard');
  if(day.olivium){
    ov.style.display = 'block';
    renderOliviumStatus();
  } else {
    ov.style.display = 'none';
  }
}

/* ---------------- Olivium (no backend — stored locally, share fallback) ---------------- */
function renderOliviumStatus(){
  const saved = loadOlivium();
  const btnYes = document.getElementById('ovYes');
  const btnNo = document.getElementById('ovNo');
  const status = document.getElementById('ovStatus');
  const share = document.getElementById('ovShare');
  btnYes.classList.remove('selected');
  btnNo.classList.remove('selected');
  status.classList.remove('show');
  share.classList.remove('show');
  if(saved){
    if(saved.choice==='yes') btnYes.classList.add('selected');
    if(saved.choice==='no') btnNo.classList.add('selected');
    status.textContent = (saved.choice==='yes' ? 'You’re booked for the Olivium transfer.' : 'You’ve opted out of the Olivium transfer.') + ' Tap again anytime to change.';
    status.classList.add('show');
    share.classList.add('show');
    const name = profile.name || 'Attendee';
    const msg = encodeURIComponent(`Ortho SAM Istanbul — Olivium Outlet Mall response\nName: ${name}\nChoice: ${saved.choice==='yes' ? 'Transfer to Olivium' : 'Not coming to Olivium'}`);
    const waTarget = ORGANIZER_WHATSAPP ? ORGANIZER_WHATSAPP.replace(/\D/g,'') : '';
    document.getElementById('ovShareLink').href = `https://wa.me/${waTarget}?text=${msg}`;
  }
}
function logOliviumToSheet(choice){
  if(!OLIVIUM_SHEET_URL) return;
  try{
    fetch(OLIVIUM_SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'text/plain;charset=utf-8'},
      body: JSON.stringify({
        name: profile.name || 'Unknown',
        city: profile.city || '',
        choice: choice === 'yes' ? 'Transfer to Olivium' : 'Not coming to Olivium',
        submittedAt: new Date().toISOString()
      })
    }).catch(()=>{ /* best effort — attendee's own connection may be offline */ });
  }catch(e){ /* best effort, never block the UI on this */ }
}
function setOlivium(choice){
  storeOlivium(choice);
  renderOliviumStatus();
  logOliviumToSheet(choice);
}
document.getElementById('ovYes').addEventListener('click', () => setOlivium('yes'));
document.getElementById('ovNo').addEventListener('click', () => setOlivium('no'));

/* ---------------- scientific agenda rendering ---------------- */
let activeSciDay = 0;
function renderSciTabs(){
  const wrap = document.getElementById('scidaytabs');
  wrap.innerHTML = '';
  SCIENTIFIC.forEach((d,i)=>{
    const b = document.createElement('button');
    b.className = 'daychip' + (i===activeSciDay?' active':'');
    b.textContent = d.label;
    b.onclick = () => { activeSciDay = i; renderSciTabs(); renderSciSessions(); };
    wrap.appendChild(b);
  });
}
function renderSciSessions(){
  const day = SCIENTIFIC[activeSciDay];
  document.getElementById('scidaylabel').textContent = day.date;
  const wrap = document.getElementById('sciSessions');
  wrap.innerHTML = day.sessions.map(s => `
    <div class="speaker-card">
      <div class="stime">${s.t}</div>
      <h4>${s.topic}</h4>
      <div class="sname">${s.speaker}</div>
      ${s.role ? `<div class="srole">${s.role}</div>` : ''}
      ${s.chair ? `<div class="schair">${s.chair.replace(/\n/g,'<br>')}</div>` : ''}
    </div>`).join('');
}

/* ---------------- countdown ---------------- */
function updateCountdown(){
  const now = new Date();
  let diff = EVENT_START - now;
  if(diff < 0) diff = 0;
  const days = Math.floor(diff/86400000);
  const hours = Math.floor((diff%86400000)/3600000);
  const mins = Math.floor((diff%3600000)/60000);
  document.getElementById('cdDays').textContent = days;
  document.getElementById('cdHours').textContent = hours;
  document.getElementById('cdMins').textContent = mins;
}

/* ---------------- live Istanbul weather ---------------- */
const WEATHER_ICONS = {
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="#F2A900" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.5" fill="#FFC528" stroke="#F2A900"/><path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12h2.5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/></svg>',
  partlycloudy: '<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round"><circle cx="9" cy="9" r="3.4" fill="#FFC528" stroke="#F2A900" stroke-width="1.6"/><path d="M9 3.2v1.6M9 12.6v1.6M3.2 9h1.6M14.2 9h1.6" stroke="#F2A900" stroke-width="1.6"/><path d="M8 20h9a3.6 3.6 0 000-7.2 5 5 0 00-9.4-1.9A4 4 0 008 20z" fill="#EDEAE1" stroke="#9C978A" stroke-width="1.5"/></svg>',
  cloudy: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 19h11a4 4 0 000-8 6 6 0 00-11.3-2.2A4.5 4.5 0 006 19z" fill="#DEDACE" stroke="#9C978A" stroke-width="1.5"/></svg>',
  rain: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 14h11a4 4 0 000-8 6 6 0 00-11.3-2.2A4.5 4.5 0 006 14z" fill="#C9C5B8" stroke="#8B8778" stroke-width="1.5"/><path d="M8 17.5l-1.2 3M12.5 17.5l-1.2 3M17 17.5l-1.2 3" stroke="#4C7FB8" stroke-width="1.7" stroke-linecap="round"/></svg>',
  snow: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 13h11a4 4 0 000-8 6 6 0 00-11.3-2.2A4.5 4.5 0 006 13z" fill="#E9E6DC" stroke="#9C978A" stroke-width="1.5"/><g stroke="#6EA0CC" stroke-width="1.5" stroke-linecap="round"><path d="M9 17v5M6.5 18.5l5 2M11.5 18.5l-5 2"/><path d="M15.5 17v5M13 18.5l5 2M18 18.5l-5 2"/></g></svg>',
  thunder: '<svg viewBox="0 0 24 24" fill="none"><path d="M6 13h11a4 4 0 000-8 6 6 0 00-11.3-2.2A4.5 4.5 0 006 13z" fill="#C9C5B8" stroke="#8B8778" stroke-width="1.5"/><path d="M13 15l-3.2 5h2.7L11 24" stroke="#F2A900" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  fog: '<svg viewBox="0 0 24 24" fill="none" stroke="#9C978A" stroke-width="1.7" stroke-linecap="round"><path d="M5 9h14M4 13h16M6 17h12"/></svg>',
};
const WMO_MAP = {
  0:['sun','Clear sky'], 1:['sun','Mostly clear'], 2:['partlycloudy','Partly cloudy'], 3:['cloudy','Overcast'],
  45:['fog','Foggy'], 48:['fog','Foggy'],
  51:['rain','Light drizzle'], 53:['rain','Drizzle'], 55:['rain','Dense drizzle'],
  56:['rain','Freezing drizzle'], 57:['rain','Freezing drizzle'],
  61:['rain','Light rain'], 63:['rain','Rain'], 65:['rain','Heavy rain'],
  66:['rain','Freezing rain'], 67:['rain','Freezing rain'],
  71:['snow','Light snow'], 73:['snow','Snow'], 75:['snow','Heavy snow'], 77:['snow','Snow grains'],
  80:['rain','Rain showers'], 81:['rain','Rain showers'], 82:['rain','Violent showers'],
  85:['snow','Snow showers'], 86:['snow','Snow showers'],
  95:['thunder','Thunderstorm'], 96:['thunder','Thunderstorm'], 99:['thunder','Severe thunderstorm'],
};
/* Forecast covers the event's first 3 days (Wed 07 – Fri 09 Oct), the days with
   outdoor activity — arrival, the Sapanca excursion, and free time/Olivium.
   Open-Meteo's forecast window is ~16 days out, so this only resolves once
   the event is close; before that it falls back to the October seasonal average. */
const FORECAST_DATES = ['2026-10-07','2026-10-08','2026-10-09'];
const FORECAST_LABELS = ['Wed 07','Thu 08','Fri 09'];
const SEASONAL_FALLBACK = {hi:19, lo:12, code:2}; // Istanbul October average, partly cloudy

function renderForecastCell(i, hi, lo, code){
  const cells = document.querySelectorAll('#forecastRow .forecastcell');
  const cell = cells[i];
  if(!cell) return;
  const [key] = WMO_MAP[code] || ['partlycloudy','—'];
  cell.querySelector('.ficon').innerHTML = WEATHER_ICONS[key];
  cell.querySelector('.fhi').textContent = Math.round(hi) + '°';
  cell.querySelector('.flo').textContent = Math.round(lo) + '°';
}
function fetchWeather(){
  const cacheKey = 'orthosam_forecast';
  const url = `https://api.open-meteo.com/v1/forecast?latitude=41.0082&longitude=28.9784&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FIstanbul&start_date=${FORECAST_DATES[0]}&end_date=${FORECAST_DATES[2]}`;
  fetch(url)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const d = data.daily;
      if(!d || !d.time || !d.temperature_2m_max || d.temperature_2m_max.some(v => v==null)) return Promise.reject();
      const payload = {time: d.time, hi: d.temperature_2m_max, lo: d.temperature_2m_min, code: d.weathercode, at: Date.now()};
      try{ localStorage.setItem(cacheKey, JSON.stringify(payload)); }catch(e){}
      FORECAST_DATES.forEach((date,i) => {
        const idx = d.time.indexOf(date);
        if(idx > -1) renderForecastCell(i, d.temperature_2m_max[idx], d.temperature_2m_min[idx], d.weathercode[idx]);
      });
      document.getElementById('forecastNote').textContent = 'Live forecast, updated ' + new Date().toLocaleTimeString('en-GB', {timeZone:'Europe/Istanbul', hour:'2-digit', minute:'2-digit'}) + ' Istanbul time.';
    })
    .catch(() => {
      let cached = null;
      try{ cached = JSON.parse(localStorage.getItem(cacheKey)); }catch(e){}
      if(cached && cached.time){
        FORECAST_DATES.forEach((date,i) => {
          const idx = cached.time.indexOf(date);
          if(idx > -1) renderForecastCell(i, cached.hi[idx], cached.lo[idx], cached.code[idx]);
        });
        const hrs = Math.round((Date.now()-cached.at)/3600000);
        document.getElementById('forecastNote').textContent = `Showing the last forecast seen (${hrs<1?'under 1h':hrs+'h'} ago) — reconnect for the latest.`;
      } else {
        FORECAST_DATES.forEach((date,i) => renderForecastCell(i, SEASONAL_FALLBACK.hi, SEASONAL_FALLBACK.lo, SEASONAL_FALLBACK.code));
        document.getElementById('forecastNote').textContent = 'Live forecasts open about 16 days before the event — showing Istanbul’s October average until then.';
      }
    });
}

/* ---------------- prayer times (Istanbul, Diyanet method) ---------------- */
const PRAYER_IDS = {Fajr:'prFajr', Dhuhr:'prDhuhr', Asr:'prAsr', Maghrib:'prMaghrib', Isha:'prIsha'};
function renderPrayerTimes(timings){
  Object.keys(PRAYER_IDS).forEach(key => {
    const el = document.getElementById(PRAYER_IDS[key]);
    if(!el || !timings[key]) return;
    el.textContent = timings[key].split(' ')[0]; // strip any "(TZ)" suffix
  });
}
function fetchPrayerTimes(){
  const todayStr = new Date().toLocaleDateString('en-CA', {timeZone:'Europe/Istanbul'}); // YYYY-MM-DD
  const cacheKey = 'orthosam_prayertimes';
  let cached = null;
  try{ cached = JSON.parse(localStorage.getItem(cacheKey)); }catch(e){}
  if(cached && cached.date === todayStr && cached.timings){
    renderPrayerTimes(cached.timings);
    return;
  }
  const url = `https://api.aladhan.com/v1/timings?latitude=41.0082&longitude=28.9784&method=13&timezonestring=Europe%2FIstanbul`;
  fetch(url)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const timings = data && data.data && data.data.timings;
      if(!timings) return Promise.reject();
      try{ localStorage.setItem(cacheKey, JSON.stringify({date: todayStr, timings, at: Date.now()})); }catch(e){}
      renderPrayerTimes(timings);
    })
    .catch(() => {
      if(cached && cached.timings) renderPrayerTimes(cached.timings); // show yesterday's as a rough fallback
    });
}

/* ---------------- live translate ---------------- */
const LANG_PLACEHOLDER = {ar:'Type here…', en:'Type here…', tr:'Buraya yazın…'};

function translateViaGoogle(text, from, to){
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(text)}`;
  return fetch(url)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      if(!Array.isArray(data) || !Array.isArray(data[0])) return Promise.reject();
      const translated = data[0].map(seg => seg && seg[0] ? seg[0] : '').join('');
      if(!translated) return Promise.reject();
      return translated;
    });
}
function translateViaMyMemory(text, from, to){
  const langpair = `${from}|${to}`;
  return fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(data => {
      const translated = data && data.responseData && data.responseData.translatedText;
      if(!translated || /MYMEMORY WARNING/i.test(translated)) return Promise.reject();
      return translated;
    });
}
function initTranslate(){
  const fromSel = document.getElementById('langFrom');
  const toSel = document.getElementById('langTo');
  const input = document.getElementById('translateInput');
  const output = document.getElementById('translateOutput');
  const note = document.getElementById('translateNote');
  const btn = document.getElementById('translateBtn');
  if(!fromSel) return;

  input.placeholder = LANG_PLACEHOLDER[fromSel.value] || 'Type here…';
  fromSel.addEventListener('change', () => { input.placeholder = LANG_PLACEHOLDER[fromSel.value] || 'Type here…'; });

  document.getElementById('swapLang').addEventListener('click', () => {
    const f = fromSel.value, t = toSel.value;
    fromSel.value = t; toSel.value = f;
    input.placeholder = LANG_PLACEHOLDER[fromSel.value] || 'Type here…';
    if(output.style.display !== 'none' && output.textContent){
      input.value = output.textContent;
      output.style.display = 'none';
    }
  });

  btn.addEventListener('click', () => {
    const text = input.value.trim();
    if(!text){ output.style.display='none'; return; }
    if(fromSel.value === toSel.value){
      output.textContent = text;
      output.style.display = 'block';
      note.textContent = 'Source and target are the same language.';
      return;
    }
    btn.disabled = true;
    btn.textContent = 'Translating…';
    translateViaGoogle(text, fromSel.value, toSel.value)
      .catch(() => translateViaMyMemory(text, fromSel.value, toSel.value))
      .then(translated => {
        output.textContent = translated;
        output.style.display = 'block';
        note.textContent = 'Powered by a free translation service — best for short phrases, not full paragraphs.';
      })
      .catch(() => {
        output.style.display = 'none';
        note.textContent = 'Translation is unavailable right now — check your connection and try again.';
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = 'Translate';
      });
  });
}

/* ---------------- live world clocks ---------------- */
const CLOCK_ZONES = [
  {id:'LY', tz:'Africa/Tripoli'},
  {id:'TR', tz:'Europe/Istanbul'},
  {id:'EG', tz:'Africa/Cairo'},
];
function updateClocks(){
  const now = new Date();
  CLOCK_ZONES.forEach(z => {
    const timeEl = document.getElementById('clock'+z.id);
    const dateEl = document.getElementById('date'+z.id);
    if(!timeEl) return;
    timeEl.textContent = now.toLocaleTimeString('en-GB', {timeZone:z.tz, hour:'2-digit', minute:'2-digit'});
    if(dateEl) dateEl.textContent = now.toLocaleDateString('en-GB', {timeZone:z.tz, weekday:'short', day:'numeric', month:'short'});
  });
}

/* ---------------- geolocation ---------------- */
function haversine(lat1,lon1,lat2,lon2){
  const R=6371, toRad=x=>x*Math.PI/180;
  const dLat=toRad(lat2-lat1), dLon=toRad(lon2-lon1);
  const a=Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
  return R*2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}
function locateMe(){
  const el = document.getElementById('locText');
  if(!navigator.geolocation){ el.textContent = 'Location is not available on this device.'; return; }
  el.textContent = 'Locating…';
  navigator.geolocation.getCurrentPosition(pos=>{
    const km = haversine(pos.coords.latitude, pos.coords.longitude, HOTEL.lat, HOTEL.lon);
    el.textContent = km < 1 ? 'You are right at the hotel.' : `You're about ${km.toFixed(1)} km from Point Hotel Taksim.`;
  }, err=>{
    el.textContent = 'Location access was denied — enable it in your browser settings.';
  }, {enableHighAccuracy:true, timeout:8000});
}

/* ---------------- currency converter ---------------- */
const fLYD = document.getElementById('fLYD');
const fTRY = document.getElementById('fTRY');
const fUSD = document.getElementById('fUSD');
const rLYD = document.getElementById('rLYD');
const rTRY = document.getElementById('rTRY');
let lastEdited = 'LYD';

function convert(){
  const usdPerLyd = 1/parseFloat(rLYD.value||6.35);
  const tryPerUsd = parseFloat(rTRY.value||48.40);
  let usd;
  if(lastEdited==='LYD') usd = parseFloat(fLYD.value||0) * usdPerLyd;
  else if(lastEdited==='TRY') usd = parseFloat(fTRY.value||0) / tryPerUsd;
  else usd = parseFloat(fUSD.value||0);

  if(lastEdited!=='LYD') fLYD.value = (usd/usdPerLyd).toFixed(2);
  if(lastEdited!=='TRY') fTRY.value = (usd*tryPerUsd).toFixed(2);
  if(lastEdited!=='USD') fUSD.value = usd.toFixed(2);
}
fLYD.addEventListener('input', ()=>{lastEdited='LYD'; convert();});
fTRY.addEventListener('input', ()=>{lastEdited='TRY'; convert();});
fUSD.addEventListener('input', ()=>{lastEdited='USD'; convert();});
rLYD.addEventListener('input', convert);
rTRY.addEventListener('input', convert);
function toggleRates(){ document.getElementById('ratePanel').classList.toggle('open'); }

/* ---------------- init ---------------- */
(function init(){
  renderDayTabs();
  renderTimeline();
  renderSciTabs();
  renderSciSessions();
  updateCountdown();
  setInterval(updateCountdown, 60000);
  updateClocks();
  setInterval(updateClocks, 1000);
  fetchWeather();
  setInterval(fetchWeather, 900000);
  fetchPrayerTimes();
  setInterval(fetchPrayerTimes, 1800000);
  initTranslate();
  convert();

  const saved = loadProfile();
  if(saved && saved.name){
    profile = saved;
    applyProfile();
    onboarding.style.display = 'none';
  }
})();
