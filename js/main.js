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
  applicationsEndpoint: 'https://script.google.com/macros/s/AKfycbx88T5j2f7Jt-F4SZxOIh3Xqy937ocj4DccC2vS_im3ND2EjWDSknFxBv5hoX-im80Bdg/exec',
  // 운영진 모드 비밀번호 (화면 코드에 그대로 보이니 간단한 잠금 용도로만 쓰세요)
  adminPin: '1121',
  // 외부에 배포할 때: Firebase Realtime Database 주소를 넣으면 대기 등록·댓글이 모두에게 공유돼요
  // 예) 'https://take1-fest-default-rtdb.asia-southeast1.firebasedatabase.app'
  dbUrl: 'https://take1-fev-default-rtdb.asia-southeast1.firebasedatabase.app',

  // 프로그램 순서: 시간이 정해지면 time에 '10:00–12:00'처럼 적어 주세요
  timeline: [
    { cat:'강연', title:'학술분과 강연', time:'', floor:'5F', sum:'학술분과에서 준비한 강연' },
    { cat:'공연', title:'예술분과 공연', time:'', floor:'B1', sum:'예술분과의 무대 공연' },
    { cat:'부스', title:'봉사분과 부스', time:'', floor:'1F', sum:'봉사분과에서 운영하는 체험 부스' },
    { cat:'교류팅', title:'교류팅', time:'', floor:'4F', sum:'동아리 친구들과 함께하는 교류의 시간' }
  ],
  items: {
    mission:   { name:'미션임파서블', cat:'부스', wait:true, desc:'제한 시간 안에 센터 곳곳의 미션을 해결하는 첩보 작전 부스예요.', promo:'요원 등록 후 미션 카드를 받아 가세요.' },
    escape:    { name:'방탈출', cat:'부스', wait:true, desc:'3층 전체를 쓰는 방탈출 부스예요. 팀 단위로 입장해요.', promo:'2~4명이 한 팀일 때 가장 재밌어요.' },
    food:      { name:'음식 부스', cat:'부스', wait:true, desc:'축제 메뉴를 준비하고 있어요.', promo:'' },
    treasure:  { name:'보물찾기', cat:'부스', wait:false, desc:'센터 전층에 숨겨진 보물을 찾는 활동이에요. 이곳에서 출발해요.', promo:'' },
    booth5:    { name:'부스 5', cat:'부스', wait:true, desc:'참여 동아리와 내용을 정하는 중이에요.', promo:'' },
    booth6:    { name:'부스 6', cat:'부스', wait:true, desc:'참여 동아리와 내용을 정하는 중이에요.', promo:'' },
    booth7:    { name:'부스 7', cat:'부스', wait:true, desc:'참여 동아리와 내용을 정하는 중이에요.', promo:'' },
    booth8:    { name:'부스 8', cat:'부스', wait:true, desc:'참여 동아리와 내용을 정하는 중이에요.', promo:'' },
    booth9:    { name:'부스 9', cat:'부스', wait:true, desc:'참여 동아리와 내용을 정하는 중이에요.', promo:'' },
    capoeira:  { name:'카포에라 무대', cat:'공연', time:'시간 확정 전', desc:'무술과 음악이 어우러진 카포에라 공연이에요.' },
    kpop:      { name:'케이팝 댄스 무대', cat:'공연', time:'시간 확정 전', desc:'댄스 동아리의 케이팝 커버 무대예요.' },
    band:      { name:'밴드 무대', cat:'공연', time:'시간 확정 전', desc:'밴드 동아리의 라이브 공연이에요.' },
    lecture:   { name:'경제 학회 강연', cat:'강연', time:'시간 확정 전', desc:'경제 학회가 준비한 강연이에요.' },
    solo:      { name:'솔로지옥 컨셉 교류 게임', cat:'교류팅', presign:true, desc:'처음 만나는 친구들과 함께하는 교류 게임이에요. 사전 신청자만 참여해요.' },
    cooking:   { name:'커플메이킹 쿠킹 클래스', cat:'교류팅', presign:true, desc:'둘씩 짝을 지어 함께 요리하는 클래스예요. 사전 신청자만 참여해요.' },
    party:     { name:'뒷풀이', cat:'뒷풀이', time:'축제 종료 후', desc:'축제를 마무리하며 함께 모이는 시간이에요.' },
    info:      { name:'안내 데스크', cat:'편의', desc:'지도, 분실물, 문의는 이곳에서 도와드려요.' },
    photo:     { name:'레드카펫 포토존', cat:'편의', desc:'트로피를 들고 레드카펫 위에서 사진을 남겨 보세요.' },
    f4Office: { name:'사무실', cat:'부스', wait:true, desc:'4층 사무실에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f4Dasoni: { name:'다소니', cat:'부스', wait:true, desc:'4층 다소니에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f4Dorandoran: { name:'도란도란', cat:'부스', wait:true, desc:'4층 도란도란에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f4Neoulgaji: { name:'너울가지', cat:'부스', wait:true, desc:'4층 너울가지에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f4Daon: { name:'다온', cat:'부스', wait:true, desc:'4층 다온에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    fB1Raon: { name: '라온', cat:'부스', wait: true, desc: 'B1층 라온에서 운영되는 부스예요.', promo: '부스 소개를 준비 중이에요.' },
    f5Bona: { name:'보나', cat:'부스', wait:true, desc:'5층 보나에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f5Yangji: { name:'양지', cat:'부스', wait:true, desc:'5층 양지에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f5Onnuri: { name:'온누리', cat:'부스', wait:true, desc:'5층 온누리에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f5Hanul: { name:'한울', cat:'부스', wait:true, desc:'5층 한울에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f5Dasom: { name:'다솜실', cat:'부스', wait:true, desc:'5층 다솜실에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f5Garam: { name:'가람', cat:'부스', wait:true, desc:'5층 가람에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f5Maru: { name:'마루', cat:'부스', wait:true, desc:'5층 마루에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' },
    f5Yeoul: { name:'여울', cat:'부스', wait:true, desc:'5층 여울에서 운영되는 부스예요.', promo:'부스 소개를 준비 중이에요.' }
  },

  // 지도 수정 안내:
  // - c:[왼쪽 열, 오른쪽 열], r:[위쪽 행, 아래쪽 행]이며 끝 숫자는 포함하지 않아요.
  // - 예: c:[5,9], r:[0,4] = 5열부터 8열, 0행부터 3행을 차지하는 공간.
  // - cols/rows는 전체 격자 크기예요. B1·1F·4F·5F는 현재 20열×14행입니다.
  // - type:'booth'는 클릭 가능한 부스, type:'facility'는 선으로만 표시되는 구조물입니다.
  // - type:'amenity'는 초록색 편의시설, type:'show'는 분홍색 공연 공간입니다.
  // - type:'blocked'는 사용할 수 없는 공간이며 X 하나로 표시됩니다.
  // - v:true를 추가하면 이름을 세로 방향으로 표시합니다.
  floors: [
    // ===== B1층 지도 =====
    // spots: 실제 지도에 보이는 영역. rooms: 부스 클릭 시 열 상세 정보와 연결.
    { id:'B1', label:'지하 1층', note:'라온·움과 화장실, 엘리베이터, 계단 위치를 확인하세요.', layout:'grid-map', cols:20, rows:14, spots:[
      { type:'booth', name:'청소년공감센터 움', c:[9,20], r:[0,14], room:'um' },
      { type:'booth', name:'라온', c:[1,9], r:[10,14], room:'raon' },
      { type:'facility', name:'화장실', c:[0,3], r:[4,7], v:1 },
      { type:'facility', name:'엘베', c:[4,6], r:[4,7], v:1 },
      { type:'facility', name:'계단', c:[6,9], r:[4,7], v:1 },
      { type:'blocked', c:[0,9], r:[0,4] } ],
      rooms:[
      { id:'um', name:'청소년공감센터 움', area:'1/10/15/21', items:['capoeira','kpop','band'] },
      { id:'raon', name:'라온', area: '11/2/15/10', items: ['fB1Raon'] } ]
    },
    // ===== 1층 지도 =====
    { id:'1F', label:'1층', note:'도서관과 카페를 중심으로 화장실·엘리베이터·계단 위치를 확인하세요.', layout:'grid-map', cols:20, rows:14, spots:[
      // 첨부한 단순화 스케치 기준: 상단 큰 도서관, 중앙 복도, 하단 카페
      { type:'amenity', name:'도서관', c:[8,20], r:[0,6] },
      { type:'facility', name:'화장실', c:[0,4], r:[3,6], v:1 },
      { type:'facility', name:'엘베', c:[4,6], r:[3,6], v:1 },
      { type:'facility', name:'계단', c:[6,8], r:[3,6], v:1 },
      { type:'facility', name:'후문', c:[0,2], r:[7,9], v:1 },
      { type:'facility', name:'정문', c:[18,20], r:[6,8], v:1 },
      { type:'facility', name:'계단', c:[0,2], r:[9,14], v:1 },
      { type:'amenity', name:'카페', c:[2,20], r:[8,14] } ], rooms:[
      { id:'desk', name:'로비', area:'1/1/2/2', items:['info'] },
      { id:'carpet', name:'로비 중앙', area:'1/2/2/4', items:['photo'] },
      { id:'hall', name:'메인 홀', area:'2/1/4/3', items:['food','party'] },
      { id:'r1-1', name:'동아리실 1-1', area:'1/4/2/5', items:['treasure'] },
      { id:'r1-2', name:'동아리실 1-2', area:'2/3/3/5', items:['booth5'] },
      { id:'r1-3', name:'동아리실 1-3', area:'3/3/4/5', items:['booth6'] } ]},
    // ===== 3층 지도 =====
    { id:'3F', label:'3층', note:'방탈출 부스가 층 대부분을 사용해요.', rooms:[
      { id:'esc', name:'방탈출 구역', area:'1/1/3/4', items:['escape'] },
      { id:'r3-1', name:'동아리실 3-1', area:'1/4/3/5', items:['booth9'] },
      { id:'c3', name:'계단·화장실', area:'3/1/4/5' } ]},
    // ===== 4층 지도 =====
    { id:'4F', label:'4층', note:'입주 공간마다 부스가 들어가요.', layout:'grid-map', cols:20, rows:14, spots:[
      // 부스 공간: 노란색 카드이며 클릭할 수 있습니다.
      { type:'facility', name:'사무실', c:[9,20], r:[0,7], room:'office' },
      { type:'booth', name:'다소니', c:[3,6], r:[9,14], v:1, room:'dasoni' },
      { type:'booth', name:'도란도란', c:[6,10], r:[9,14],room:'dorandoran' },
      { type:'booth', name:'너울가지', c:[10,17], r:[9,14], room:'neoulgaji' },
      { type:'booth', name:'다온', c:[17,20], r:[9,14], room:'daon' },
      { type:'facility', name:'화장실', c:[0,4], r:[5,7] },
      { type:'facility', name:'엘리베이터', c:[5,7], r:[5,7], v:1 },
      { type:'facility', name:'계단', c:[7,9], r:[5,7], v:1 },
      { type:'facility', name:'계단', c:[0,3], r:[9,14] },

      // 좌측 상단의 의미 없는 공간을 하나의 X 구역으로 표시
      { type:'blocked', c:[0,9], r:[0,5] } ], rooms:[
      { id:'office', name:'사무실', area:'1/10/8/21', items:['f4Office'] },
      { id:'dasoni', name:'다소니', area:'10/6/15/8', items:['f4Dasoni'] },
      { id:'dorandoran', name:'도란 도란', area:'10/8/15/11', items:['f4Dorandoran'] },
      { id:'neoulgaji', name:'너울가지', area:'10/11/15/18', items:['f4Neoulgaji'] },
      { id:'daon', name:'다온', area:'10/18/15/21', items:['f4Daon'] } ]}
    ,
    // ===== 5층 지도 =====
    { id:'5F', label:'5층', note:'파란색으로 표시된 공간마다 부스가 들어가요.', layout:'grid-map', cols:20, rows:14, spots:[
      { type:'booth', name:'보나', c:[0,4], r:[0,4], room:'f5-bona' },
      { type:'booth', name:'양지', c:[9,12], r:[0,4], room:'f5-yangji' },
      { type:'booth', name:'온누리', c:[12,16], r:[0,4], room:'f5-onnuri' },
      { type:'booth', name:'한울', c:[16,20], r:[0,4], room:'f5-hanul' },
      { type:'facility', name:'화장실', c:[0,3], r:[4,7], v:1 },
      { type:'facility', name:'엘베', c:[3,6], r:[4,7], v:1 },
      { type:'facility', name:'계단', c:[6,9], r:[4,7], v:1 },
      { type:'facility', name:'계단', c:[0,2], r:[8,14], v:1 },
      { type:'booth', name:'다솜실', c:[2,9], r:[8,14], room:'f5-dasom' },
      { type:'booth', name:'가람', c:[9,12], r:[8,14], room:'f5-garam' },
      { type:'booth', name:'마루', c:[12,15], r:[8,14], room:'f5-maru' },
      { type:'booth', name:'여울', c:[15,20], r:[8,14], room:'f5-yeoul' } ], rooms:[
      { id:'f5-bona', name:'보나', area:'1/1/5/5', items:['f5Bona'] },
      { id:'f5-yangji', name:'양지', area:'1/10/5/13', items:['f5Yangji'] },
      { id:'f5-onnuri', name:'온누리', area:'1/13/5/17', items:['f5Onnuri'] },
      { id:'f5-hanul', name:'한울', area:'1/17/5/21', items:['f5Hanul'] },
      { id:'f5-dasom', name:'다솜실', area:'9/5/15/10', items:['f5Dasom'] },
      { id:'f5-garam', name:'가람', area:'9/10/15/13', items:['f5Garam'] },
      { id:'f5-maru', name:'마루', area:'9/13/15/16', items:['f5Maru'] },
      { id:'f5-yeoul', name:'여울', area:'9/17/15/21', items:['f5Yeoul'] } ]}
  ]
};
// 분류별 색: c = 진한 강조색, f = 카드 채움색
const CATS  = { '부스':'#E9C35A', '공연':'#E58AA6', '강연':'#7FB2E8', '교류팅':'#A996E6', '뒷풀이':'#E9A878', '편의':'#7FCBA9' };
const FILLS = { '부스':'#FAF0D2', '공연':'#F8DDE4', '강연':'#DDE9F5', '교류팅':'#E8E2F6', '뒷풀이':'#F6E1CC', '편의':'#D8EFE4' };
const FLOOR_COLORS = { B1:'#F6E3A6', '1F':'#F4CCD4', '3F':'#C9DAF4', '4F':'#F4D3B3', '5F':'#BFC8F7' };
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
  $('#legend').innerHTML = Object.keys(CATS).map(k => `<span><i style="${cv_(k)}"></i>${k}</span>`).join('');
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
    <a class="tl-more" href="#map">층별 안내도에서 자세히 보기 ›</a>`;
}

/* ---------- 지도 ---------- */
function renderFloors(){
  $('#floors').innerHTML = CONFIG.floors.map(f => `<button data-floor-tab="${f.id}" style="--fc:${FLOOR_COLORS[f.id]||'#C9DAF4'}" aria-pressed="${f.id===state.floor}">${f.id}</button>`).join('');
  $('#floorNote').textContent = `${floorOf(state.floor).label} · ${floorOf(state.floor).note}`;
}
function renderPlan(){
  const f = floorOf(state.floor);
  // grid-map 층은 위 floors[].spots 좌표를 화면 요소로 변환합니다.
  $('#plan').classList.add('flat');
  $('#plan').classList.toggle('f4-grid', f.layout === 'grid-map');
  $('#plan').classList.toggle('f5-grid', f.id === '5F');
  $('#plan').style.aspectRatio = f.layout === 'grid-map' ? '20/14' : '';
  if (f.layout === 'grid-map') {
    const rooms = Object.fromEntries(f.rooms.map(r => [r.id, r]));
    $('#plan').innerHTML = f.spots.map(s => {
      // s.c/s.r가 실제 위치, s.type이 표시 모양, s.v가 세로 글씨 여부입니다.
      const room = s.room ? rooms[s.room] : null;
      const item = room && room.items && room.items[0] ? CONFIG.items[room.items[0]] : null;
      const style = `grid-column:${s.c[0] + 1}/${s.c[1] + 1};grid-row:${s.r[0] + 1}/${s.r[1] + 1};`;
      if (s.type === 'blocked') return `<div class="f4-blocked" style="${style}" aria-hidden="true"></div>`;
      if (s.type === 'facility') {
        const isElevator = s.name === '엘리베이터' || s.name === '엘베';
        const facilityClass = isElevator ? ' f4-elevator' : '';
        const facilityLabel = isElevator ? '🛗' : esc(s.name);
        return `<div class="f4-card f4-facility${s.v ? ' vertical' : ''}${facilityClass}" style="${style}" aria-label="${esc(s.name)}">${s.name ? `<small>${facilityLabel}</small>` : ''}</div>`;
      }
      if (s.type === 'amenity' || s.type === 'show') return `<div class="f4-card f4-${s.type}${s.v ? ' vertical' : ''}" style="${style}"><small>${esc(s.name)}</small></div>`;
      const categoryStyle = item ? cv_(item.cat) : cv_('부스');
      const selected = state.room === s.room ? ' sel' : '';
      return `<button class="f4-card${s.v ? ' vertical' : ''}${selected}" style="${style}${categoryStyle}" data-room="${esc(s.room)}" data-floor="${f.id}" aria-label="${esc(s.name)}${item ? `: ${esc(item.name)}` : ''}">
        <b>${esc(s.name)}</b></button>`;
    }).join('');
    return;
  }
  $('#plan').innerHTML = f.rooms.map(r => {
    const its = r.items || [];
    if (!its.length) return `<div class="room empty" style="grid-area:${r.area}"><span class="rn">${esc(r.name)}</span></div>`;
    const c = cv_(CONFIG.items[its[0]].cat);
    const cnt = its.reduce((s,k) => s + (CONFIG.items[k].wait ? (waits[k]||[]).length : 0), 0);
    return `<button class="room ${state.room===r.id?'sel':''}" style="grid-area:${r.area};${c}" data-room="${r.id}" data-floor="${f.id}" aria-label="${esc(r.name)}: ${esc(its.map(k=>CONFIG.items[k].name).join(', '))}${cnt?`, 대기 ${cnt}팀`:''}">
      ${cnt ? `<span class="badge">대기 ${cnt}</span>` : ''}
      <span class="rn">${esc(r.name)}</span><span class="ri">${esc(its.map(k=>CONFIG.items[k].name).join(', '))}</span></button>`;
  }).join('');
}
function setFloor(id){ state.floor = id; renderFloors(); renderPlan(); }

function renderSearch(){
  const q = $('#q').value.trim();
  if (!q) { $('#results').innerHTML = ''; return; }
  const hits = Object.entries(CONFIG.items)
    .filter(([k,v]) => (v.name + ' ' + (v.desc||'') + ' ' + where(k)).includes(q))
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
      ${v.wait ? waitBlock(k) : ''}
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
      <label class="apply-consent"><input name="consent" type="checkbox" required><span>개인정보 수집·이용 안내를 확인했으며 신청에 동의합니다.</span></label>
      <button class="btn gold" type="submit">신청서 제출하기</button>
    </form>`;
}
let applicationSubmitting = false;
async function submitApplication(application){
  const endpoint = CONFIG.applicationsEndpoint.trim();
  if (!endpoint) throw new Error('신청 전송 주소가 설정되지 않았어요.');
  await fetch(endpoint, {
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
  if (field && typeof field.setAttribute === 'function' && field.type !== 'radio' && field.type !== 'checkbox') field.setAttribute('aria-invalid', message ? 'true' : 'false');
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
    button.disabled = true;
    button.textContent = '전송 중...';
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      await submitApplication({ formType: form.id === 'participantForm' ? 'participant' : 'visitor', submittedAt: new Date().toISOString(), ...data });
      form.reset();
      setFormMessage(form, '[data-form-success]', '신청이 완료됐어요. 운영팀에서 확인 후 안내해 드릴게요.', true);
    } catch (error) {
      console.error(error);
      setFormMessage(form, '[data-form-alert]', error.message || '신청 전송에 실패했어요. 잠시 후 다시 시도해 주세요.', true);
    } finally {
      button.disabled = false;
      button.textContent = '참관 신청하기';
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
      t: Date.now()
    };
    if (!application.name || !application.phone || !application.affiliation || !data.get('consent')) {
      applicationSubmitting = false;
      if (submitButton) { submitButton.disabled = false; submitButton.textContent = '신청서 제출하기'; }
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
$('#adminBtn').addEventListener('click', () => {
  if (admin) { admin = false; $('#adminBtn').textContent = '운영진 모드'; renderSheet(); renderCheers(); toast('운영진 모드를 껐어요'); return; }
  const pin = prompt('운영진 비밀번호를 입력해 주세요');
  if (pin === null) return;
  if (pin === CONFIG.adminPin) { admin = true; $('#adminBtn').textContent = '운영진 모드 끄기'; renderSheet(); renderCheers(); toast('운영진 모드: 부스를 누르면 명단이 보여요'); }
  else toast('비밀번호가 맞지 않아요');
});

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
  fillInfo(); renderProgram(); renderFloors(); renderPlan(); renderBoard(); renderCheers(); setupRegistrationForms();
  sizeSky(); if (!RM) requestAnimationFrame(drawSky);
  startAmbient();
  autoStart();
  mine = (await store.get(MK, false)) || {};
  await Promise.all([loadWaits(), loadCheers()]);
  setInterval(() => { if (!document.hidden) loadWaits(); }, 15000);
})();