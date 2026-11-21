/* =========================================================
   여기만 고치면 내용이 바뀌어요
   ========================================================= */
const CONFIG = {
  name: 'Take #1',
  subtitle: '오늘 밤의 주인공은 바로 당신',
  dateISO: '2026-11-21T14:00:00+09:00',
  dateText: '2026. 11. 21. 토요일',
  timeText: '14:00–18:00',
  place: '시립서울청소년센터',
  placeName: '시립서울청소년센터',
  placeAddr: '서울 중구 을지로11길 23 · 을지로3가역 인근',
  mapUrl: 'https://map.naver.com/p/search/%EC%8B%9C%EB%A6%BD%EC%84%9C%EC%9A%B8%EC%B2%AD%EC%86%8C%EB%85%84%EC%84%BC%ED%84%B0',
  // 배경음악: 비워 두면 파일 안에 넣어 둔 음원(#bgmData)을 재생해요. 외부 mp3 주소를 넣으면 그걸 우선 사용해요
  bgmSrc: '',
  // 구글폼 등 링크를 넣으면 버튼이 활성화돼요
  surveyUrl: '',
  matchingUrl: '',
  applicationsEndpoint: 'https://script.google.com/macros/s/AKfycbxwccb2Q4To6FNHTQViY1EhZMhLIYe1IAcQIUOeW7BTUerjUXqa-X9I1VXSigQiNCq6xA/exec',
  // 운영진 모드 비밀번호 (화면 코드에 그대로 보이니 간단한 잠금 용도로만 쓰세요)
  adminPin: '1121',
  // 외부에 배포할 때: Firebase Realtime Database 주소를 넣으면 대기 등록·댓글이 모두에게 공유돼요
  // 예) 'https://take1-fest-default-rtdb.asia-southeast1.firebasedatabase.app'
  dbUrl: 'https://take1-fev-default-rtdb.asia-southeast1.firebasedatabase.app',

  // 프로그램 순서: 시간이 정해지면 time에 '10:00–12:00'처럼 적어 주세요
  timeline: [
    { cat:'강연', title:'학술분과 강연', time:'', floor:'5F', sum:'학술분과에서 준비한 강연' },
    { cat:'공연', title:'예술분과 공연', time:'', floor:'B1', sum:'예술분과의 무대 공연' },
    { cat:'부스', title:'봉사분과 부스', time:'15:30–17:30', floor:'1F', sum:'봉사분과에서 운영하는 체험 부스' },
    { cat:'교류팅', title:'교류팅 부스', time:'15:30–17:30', floor:'8F', sum:'동아리 친구들과 함께하는 교류의 시간' },
    { cat:'부스', title:'청운위 부스', time:'15:30–17:30', floor:'5F', sum:'청운위 자체기획 프로그램' }
  ],
  items: {
    ggumsaem:  { name:'꿈샘', cat:'부스', time:'15:30–17:30', wait:false, desc:'무인 부스로 꿈샘을 소개하는 포스터와 홍보물을 전시하고 안내해요.', promo:'꿈샘 소개 포스터 · 홍보물 전시 부스' },
    angels:    { name:'천사들의 합창', cat:'부스', time:'15:30–17:30', wait:false, desc:'1층 노래방 부스에서 운영하는 무인 부스예요.', promo:'노래방 시설을 활용한 합창 부스' },
    aureum:    { name:'아름터', cat:'부스', time:'15:30–17:30', wait:false, desc:'무인 부스에서 여러 학과 연계 체험을 운영해요.', promo:'수리 카드 게임 · 힌트 카드 노트북 암호풀기 · 색 손목지 제작 · 정체성 완성 카드 구매 · 모루꽃과 편지 작성' },
    painting:  { name:'파인트리클럽', cat:'부스', time:'15:30–17:30', wait:false, desc:'무인 부스에서 영어 밸런스 게임과 참여형 포스트잇 활동을 운영해요.', promo:'영어 밸런스 게임 · 영어 질문 카드 · 자신의 생각 포스트잇 작성' },
    rotary:    { name:'신한로타랙트클럽', cat:'부스', time:'15:30–17:30', wait:false, desc:'무인 부스로 로타랙트 동아리를 소개하는 포스터와 홍보물을 전시해요.', promo:'로타랙트 소개 포스터 · 홍보물 전시 부스' },
    preview:   { name:'프리뷰', cat:'부스', time:'15:30–17:30', wait:true, desc:'직접 운영하는 부스예요. 프로필 촬영 카드와 포토 부스, 우드락 활동을 연결해 운영해요.', promo:'학교 로고 조합 포토 부스 · 인스타 포스팅용 우드락 제작 이벤트' },
    rcy:       { name:'RCY', cat:'부스', time:'15:30–17:30', wait:true, desc:'직접 운영하는 부스예요. 영화관 콘셉트의 긴급 상황 대피 체험과 퀴즈 활동을 진행해요.', promo:'영화관 긴급상황 대피 체험 · 관련 상식·교양 퀴즈 활동' },
    doremi:    { name:'도레미코프로젝트', cat:'부스', time:'15:30–17:30', wait:true, desc:'직접 운영하는 부스예요. 재활용 자재로 화분을 만들고 도심 농업을 체험해요.', promo:'재활용 자재 화분 제작 · 화분과 도시 농업 체험 · 재활용 제품 인식 개선 활동' },
    foodtf:    { name:'먹거리TF', cat:'부스', time:'15:30–17:30', wait:true, desc:'날씨와 현장 상황에 맞춰 방문자에게 나눔할 수 있는 먹거리 부스를 운영해요.', promo:'먹거리 부스 방문자 대상 팜플렛 제공 및 나눔 활동' },
    escape:    { name:'방탈출 : 사라진 차곡을 쫓아서', cat:'부스', time:'15:30–17:30', wait:true, desc:'청운위에서 자체기획한 방탈출 프로그램이에요. 5층 전체를 사용하며 팀 단위로 입장해요.', promo:'6~8명이 한 팀일 때 가장 재밌어요. 6명 이상 모였을 때만 출발가능합니다.' },
    artshow:   { name:'예술분과 공연', cat:'부스', time:'15:30–17:30', wait:false, desc:'청소년공감센터 움에서 카포에라, 케이팝 댄스, 밴드 공연을 한 칸의 부스형 안내로 확인할 수 있어요.', promo:'카포에라 · 케이팝 댄스 · 밴드 무대' },
    capoeira:  { name:'카포에라 무대', cat:'공연', time:'시간 확정 전', desc:'무술과 음악이 어우러진 카포에라 공연이에요.' },
    kpop:      { name:'케이팝 댄스 무대', cat:'공연', time:'시간 확정 전', desc:'댄스 동아리의 케이팝 커버 무대예요.' },
    band:      { name:'밴드 무대', cat:'공연', time:'시간 확정 전', desc:'밴드 동아리의 라이브 공연이에요.' },
    lecture:   { name:'경제 학회 강연', cat:'강연', time:'시간 확정 전', desc:'경제 학회가 준비한 강연이에요.' },
    matchingView: { name:'교류팅 관람 부스', cat:'부스', time:'15:30–17:30', wait:false, desc:'지하 1층에서 교류팅 진행을 관람하고 응원할 수 있는 공간이에요.', promo:'교류팅 관람 · 응원 부스' },
    matching:  { name:'교류팅 부스', cat:'부스', time:'15:30–17:30', wait:false, desc:'8층에서 진행되는 교류팅 프로그램 부스예요.', promo:'교류팅 진행 부스' },
    party:     { name:'뒷풀이', cat:'뒷풀이', time:'축제 종료 후', desc:'축제를 마무리하며 함께 모이는 시간이에요.' },
    info:      { name:'안내 데스크', cat:'편의', desc:'지도, 분실물, 문의는 이곳에서 도와드려요.' },
    photo:     { name:'레드카펫 포토존', cat:'편의', desc:'트로피를 들고 레드카펫 위에서 사진을 남겨 보세요.' },
  },

  // 지도 수정 안내:
  // - c:[왼쪽 열, 오른쪽 열], r:[위쪽 행, 아래쪽 행]이며 끝 숫자는 포함하지 않아요.
  // - 예: c:[5,9], r:[0,4] = 5열부터 8열, 0행부터 3행을 차지하는 공간.
  // - cols/rows는 전체 격자 크기예요. B1·1F·8F·5F는 현재 20열×14행입니다.
  // - type:'booth'는 클릭 가능한 부스, type:'facility'는 선으로만 표시되는 구조물입니다.
  // - type:'amenity'는 초록색 편의시설, type:'show'는 분홍색 공연 공간입니다.
  // - type:'blocked'는 사용할 수 없는 공간이며 X 하나로 표시됩니다.
  // - v:true를 추가하면 이름을 세로 방향으로 표시합니다.
  floors: [
    // ===== B1층 지도 =====
    // spots: 실제 지도에 보이는 영역. rooms: 부스 클릭 시 열 상세 정보와 연결.
    { id:'B1', label:'지하 1층', note:'청소년공감센터 움에서 공연을 운영하고 교류팅 관람 부스를 마련해요.', layout:'grid-map', cols:20, rows:14, spots:[
      { type:'booth', name:'예술분과 공연', c:[9,20], r:[0,14], room:'um' },
      { type:'facility', name:'화장실', c:[0,3], r:[4,7], v:1 },
      { type:'facility', name:'엘베', c:[4,6], r:[4,7], v:1 },
      { type:'facility', name:'계단', c:[6,9], r:[4,7], v:1 },
      { type:'blocked', c:[0,9], r:[0,4] } ],
      rooms:[
      { id:'um', name:'예술분과 공연', area:'1/10/15/21', items:['artshow'] },
      { id:'b1-matching-view', name:'교류팅 관람 부스', area:'1/1/10/9', items:['matchingView'] } ]
    },
    // ===== 1층 지도 =====
    { id:'1F', label:'1층', note:'꿈샘부터 먹거리TF까지 동아리 부스를 운영해요.', layout:'grid-map', cols:20, rows:14, spots:[
      // 첨부한 단순화 스케치 기준: 상단 큰 도서관, 중앙 복도, 하단 카페
      { type:'amenity', name:'도서관', c:[8,20], r:[0,6] },
      { type:'facility', name:'화장실', c:[0,4], r:[3,6], v:1 },
      { type:'facility', name:'엘베', c:[4,6], r:[3,6], v:1 },
      { type:'facility', name:'계단', c:[6,8], r:[3,6], v:1 },
      { type:'facility', name:'후문', c:[0,2], r:[7,9], v:1 },
      { type:'facility', name:'정문', c:[18,20], r:[6,8], v:1 },
      { type:'facility', name:'계단', c:[0,2], r:[9,14], v:1 },
      { type:'amenity', name:'카페', c:[2,20], r:[8,14] } ], rooms:[
      { id:'desk', name:'안내 데스크', area:'1/1/2/2', items:['info'] },
      { id:'carpet', name:'레드카펫 포토존', area:'1/2/2/4', items:['photo'] },
      { id:'ggumsaem', name:'꿈샘 부스', area:'2/1/4/3', items:['ggumsaem'] },
      { id:'angels', name:'천사들의 합창 노래방 부스', area:'1/4/2/5', items:['angels'] },
      { id:'aureum', name:'아름터 체험 부스', area:'2/3/3/5', items:['aureum'] },
      { id:'painting', name:'파인트리클럽 부스', area:'3/3/4/5', items:['painting'] },
      { id:'rotary', name:'신한로타랙트클럽 부스', area:'4/3/5/5', items:['rotary'] },
      { id:'preview', name:'프리뷰 운영 부스', area:'5/3/6/5', items:['preview'] },
      { id:'rcy', name:'RCY 운영 부스', area:'6/3/7/5', items:['rcy'] },
      { id:'doremi', name:'도레미코프로젝트 부스', area:'7/3/8/5', items:['doremi'] },
      { id:'foodtf', name:'먹거리TF 부스', area:'8/3/9/5', items:['foodtf'] }]},
    // ===== 3층 지도 =====
    { id:'3F', label:'3층', note:'계단과 화장실을 확인할 수 있어요.', rooms:[
      { id:'c3', name:'계단·화장실', area:'3/1/4/5' }]},
    // ===== 5층 지도 =====
    { id:'5F', label:'5층', note:'청운위 주최 방탈출 프로그램이 5층 가람·마루·온누리·한울·미리내에서 진행돼요.', rooms:[
      { id:'escape-5f', name:'가람·마루·온누리·한울·미리내', items:['escape'] }]},
    // ===== 8층 지도 =====
    { id:'8F', label:'8층', note:'8층에서 교류팅 부스를 운영해요.', layout:'grid-map', cols:20, rows:14, rooms:[
      { id:'8f-matching', name:'교류팅 부스', area:'1/1/20/14', items:['matching'] } ]}
  ]
};
const GOOGLE_SCRIPT_URL = CONFIG.applicationsEndpoint;
// 분류별 색: c = 진한 강조색, f = 카드 채움색
const CATS  = { '부스':'#E9C35A', '공연':'#E58AA6', '강연':'#7FB2E8', '교류팅':'#A996E6', '뒷풀이':'#E9A878', '편의':'#7FCBA9' };
const FILLS = { '부스':'#FAF0D2', '공연':'#F8DDE4', '강연':'#DDE9F5', '교류팅':'#E8E2F6', '뒷풀이':'#F6E1CC', '편의':'#D8EFE4' };
const FLOOR_COLORS = { B1:'#F6E3A6', '1F':'#F4CCD4', '3F':'#C9DAF4', '8F':'#F4D3B3', '5F':'#BFC8F7' };
const PREFIX = { '부스':'B', '공연':'S', '강연':'L', '교류팅':'M', '뒷풀이':'P', '편의':'I' };
const CODE = {};
(() => { const n = {}; Object.entries(CONFIG.items).forEach(([k,v]) => { n[v.cat] = (n[v.cat]||0) + 1; CODE[k] = PREFIX[v.cat] + String(n[v.cat]).padStart(2,'0'); }); })();
const cv_ = cat => `--c:${CATS[cat]};--f:${FILLS[cat]}`;

/* ========================================================= */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const WK = 'fest-wait-v1', CK = 'fest-cheers-v1', MK = 'fest-mine-v1', AK = 'fest-matching-applications-v1';
const mem = {};
const DB = (CONFIG.dbUrl || '').replace(/\/+$/, '');
const store = {
  async get(k, shared){
    // 1) 배포용: Firebase(공유 데이터) / 브라우저 저장소(개인 데이터)
    if (DB) {
      if (shared) {
        try { const r = await fetch(`${DB}/fest/${k}.json`, { cache:'no-store' }); if (!r.ok) throw 0; return await r.json(); }
        catch(e){ return mem[k+shared] ?? null; }
      }
      try { const v = localStorage.getItem('take1:' + k); return v ? JSON.parse(v) : (mem[k+shared] ?? null); } catch(e){ return mem[k+shared] ?? null; }
    }
    // 2) Claude 안에서 볼 때
    try { if (!window.storage) throw 0; const r = await window.storage.get(k, shared); return r ? JSON.parse(r.value) : null; }
    catch(e){ return mem[k+shared] ?? null; }
  },
  async set(k, v, shared){
    mem[k+shared] = v;
    if (DB) {
      if (shared) {
        try { const r = await fetch(`${DB}/fest/${k}.json`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify(v) }); if (!r.ok) throw 0; }
        catch(e){ toast('저장하지 못했어요. 다시 시도해 주세요.'); }
      } else { try { localStorage.setItem('take1:' + k, JSON.stringify(v)); } catch(e){} }
      return;
    }
    try { if (window.storage) { const r = await window.storage.set(k, JSON.stringify(v), shared); if(!r) toast('저장하지 못했어요. 다시 시도해 주세요.'); } }
    catch(e){ console.error(e); toast('저장하지 못했어요. 다시 시도해 주세요.'); }
  }
};
let toastT;
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toastT); toastT=setTimeout(()=>t.classList.remove('show'),2400); }

const LOC = {};
CONFIG.floors.forEach(f => f.rooms.forEach(r => (r.items||[]).forEach(i => { if(!LOC[i]) LOC[i] = { floor:f.id, room:r.id }; })));
const floorOf = id => CONFIG.floors.find(f => f.id === id);
const roomOf = (fid, rid) => floorOf(fid).rooms.find(r => r.id === rid);
const where = k => { const l = LOC[k]; return l ? `${floorOf(l.floor).label} ${roomOf(l.floor,l.room).name}` : '장소 미정'; };

let waits = {}, mine = {}, cheers = [], admin = false;
const state = { floor:'1F', room:null, sheet:null };

/* ---------- 기본 정보 ---------- */
function fillInfo(){
  $('#heroDate').textContent = `${CONFIG.dateText} · ${CONFIG.placeName}`;
  $('#infoTime').textContent = CONFIG.timeText;
  $('#infoPlace').textContent = CONFIG.place;
  $('#placeName').textContent = CONFIG.placeName;
  $('#placeAddr').textContent = CONFIG.placeAddr;
  $('#mapLink').href = CONFIG.mapUrl;
  const kst = d => new Date(d.getTime() + 9*3600e3).toISOString().slice(0,10);
  const diff = Math.round((Date.parse(kst(new Date(CONFIG.dateISO))) - Date.parse(kst(new Date()))) / 864e5);
  $('#dday').textContent = diff > 0 ? `D-${diff}` : diff === 0 ? 'D-DAY' : '상영 종료';
}
function setLink(sel, url, label){
  const a = $(sel);
  if (url) { a.href = url; a.textContent = label; a.removeAttribute('aria-disabled'); }
  else { a.removeAttribute('href'); a.textContent = '링크 준비 중이에요'; a.setAttribute('aria-disabled','true'); }
}

/* ---------- 프로그램 ---------- */
function renderProgram(){
  $('#program').innerHTML = `<ol class="tl">${CONFIG.timeline.map((t,i) => `
    <li><button class="tl-row" style="${cv_(t.cat)}" data-goto-floor="${t.floor}">
      <span class="tl-no">${i+1}</span>
      <span class="tl-body"><span class="tl-top"><b>${esc(t.title)}</b><span class="tl-time${t.time?'':' tbd'}">${esc(t.time || '시간 추후 공지')}</span></span>
      <span class="tl-sum">${esc(t.sum)}</span></span>
    </button></li>`).join('')}</ol>
    <a class="tl-more" href="#map">층별 부스 안내에서 자세히 보기 ›</a>`;
}

/* ---------- 지도 ---------- */
function renderFloors(){
  $('#floors').innerHTML = CONFIG.floors.map(f => `<button data-floor-tab="${f.id}" style="--fc:${FLOOR_COLORS[f.id]||'#C9DAF4'}" aria-pressed="${f.id===state.floor}">${f.id}</button>`).join('');
  $('#floorNote').textContent = `${floorOf(state.floor).label} · ${floorOf(state.floor).note}`;
}
function renderPlan(){
  const f = floorOf(state.floor);
  const booths = f.rooms.flatMap(r => (r.items || [])
    .filter(k => CONFIG.items[k] && CONFIG.items[k].cat === '부스')
    .map(k => ({ room: r, key: k, item: CONFIG.items[k] })));
  $('#plan').innerHTML = booths.length ? booths.map(({ room, key, item }) => {
    return `<button class="booth-item ${state.room === room.id ? 'sel' : ''}" style="${cv_(item.cat)}" data-room="${esc(room.id)}" data-floor="${f.id}" aria-label="${esc(item.name)}">
      <span class="booth-item-main"><strong>${esc(item.name)}</strong><small>${esc(room.name)}</small></span>
      <span class="booth-item-arrow" aria-hidden="true">›</span>
    </button>`;
  }).join('') : '<p class="booth-empty">이 층에는 등록된 부스가 없어요.</p>';
}
function setFloor(id){ state.floor = id; renderFloors(); renderPlan(); }

function renderSearch(){
  const q = $('#q').value.trim();
  if (!q) { $('#results').innerHTML = ''; return; }
  const hits = Object.entries(CONFIG.items)
    .filter(([k,v]) => v.cat === '부스' && (v.name + ' ' + (v.desc||'') + ' ' + where(k)).includes(q))
    .slice(0, 8);
  $('#results').innerHTML = hits.length
    ? hits.map(([k,v]) => `<li><button data-item="${k}"><span>${esc(v.name)}</span><span class="where">${esc(where(k))}</span></button></li>`).join('')
    : `<li><button disabled><span>‘${esc(q)}’에 맞는 부스가 없어요. 다른 이름으로 찾아보세요.</span></button></li>`;
}

/* ---------- 바텀시트 ---------- */
function openItem(k){
  const l = LOC[k];
  if (l) { setFloor(l.floor); state.room = l.room; renderPlan(); }
  openSheet(l ? { floor:l.floor, room:l.room, first:k } : { items:[k] });
}
function openSheet(s){
  state.sheet = s;
  renderSheet();
  $('#sheet').classList.add('open'); $('#sheetBack').classList.add('open');
  document.body.classList.add('locked');
  setTimeout(() => $('#sheetClose').focus(), 50);
}
function closeSheet(){
  $('#sheet').classList.remove('open'); $('#sheetBack').classList.remove('open');
  document.body.classList.remove('locked'); state.sheet = null;
}
function renderSheet(){
  const s = state.sheet; if (!s) return;
  if (s.apply) { renderApplication(s.apply); return; }
  let items, title, sub;
  if (s.room) {
    const r = roomOf(s.floor, s.room);
    items = [...(r.items||[])];
    if (s.first) items.sort((a,b) => (b===s.first) - (a===s.first));
    title = r.name; sub = floorOf(s.floor).label;
  } else { items = s.items; title = CONFIG.items[items[0]].name; sub = '장소 미정'; }
  $('#sheetTitle').textContent = title;
  $('#sheetSub').textContent = sub;
  $('#sheetBody').innerHTML = items.map(k => {
    const v = CONFIG.items[k];
    return `<article class="it" style="${cv_(v.cat)}">
      <span class="cat"><span class="code">${CODE[k]}</span>${v.cat}</span>
      <h3>${esc(v.name)}</h3>
      ${v.time ? `<p class="meta">${esc(v.time)}</p>` : ''}
      <p class="desc">${esc(v.desc||'')}</p>
      ${v.promo ? `<div class="promo"><strong>홍보</strong><p>${esc(v.promo)}</p></div>` : ''}
    </article>`;
  }).join('');
}
function renderApplication(k){
  const v = CONFIG.items[k];
  $('#sheetTitle').textContent = `${v.name} 신청`;
  $('#sheetSub').textContent = '안내 사항을 읽고 신청 정보를 입력해 주세요';
  $('#sheetBody').innerHTML = `
    <div class="apply-notice">
      <strong>신청 전 안내</strong>
      <div>• 사전 신청자만 참여할 수 있는 프로그램이에요.</div>
      <div>• 신청 후 행사 운영진의 확인 연락이 갈 수 있어요.</div>
      <div>• 입력한 정보는 행사 운영과 참여 안내를 위해서만 사용해요.</div>
    </div>
    <form class="apply-form" data-apply-form="${k}">
      <label>이름 <input name="name" maxlength="20" autocomplete="name" required placeholder="실명을 입력해 주세요"></label>
      <label>전화번호 <input name="phone" type="tel" maxlength="20" autocomplete="tel" required placeholder="010-0000-0000"></label>
      <label>소속 <input name="affiliation" maxlength="40" autocomplete="organization" required placeholder="학교·동아리·소속 없음 등"></label>
      <label>참여 프로그램
        <select name="program" required>
          <option value="solo" ${k==='solo'?'selected':''}>솔로지옥 컨셉 교류 게임</option>
          <option value="cooking" ${k==='cooking'?'selected':''}>커플메이킹 쿠킹 클래스</option>
        </select>
      </label>
      <label>전달 사항 <textarea name="note" maxlength="200" placeholder="알레르기, 문의 사항 등이 있으면 적어 주세요 (선택)"></textarea></label>
      <fieldset class="apply-consents">
        <legend>필수 동의</legend>
        <label class="apply-consent"><input name="portraitConsent" type="checkbox" required><span><b>사진·영상 촬영 및 초상권 이용 동의</b><small>행사 운영 기록, 활동 결과보고 및 기관 홍보를 위해 얼굴·음성·참여 모습이 촬영될 수 있습니다. 기관 공식 홈페이지 및 공식 SNS에 사진 게시물, 영상, 릴스 등으로 게시될 수 있으며, 홍보 목적에 필요한 범위에서 편집될 수 있습니다. 촬영일로부터 [실제 보유기간]까지 이용되며, 온라인 게시물은 제3자에 의해 공유될 수 있습니다.</small></span></label>
        <label class="apply-consent"><input name="privacyConsent" type="checkbox" required><span><b>개인정보 수집 및 이용 동의</b><small>프로그램 신청 접수, 참여자 확인, 참가자 관리 및 운영 안내를 위해 성명·연락처·연령 등 신청서 기재 정보를 수집합니다. 프로그램 종료일로부터 5년까지 보유 후 파기하며, 동의하지 않으면 신청 및 참여가 제한될 수 있습니다.</small></span></label>
      </fieldset>
      <button class="btn gold" type="submit">신청서 제출하기</button>
    </form>`;
}
let applicationSubmitting = false;
async function submitApplication(application){
  if (!GOOGLE_SCRIPT_URL.trim()) throw new Error('신청 전송 주소가 설정되지 않았어요.');
  await fetch(GOOGLE_SCRIPT_URL, {
    method:'POST',
    mode:'no-cors',
    headers:{'Content-Type':'text/plain;charset=utf-8'},
    body:JSON.stringify(application)
  });
  return '신청이 운영팀 Google Sheets로 전송됐어요.';
}

/* ---------- 방문자·참가자 신청 ---------- */
function setFormMessage(form, selector, message, visible){
  const el = form.querySelector(selector);
  if (!el) return;
  el.textContent = message;
  el.classList.toggle('show', visible);
}
function setFieldError(form, name, message){
  const error = form.querySelector(`[data-error-for="${name}"]`);
  if (error) error.textContent = message || '';
  const field = form.elements[name];
  if (field && typeof field.setAttribute === 'function' && field.type !== 'radio') field.setAttribute('aria-invalid', message ? 'true' : 'false');
}
function validateRegistrationForm(form){
  let valid = true;
  form.querySelectorAll('.field-error').forEach(error => { error.textContent = ''; });
  form.querySelectorAll('[aria-invalid="true"]').forEach(field => field.removeAttribute('aria-invalid'));
  form.querySelectorAll('[required]').forEach(field => {
    const empty = (field.type === 'checkbox' && !field.checked) ||
      (field.type === 'radio' && !form.querySelector(`[name="${field.name}"]:checked`)) ||
      (field.type !== 'checkbox' && field.type !== 'radio' && !field.value.trim());
    if (empty) {
      valid = false;
      setFieldError(form, field.type === 'checkbox' ? 'consents' : field.name, field.type === 'radio' ? '필수 항목을 선택해 주세요.' : field.type === 'checkbox' ? '필수 동의 항목을 모두 확인해 주세요.' : '필수 입력 항목이에요.');
    }
  });
  const age = form.elements.age;
  if (age && age.value && (Number(age.value) < 1 || Number(age.value) > 120)) { valid = false; setFieldError(form, 'age', '나이는 1~120 사이로 입력해 주세요.'); }
  const phone = form.elements.phone;
  if (phone && phone.value && !/^[0-9+\-()\s]{9,20}$/.test(phone.value)) { valid = false; setFieldError(form, 'phone', '전화번호 형식을 확인해 주세요.'); }
  const photo = form.elements.profilePhoto;
  if (photo && photo.files[0] && photo.files[0].size > 2 * 1024 * 1024) { valid = false; setFieldError(form, 'profilePhoto', '프로필 사진은 2MB 이하만 업로드할 수 있어요.'); }
  return valid;
}
function readPhoto(file){
  if (!file) return Promise.resolve('');
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('프로필 사진을 읽지 못했어요.'));
    reader.readAsDataURL(file);
  });
}
function setupRegistrationForms(){
  const visitorForm = document.querySelector('#visitorForm');
  if (visitorForm) {
    const affiliation = visitorForm.elements.affiliation;
    const extraFields = visitorForm.querySelector('#no-affiliation-fields');
    const conditionalFields = extraFields ? extraFields.querySelectorAll('select, input') : [];
    const updateConditionalFields = () => {
      const noAffiliation = affiliation.value === '소속 없음';
      if (extraFields) extraFields.hidden = !noAffiliation;
      conditionalFields.forEach(field => {
        field.required = noAffiliation;
        if (!noAffiliation) {
          field.value = '';
          field.removeAttribute('aria-invalid');
        }
      });
    };
    affiliation.addEventListener('change', updateConditionalFields);
    updateConditionalFields();
  }
  document.querySelectorAll('.registration-form').forEach(form => form.addEventListener('submit', async event => {
    event.preventDefault();
    setFormMessage(form, '[data-form-alert]', '', false);
    setFormMessage(form, '[data-form-success]', '', false);
    if (!validateRegistrationForm(form)) {
      setFormMessage(form, '[data-form-alert]', '필수 항목을 확인해 주세요.', true);
      form.querySelector('[aria-invalid="true"], .field-error:not(:empty)')?.scrollIntoView({ behavior: RM ? 'auto' : 'smooth', block: 'center' });
      return;
    }
    const button = form.querySelector('button[type="submit"]');
    const defaultButtonText = button.textContent;
    button.disabled = true;
    button.textContent = '전송 중...';
    try {
      const payload = {
        ...Object.fromEntries(new FormData(form).entries()),
        submittedAt: new Date().toISOString(),
        formType: form.id === 'visitorForm' ? 'visitor' : 'participant'
      };
      await submitApplication(payload);
      form.reset();
      setFormMessage(form, '[data-form-success]', '신청이 완료됐어요. 운영팀에서 확인 후 안내해 드릴게요.', true);
    } catch (error) {
      console.error(error);
      setFormMessage(form, '[data-form-alert]', error.message || '신청 전송에 실패했어요. 잠시 후 다시 시도해 주세요.', true);
    } finally {
      button.disabled = false;
      button.textContent = defaultButtonText;
    }
  }));
}
function waitBlock(k){
  const list = waits[k] || [], myId = mine[k];
  const pos = myId ? list.findIndex(x => x.id === myId) : -1;
  let h = `<div class="wait"><div class="wait-now"><span>지금 대기</span><b>${list.length}팀</b></div>`;
  if (pos >= 0) {
    h += `<p class="mine">내 순서는 <b>${pos+1}번째</b>예요. ${pos ? `앞에 ${pos}팀이 있어요.` : '곧 입장할 차례예요!'}</p>
          <button class="btn ghost small" data-cancel="${k}">대기 취소</button>`;
  } else {
    if (myId) h += `<p class="mine">입장 처리됐어요. 즐거운 관람 되세요!</p>`;
    h += `<form class="wait-form" data-join="${k}">
      <input name="n" maxlength="10" placeholder="이름 또는 닉네임" required aria-label="이름">
      <select name="p" aria-label="인원">${[1,2,3,4,5,6].map(n=>`<option value="${n}">${n}명</option>`).join('')}</select>
      <button class="btn">대기 등록</button></form>`;
  }
  if (admin) {
    h += `<ol class="adm"><p class="adm-title">운영진 · 대기 명단</p>${
      list.length ? list.map((x,i) => `<li><span>${i+1}. ${esc(x.n)} (${x.p}명)</span><button class="btn small gold" data-admit="${k}" data-id="${x.id}">입장 처리</button></li>`).join('')
                  : '<li>대기 중인 팀이 없어요.</li>'
    }</ol>`;
  }
  return h + '</div>';
}

/* ---------- 대기 ---------- */
async function loadWaits(){
  waits = (await store.get(WK, true)) || {};
  renderBoard(); renderPlan();
  if (!state.sheet?.apply) renderSheet();
}
async function mutateWaits(fn){
  waits = (await store.get(WK, true)) || {};
  fn(waits);
  await store.set(WK, waits, true);
  renderBoard(); renderPlan();
  if (!state.sheet?.apply) renderSheet();
}
function renderBoard(){
  const list = Object.entries(CONFIG.items).filter(([,v]) => v.wait);
  $('#board').innerHTML = list.map(([k,v]) => {
    const n = (waits[k]||[]).length;
    const st = n === 0 ? ['free','바로 입장'] : n <= 3 ? ['mid',`${n}팀 대기`] : ['busy',`${n}팀 대기`];
    return `<button class="wb-row" style="${cv_(v.cat)}" data-item="${k}"><span class="code">${CODE[k]}</span><span class="nm">${esc(v.name)}</span><span class="w">${esc(LOC[k] ? floorOf(LOC[k].floor).id : '미정')}</span><span class="st ${st[0]}">${st[1]}</span></button>`;
  }).join('');
  const d = new Date();
  $('#updated').textContent = `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')} 기준 · 15초마다 갱신`;
}

/* ---------- 축하 댓글 ---------- */
async function loadCheers(){ cheers = (await store.get(CK, true)) || []; renderCheers(); }
function renderCheers(){
  $('#cheerCount').textContent = cheers.length ? `${cheers.length}개의 축하가 도착했어요` : '';
  $('#cheerList').innerHTML = cheers.length ? cheers.map(c => {
    const d = new Date(c.t);
    return `<li><div class="who"><b>${esc(c.n)}</b><time>${d.getMonth()+1}/${d.getDate()} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}</time></div><p>${esc(c.m)}</p>${admin ? `<button class="btn ghost small del" data-delcheer="${c.id}">삭제</button>` : ''}</li>`;
  }).join('') : `<li class="empty-msg">첫 번째 축하를 남겨 주세요.</li>`;
}

/* ---------- 이벤트 ---------- */
document.addEventListener('click', e => {
  const done = e.target.closest('[data-close-sheet]'); if (done) { closeSheet(); return; }
  const it = e.target.closest('[data-item]'); if (it) { openItem(it.dataset.item); $('#q').value=''; renderSearch(); return; }
  const ap = e.target.closest('[data-apply]'); if (ap) { openApplication(ap.dataset.apply); return; }
  const rm = e.target.closest('[data-room]'); if (rm) { state.room = rm.dataset.room; renderPlan(); openSheet({ floor:rm.dataset.floor, room:rm.dataset.room }); return; }
  const gf = e.target.closest('[data-goto-floor]'); if (gf) { state.room = null; setFloor(gf.dataset.gotoFloor); $('#map').scrollIntoView({ behavior: RM ? 'auto' : 'smooth' }); return; }
  const ft = e.target.closest('[data-floor-tab]'); if (ft) { state.room = null; setFloor(ft.dataset.floorTab); return; }
  const cn = e.target.closest('[data-cancel]'); if (cn) {
    const k = cn.dataset.cancel, id = mine[k];
    mutateWaits(w => { w[k] = (w[k]||[]).filter(x => x.id !== id); }).then(() => { delete mine[k]; store.set(MK, mine, false); renderSheet(); toast('대기를 취소했어요'); });
    return;
  }
  const ad = e.target.closest('[data-admit]'); if (ad) {
    mutateWaits(w => { w[ad.dataset.admit] = (w[ad.dataset.admit]||[]).filter(x => x.id !== ad.dataset.id); }).then(() => toast('입장 처리했어요'));
    return;
  }
  const dc = e.target.closest('[data-delcheer]'); if (dc) {
    (async () => { cheers = (await store.get(CK,true)) || []; cheers = cheers.filter(c => c.id !== dc.dataset.delcheer); await store.set(CK, cheers, true); renderCheers(); toast('댓글을 삭제했어요'); })();
  }
});
function openApplication(k){
  state.sheet = { apply:k };
  renderSheet();
  $('#sheet').classList.add('open'); $('#sheetBack').classList.add('open');
  document.body.classList.add('locked');
  setTimeout(() => { const input = $('#sheetBody input'); if (input) input.focus(); }, 50);
}
document.addEventListener('submit', async e => {
  const f = e.target;
  if (f.dataset.applyForm) {
    e.preventDefault();
    if (applicationSubmitting) return;
    applicationSubmitting = true;
    const submitButton = f.querySelector('button[type="submit"]');
    if (submitButton) { submitButton.disabled = true; submitButton.textContent = '전송 중...'; }
    const data = new FormData(f);
    const application = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      name: String(data.get('name') || '').trim(),
      phone: String(data.get('phone') || '').trim(),
      affiliation: String(data.get('affiliation') || '').trim(),
      program: String(data.get('program') || ''),
      programName: CONFIG.items[String(data.get('program'))]?.name || String(data.get('program')),
      note: String(data.get('note') || '').trim(),
      portraitConsent: data.get('portraitConsent') === 'on',
      privacyConsent: data.get('privacyConsent') === 'on',
      t: Date.now()
    };
    if (!application.name || !application.phone || !application.affiliation || !data.get('portraitConsent') || !data.get('privacyConsent')) {
      applicationSubmitting = false;
      if (submitButton) { submitButton.disabled = false; submitButton.textContent = '신청서 제출하기'; }
      toast('필수 동의 항목을 모두 확인해 주세요');
      return;
    }
    if (!/^[0-9０-９+()\-\s]{8,20}$/.test(application.phone)) {
      applicationSubmitting = false;
      if (submitButton) { submitButton.disabled = false; submitButton.textContent = '신청서 제출하기'; }
      toast('전화번호 형식을 확인해 주세요');
      return;
    }
    try {
      const resultMessage = await submitApplication(application);
      $('#sheetBody').innerHTML = `<div class="apply-done"><strong>신청이 완료됐어요</strong><p>입력한 연락처로 행사 안내가 갈 수 있어요.<br>참여해 주셔서 감사합니다.</p><button class="btn ghost small" type="button" data-close-sheet>닫기</button></div>`;
      toast(resultMessage);
    } catch (error) {
      applicationSubmitting = false;
      if (submitButton) { submitButton.disabled = false; submitButton.textContent = '신청서 제출하기'; }
      toast('Google Sheets 전송에 실패했어요. 잠시 후 다시 시도해 주세요.');
      console.error(error);
    }
    return;
  }
  if (f.dataset.join) {
    e.preventDefault();
    const k = f.dataset.join, n = f.n.value.trim(), p = +f.p.value;
    if (!n) return;
    const entry = { id: Date.now().toString(36) + Math.random().toString(36).slice(2,6), n, p, t: Date.now() };
    await mutateWaits(w => { w[k] = (w[k]||[]).concat(entry); });
    mine[k] = entry.id; await store.set(MK, mine, false); renderSheet();
    toast('대기 등록했어요');
  }
  if (f.id === 'cheerForm') {
    e.preventDefault();
    const n = f.n.value.trim(), m = f.m.value.trim();
    if (!n || !m) return;
    cheers = (await store.get(CK, true)) || [];
    cheers.unshift({ id: Date.now().toString(36), n, m, t: Date.now() });
    cheers = cheers.slice(0, 300);
    await store.set(CK, cheers, true);
    f.reset(); renderCheers(); toast('축하를 남겼어요');
    for (let i=0;i<10;i++) setTimeout(()=>pop(), i*70);
  }
});
$('#q').addEventListener('input', renderSearch);
$('#sheetClose').addEventListener('click', closeSheet);
$('#sheetBack').addEventListener('click', closeSheet);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && state.sheet) closeSheet(); });
/* ---------- 음악 ----------
   파일 안에 넣은 음원은 Web Audio로 재생해요.
   (미리보기·메신저 인앱 브라우저처럼 <audio>가 막히는 곳에서도 소리가 나도록)
   CONFIG.bgmSrc에 mp3 주소를 넣으면 <audio>로 재생해요. */
const bgm = $('#bgm');
const useWA = !CONFIG.bgmSrc && !!document.getElementById('bgmData');
let actx = null, gain = null, abuf = null, asrc = null, decoding = null, musicOn = false, userPaused = false;
function setMusic(on){
  musicOn = on;
  $('#musicBtn').classList.toggle('on', on);
  $('#musicBtn').setAttribute('aria-pressed', on);
  $('#musicBtn').setAttribute('aria-label', on ? '배경음악 멈추기' : '배경음악 재생');
}
function embeddedBytes(){
  const bin = atob(document.getElementById('bgmData').textContent.trim());
  const buf = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
  return buf.buffer;
}
function ensureCtx(){
  if (actx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  actx = new AC();
  gain = actx.createGain(); gain.gain.value = 0; gain.connect(actx.destination);
  decoding = new Promise((res, rej) => actx.decodeAudioData(embeddedBytes(), b => { abuf = b; res(b); }, rej));
}
// 반드시 터치/클릭 이벤트 안에서 "동기적으로" 불려야 잠금이 풀려요
function unlockAndPlay(){
  if (useWA) {
    ensureCtx();
    try { const o = actx.createBufferSource(); o.buffer = actx.createBuffer(1, 1, 22050); o.connect(actx.destination); o.start(0); } catch(e){}
    const resumed = actx.resume();
    return Promise.all([resumed, decoding]).then(() => {
      if (actx.state !== 'running') return false;
      if (!asrc) { asrc = actx.createBufferSource(); asrc.buffer = abuf; asrc.loop = true; asrc.connect(gain); asrc.start(0); }
      gain.gain.cancelScheduledValues(actx.currentTime);
      gain.gain.setTargetAtTime(.6, actx.currentTime, .5);
      setMusic(true); return true;
    }).catch(() => false);
  }
  if (!CONFIG.bgmSrc) return Promise.resolve(false);
  if (!bgm.src) bgm.src = CONFIG.bgmSrc;
  bgm.volume = .6;
  return bgm.play().then(() => { setMusic(true); return true; }).catch(() => false);
}
function pauseMusic(){
  if (useWA && actx) actx.suspend(); else bgm.pause();
  setMusic(false);
}
$('#musicBtn').addEventListener('click', () => {
  if (musicOn) { userPaused = true; pauseMusic(); }
  else { userPaused = false; unlockAndPlay().then(ok => { if (!ok) toast('소리를 켤 수 없어요. 휴대폰 무음 모드를 확인해 주세요'); }); }
});
// 자동 재생: 열자마자 시도하고, 막히면 화면을 처음 터치하는 순간 재생
function autoStart(){
  const evs = ['touchend','pointerup','click','keydown'];
  const off = () => evs.forEach(ev => removeEventListener(ev, kick, true));
  function kick(e){
    if (e.target.closest && e.target.closest('#musicBtn')) return;
    if (userPaused || musicOn) return off();
    unlockAndPlay().then(ok => { if (ok) off(); });
  }
  evs.forEach(ev => addEventListener(ev, kick, { capture:true }));
  if (useWA) { ensureCtx(); if (actx.state === 'running') unlockAndPlay().then(ok => { if (ok) off(); }); }
  else unlockAndPlay().then(ok => { if (ok) off(); });
}

/* ---------- 입장 ---------- */
$('#enterBtn').addEventListener('click', () => {
  if (!musicOn && !userPaused) unlockAndPlay();
  $('#tix').classList.add('torn');
  setTimeout(() => {
    $('#gate').classList.add('gone');
    document.body.classList.remove('locked');
    burst();
  }, RM ? 0 : 750);
});

/* ---------- 별빛 & 플래시 ---------- */
const cv = $('#sky'), cx = cv.getContext('2d');
let stars = [], W, H, dpr;
function sizeSky(){
  dpr = Math.min(devicePixelRatio || 1, 2);
  W = innerWidth; H = innerHeight;
  cv.width = W*dpr; cv.height = H*dpr; cx.setTransform(dpr,0,0,dpr,0,0);
  stars = Array.from({ length: Math.floor(W*H/2600) }, () => ({ x:Math.random()*W, y:Math.random()*H, r:Math.random()*1.1+.25, p:Math.random()*6.28, s:.4+Math.random()*1.4 }));
  if (RM) drawSky(0);
}
function drawSky(t){
  cx.clearRect(0,0,W,H);
  for (const s of stars) {
    const a = .25 + .75*(.5 + .5*Math.sin(t/1000*s.s + s.p));
    cx.globalAlpha = a; cx.fillStyle = '#F3F1FF';
    cx.beginPath(); cx.arc(s.x, s.y, s.r, 0, 6.283); cx.fill();
  }
  cx.globalAlpha = 1;
  if (!RM) requestAnimationFrame(drawSky);
}
function pop(){
  if (RM) return;
  const c = $('#crowd'), f = document.createElement('i');
  f.className = 'flash';
  const side = Math.random() < .5;
  f.style.left = (side ? Math.random()*30 : 70 + Math.random()*28) + '%';
  f.style.bottom = (8 + Math.random()*45) + '%';
  c.appendChild(f);
  setTimeout(() => f.remove(), 800);
}
let ambient = false;
function startAmbient(){
  if (RM || ambient) return; ambient = true;
  (function loop(){ if (!document.hidden && scrollY < innerHeight) { pop(); if (Math.random()<.4) pop(); } setTimeout(loop, 380 + Math.random()*900); })();
}
function burst(){
  if (RM) return;
  for (let i=0;i<34;i++) setTimeout(pop, i*45 + Math.random()*120);
  startAmbient();
}
addEventListener('resize', sizeSky);
// 티켓 제목이 칸을 넘지 않도록 글자 크기 맞추기
function fitTicket(){
  const t = document.querySelector('.front .t2'); if (!t) return;
  let fs = 60; t.style.fontSize = fs + 'px';
  while (t.scrollWidth > t.clientWidth && fs > 30) { fs -= 2; t.style.fontSize = fs + 'px'; }
}
fitTicket(); if (document.fonts) document.fonts.ready.then(fitTicket);
// 상영 정보 슬레이트: 화면에 들어오면 "탁"
(() => {
  const sl = $('#infoSlate');
  if (RM || !('IntersectionObserver' in window)) { sl.classList.add('clapped'); return; }
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { setTimeout(() => sl.classList.add('clapped'), 250); io.disconnect(); } }), { threshold:.6 });
  io.observe(sl);
})();

/* ---------- 시작 ---------- */
(async function init(){
  fillInfo(); renderProgram(); renderFloors(); renderPlan(); renderCheers(); setupRegistrationForms();
  sizeSky(); if (!RM) requestAnimationFrame(drawSky);
  startAmbient();
  autoStart();
  mine = (await store.get(MK, false)) || {};
  await loadCheers();
})();