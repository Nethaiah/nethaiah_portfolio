<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>NT — Portfolio</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {
  --bg:    #050505;
  --bg2:   #0c0c0c;
  --bg3:   #111;
  --bg4:   #161616;
  --border:#1a1a1a;
  --border2:#242424;
  --border3:#2e2e2e;
  --text:  #bfbfbf;
  --text-dim:#4a4a4a;
  --text-muted:#6a6a6a;
  --text-bright:#f2f2f2;
  --green: #22c55e;
  --green2:#16a34a;
  --green3:#0d2b1d;
  --green4:#0a1f14;
  --font:  'Space Grotesk', sans-serif;
  --mono:  'JetBrains Mono', monospace;
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  background:var(--bg);
  color:var(--text);
  font-family:var(--font);
  font-size:13.5px;
  line-height:1.7;
}

/* ── COLUMN ── */
.col{max-width:640px;margin:0 auto;padding:0 22px}

/* ══════════════════════════════
   DIAGONAL HATCH DIVIDER
   exactly like chanhdai.com
══════════════════════════════ */
.hatch {
  height: 18px;
  width: 100%;
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255,255,255,0.04) 0px,
    rgba(255,255,255,0.04) 1px,
    transparent 1px,
    transparent 6px
  );
  border-top:    1px solid var(--border);
  border-bottom: 1px solid var(--border);
  flex-shrink: 0;
}

/* ── NAV ── */
nav {
  position: sticky; top: 0; z-index: 100;
  border-bottom: 1px solid var(--border);
  background: rgba(5,5,5,0.97);
  backdrop-filter: blur(16px);
}
.nav-inner {
  max-width: 640px; margin: 0 auto; padding: 0 22px;
  display: flex; align-items: center; height: 48px; gap: 0;
}

/* ── PIXEL "NT" LOGO ── */
.pixel-logo {
  display: flex; align-items: center; justify-content: center;
  gap: 3px;
  padding: 0 16px 0 0;
  border-right: 1px solid var(--border);
  margin-right: 16px;
  text-decoration: none;
  cursor: pointer;
}
.pixel-grid {
  display: grid;
  grid-template-columns: repeat(5, 5px);
  grid-template-rows: repeat(5, 5px);
  gap: 1px;
}
.pixel-grid .p { width: 5px; height: 5px; background: var(--text-bright); }
.pixel-grid ._ { width: 5px; height: 5px; background: transparent; }

.nav-links { display: flex; gap: 0; }
.nav-links a {
  font-family: var(--mono); font-size: 10px;
  color: var(--text-dim); text-decoration: none;
  padding: 0 12px; height: 48px; line-height: 48px;
  border-left: 1px solid var(--border);
  letter-spacing: 0.07em;
  transition: color .15s, background .15s;
}
.nav-links a:hover { color: var(--green); background: var(--green4); }

.nav-right {
  margin-left: auto;
  display: flex; align-items: center; gap: 0;
}
.nav-status {
  display: flex; align-items: center; gap: 5px;
  padding: 0 14px; height: 48px;
  border-left: 1px solid var(--border);
  font-family: var(--mono); font-size: 9px; color: var(--green);
  letter-spacing: 0.07em;
}
.pulse {
  width: 6px; height: 6px; border-radius: 50%; background: var(--green);
  animation: pls 2s infinite;
}
@keyframes pls {
  0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.5)}
  60%{box-shadow:0 0 0 6px rgba(34,197,94,0)}
}

/* ── HERO ── */
.hero { padding: 56px 0 44px; }
.hero-top { display: flex; align-items: flex-start; gap: 22px; margin-bottom: 28px; }
.avatar-wrap { position: relative; flex-shrink: 0; }
.avatar {
  width: 76px; height: 76px;
  border: 1px solid var(--border2); background: var(--bg3);
  border-radius: 2px;
  display: flex; align-items: center; justify-content: center;
  font-size: 30px; overflow: hidden; position: relative;
}
.avatar::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(135deg, rgba(34,197,94,.08) 0%, transparent 60%);
}
/* corner brackets like chanhdai */
.av-tl { position:absolute; top:-1px; left:-1px; width:10px; height:10px; border-top:2px solid var(--green); border-left:2px solid var(--green); }
.av-br { position:absolute; bottom:-1px; right:-1px; width:10px; height:10px; border-bottom:2px solid var(--green); border-right:2px solid var(--green); }
.av-status {
  position: absolute; bottom: -4px; right: -4px;
  background: var(--bg); border: 1px solid rgba(34,197,94,.3);
  padding: 2px 5px;
  font-family: var(--mono); font-size: 8px; color: var(--green);
  letter-spacing: 0.1em;
  display: flex; align-items: center; gap: 3px;
}
.av-status::before { content:''; width:5px; height:5px; border-radius:50%; background:var(--green); animation:pls 2s infinite; flex-shrink:0; }

.hero-body {}
.hero-eyebrow {
  font-family: var(--mono); font-size: 10px;
  color: var(--text-dim); letter-spacing: 0.1em;
  margin-bottom: 6px;
  display: flex; align-items: center; gap: 8px;
}
.name {
  font-family: var(--font); font-size: 24px; font-weight: 700;
  color: var(--text-bright); letter-spacing: -0.02em;
  line-height: 1.1; margin-bottom: 4px;
}
.name-cursor {
  display: inline-block; width: 3px; height: 20px;
  background: var(--green); margin-left: 3px; vertical-align: -3px;
  animation: blink 1s step-end infinite;
}
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
.tagline { font-family: var(--mono); font-size: 11px; color: var(--text-dim); letter-spacing: 0.04em; }
.tagline .hl { color: var(--green); }

/* badges */
.badges { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }
.badge {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 10px; border: 1px solid var(--border2);
  background: var(--bg2);
  font-family: var(--mono); font-size: 10px; color: var(--text-muted);
  letter-spacing: 0.03em; transition: all .15s;
}
.badge.hi { border-color: rgba(34,197,94,.25); background: var(--green4); color: var(--green); }
.badge:hover { border-color: var(--green); color: var(--green); background: var(--green4); }

/* meta grid */
.meta-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 0;
  border: 1px solid var(--border); margin: 22px 0; background: var(--bg2);
}
.meta-row { display:flex; align-items:center; gap:10px; padding:8px 12px; border-bottom:1px solid var(--border); }
.meta-row:nth-child(odd)  { border-right: 1px solid var(--border); }
.meta-row:nth-last-child(-n+2) { border-bottom: none; }
.meta-k { font-family: var(--mono); font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-dim); min-width: 52px; }
.meta-v { font-size: 12px; color: var(--text); }
.meta-v a { color: var(--green); text-decoration: none; transition: color .15s; }
.meta-v a:hover { color: #4ade80; }
.meta-v.live { color: var(--green); display: flex; align-items: center; gap: 4px; }
.meta-v.live::before { content:''; width:5px; height:5px; background:var(--green); border-radius:50%; animation:pls 2s infinite; flex-shrink:0; }

/* social grid */
.social-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 6px; }
.soc {
  display: flex; align-items: center; gap: 7px;
  padding: 9px 11px; border: 1px solid var(--border);
  background: var(--bg2); color: var(--text-muted);
  font-family: var(--mono); font-size: 10px; text-decoration: none;
  letter-spacing: 0.04em; transition: all .15s; position: relative; overflow: hidden;
}
.soc::before {
  content: ''; position: absolute; inset: 0;
  background: var(--green4); transform: translateX(-100%); transition: transform .2s;
}
.soc:hover { border-color: var(--border3); color: var(--green); }
.soc:hover::before { transform: translateX(0); }
.soc-icon { font-size: 12px; position: relative; z-index: 1; flex-shrink: 0; }
.soc span { position: relative; z-index: 1; }
.soc-arrow { margin-left: auto; font-size: 9px; color: var(--text-dim); position: relative; z-index: 1; transition: color .15s; }
.soc:hover .soc-arrow { color: var(--green); }

/* ══ SECTION WRAPPER ══ */
.sec-wrap { display: flex; flex-direction: column; }
.sec-inner { padding: 44px 0; }
.sec-hd { display: flex; align-items: center; gap: 10px; margin-bottom: 26px; }
.sec-title {
  font-family: var(--mono); font-size: 10px; font-weight: 700;
  letter-spacing: 0.2em; text-transform: uppercase; color: var(--green);
}
.sec-line { flex: 1; height: 1px; background: linear-gradient(90deg, var(--border2) 0%, transparent 100%); }
.sec-count { font-family: var(--mono); font-size: 9px; color: var(--text-dim); border: 1px solid var(--border); padding: 1px 5px; }
.sec-more { font-family: var(--mono); font-size: 9px; color: var(--text-dim); text-decoration: none; letter-spacing: 0.06em; transition: color .15s; }
.sec-more:hover { color: var(--green); }
.sec-more::after { content: ' →'; }

/* ── ABOUT ── */
.about-cols { display: grid; grid-template-columns: 1fr 170px; gap: 24px; }
.about-text p { font-size: 13px; line-height: 1.85; color: var(--text); margin-bottom: 12px; }
.about-text p:last-child { margin-bottom: 0; }
.kw { color: var(--green); font-weight: 500; }

.access-card { border: 1px solid var(--border2); background: var(--bg3); overflow: hidden; position: relative; }
.access-card::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,var(--green),transparent); }
.ac-head { padding: 9px 11px; background: var(--bg4); border-bottom: 1px solid var(--border); display: flex; align-items: center; gap: 5px; }
.ac-prompt { font-family: var(--mono); font-size: 10px; color: var(--green); font-weight: 700; }
.ac-sub { font-family: var(--mono); font-size: 8px; color: var(--text-dim); letter-spacing: 0.1em; text-transform: uppercase; }
.ac-body { padding: 11px; }
.ac-label { font-family: var(--mono); font-size: 8px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-dim); margin-bottom: 1px; }
.ac-value { font-size: 12px; color: var(--text-bright); font-weight: 700; margin-bottom: 9px; }
.ac-qr { width: 30px; height: 30px; background: var(--border2); float: right; display: flex; align-items: center; justify-content: center; font-size: 13px; }
.ph100 { margin-top: 9px; border: 1px solid rgba(139,92,246,.3); background: rgba(139,92,246,.05); padding: 6px 8px; font-family: var(--mono); font-size: 9px; color: #a78bfa; display: flex; align-items: center; gap: 4px; }

/* ── HEATMAP ── */
.heatmap-box { border: 1px solid var(--border); background: var(--bg2); padding: 15px; position: relative; overflow: hidden; }
.heatmap-box::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,var(--green),transparent); }
.hm-scroll { display: flex; gap: 3px; overflow-x: auto; padding-bottom: 2px; }
.hm-col { display: flex; flex-direction: column; gap: 3px; }
.hm-c { width: 10px; height: 10px; flex-shrink: 0; background: var(--bg4); border: 1px solid var(--border); border-radius: 1px; }
.hm-c.l1 { background: #0a2215; border-color: #0f3320; }
.hm-c.l2 { background: #14532d; border-color: #166534; }
.hm-c.l3 { background: #15803d; border-color: #16a34a; }
.hm-c.l4 { background: #22c55e; border-color: #4ade80; }
.hm-foot { margin-top: 10px; display: flex; justify-content: space-between; align-items: center; font-family: var(--mono); font-size: 9px; color: var(--text-dim); }
.hm-leg { display: flex; align-items: center; gap: 3px; }
.hm-lc { width: 8px; height: 8px; border: 1px solid var(--border); border-radius: 1px; }

/* ── STACK ── */
/* chanhdai-style: icon chips in a flowing wrap */
.stack-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.s-chip {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 5px 11px; border: 1px solid var(--border2);
  background: var(--bg2); font-size: 12px; color: var(--text);
  font-family: var(--font); transition: all .15s; cursor: default;
}
.s-chip .dot { width: 5px; height: 5px; border-radius: 50%; background: var(--green2); flex-shrink: 0; transition: background .15s; }
.s-chip:hover { border-color: var(--border3); color: var(--green); background: var(--green4); }
.s-chip:hover .dot { background: var(--green); }

/* ── COMPONENTS grid (like chanhdai) ── */
.comp-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 0; border: 1px solid var(--border);
}
.comp-item {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 16px; border-bottom: 1px solid var(--border);
  cursor: pointer; transition: background .15s; text-decoration: none; color: inherit;
}
.comp-item:nth-child(3n-1) { border-left: 1px solid var(--border); border-right: 1px solid var(--border); }
.comp-item:nth-last-child(-n+3) { border-bottom: none; }
.comp-item:hover { background: var(--bg2); }
.comp-icon { font-size: 16px; flex-shrink: 0; }
.comp-name { font-size: 12px; color: var(--text-bright); font-weight: 500; }
.comp-all-btn {
  display: flex; justify-content: center; padding: 20px 0 4px;
}
.all-btn {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 20px; border: 1px solid var(--border2);
  background: var(--bg2); font-family: var(--font); font-size: 12px;
  color: var(--text); text-decoration: none; transition: all .15s;
}
.all-btn:hover { border-color: var(--green); color: var(--green); background: var(--green4); }

/* ── EXPERIENCE ── */
.exp-block { border: 1px solid var(--border); margin-bottom: 8px; overflow: hidden; position: relative; }
.exp-block::before { content:''; position:absolute; top:0; left:0; bottom:0; width:1px; background:linear-gradient(180deg,var(--green) 0%,transparent 100%); }
.exp-company { display:flex; align-items:center; gap:8px; padding:10px 14px; background:var(--bg2); border-bottom:1px solid var(--border); }
.exp-dot { width:7px; height:7px; border-radius:50%; background:var(--green); flex-shrink:0; box-shadow:0 0 6px rgba(34,197,94,.4); }
.exp-dot.old { background:var(--text-dim); box-shadow:none; }
.exp-co { font-size:12px; font-weight:600; color:var(--text-bright); letter-spacing:0.02em; }
.exp-live { margin-left:auto; font-family:var(--mono); font-size:8px; border:1px solid rgba(34,197,94,.3); padding:2px 6px; color:var(--green); background:var(--green4); letter-spacing:0.1em; }
.exp-role { padding:12px 14px; border-bottom:1px solid var(--border); }
.exp-role:last-child { border-bottom:none; }
.exp-role-top { display:flex; align-items:center; justify-content:space-between; margin-bottom:3px; }
.exp-rname { font-size:13px; font-weight:500; color:var(--text-bright); }
.exp-rtype { font-family:var(--mono); font-size:9px; color:var(--text-dim); border:1px solid var(--border); padding:1px 5px; }
.exp-dates { font-family:var(--mono); font-size:10px; color:var(--text-dim); margin-bottom:8px; }
.exp-dates .dur { color:var(--green); margin-left:5px; opacity:.7; }
.exp-bul { padding-left:16px; font-size:12.5px; color:var(--text); line-height:1.8; margin-bottom:8px; }
.exp-bul li::marker { color:var(--green); }
.exp-chips { display:flex; flex-wrap:wrap; gap:4px; }
.e-tag { font-family:var(--mono); font-size:9px; padding:2px 7px; border:1px solid var(--border); color:var(--text-dim); }

/* ── PROJECTS ── */
.proj-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.proj-card {
  border:1px solid var(--border); background:var(--bg2);
  padding:16px; text-decoration:none; display:block;
  position:relative; overflow:hidden; transition:border-color .2s;
}
.proj-card::after { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,var(--green),#4ade80); transform:scaleX(0); transform-origin:left; transition:transform .25s; }
.proj-card:hover { border-color:var(--border3); }
.proj-card:hover::after { transform:scaleX(1); }
.proj-name { font-size:13px; font-weight:700; color:var(--text-bright); margin-bottom:5px; }
.proj-desc { font-family:var(--mono); font-size:10px; color:var(--text-muted); line-height:1.55; margin-bottom:10px; }
.proj-url { font-family:var(--mono); font-size:9px; color:var(--green2); }
.proj-url::before { content:'↗ '; }
.proj-tags { display:flex; flex-wrap:wrap; gap:3px; margin-top:8px; }
.p-tag { font-family:var(--mono); font-size:9px; padding:2px 6px; border:1px solid var(--border); color:var(--text-dim); }
.proj-date { font-family:var(--mono); font-size:9px; color:var(--text-dim); margin-top:8px; padding-top:8px; border-top:1px solid var(--border); }

/* ── BLOG CARDS (like chanhdai) ── */
.blog-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.blog-card {
  border:1px solid var(--border); background:var(--bg2);
  overflow:hidden; text-decoration:none; display:block;
  transition:border-color .2s;
}
.blog-card:hover { border-color:var(--border3); }
.blog-thumb {
  height:110px; background:var(--bg3);
  display:flex; align-items:center; justify-content:center;
  font-size:32px; border-bottom:1px solid var(--border);
  overflow:hidden;
}
.blog-body { padding:12px; }
.blog-title { font-size:12.5px; font-weight:600; color:var(--text-bright); margin-bottom:3px; line-height:1.4; }
.blog-date { font-family:var(--mono); font-size:9px; color:var(--text-dim); }
.blog-dot { display:inline-block; width:5px; height:5px; border-radius:50%; background:var(--green); margin-left:4px; vertical-align:1px; }

/* ── CERTS ── */
.cert-list { border:1px solid var(--border); }
.cert-row { display:flex; align-items:center; justify-content:space-between; padding:11px 14px; border-bottom:1px solid var(--border); cursor:pointer; transition:background .15s; }
.cert-row:last-child { border-bottom:none; }
.cert-row:hover { background:var(--bg2); }
.cert-name { font-size:12.5px; color:var(--text-bright); font-weight:500; }
.cert-by { font-family:var(--mono); font-size:9px; color:var(--green2); margin-top:1px; }
.cert-right { display:flex; align-items:center; gap:10px; }
.cert-year { font-family:var(--mono); font-size:10px; color:var(--text-dim); }
.cert-arrow { font-size:10px; color:var(--text-dim); transition:color .15s; }
.cert-row:hover .cert-arrow { color:var(--green); }

/* ── AWARDS ── */
.awards-list { border:1px solid var(--border); }
.aw-row { display:flex; align-items:center; gap:12px; padding:11px 14px; border-bottom:1px solid var(--border); }
.aw-row:last-child { border-bottom:none; }
.aw-icon { color:var(--green); font-size:13px; flex-shrink:0; }
.aw-name { font-size:12.5px; font-weight:500; color:var(--text-bright); }
.aw-meta { font-family:var(--mono); font-size:9px; color:var(--text-dim); margin-top:1px; }
.aw-chip { margin-left:auto; font-family:var(--mono); font-size:9px; padding:2px 8px; border:1px solid var(--border2); color:var(--text-dim); white-space:nowrap; flex-shrink:0; }
.aw-chip.win { border-color:rgba(34,197,94,.3); color:var(--green); background:var(--green4); }

/* ── RECS ── */
.rec-list { display:flex; flex-direction:column; gap:8px; }
.rec-card { border:1px solid var(--border); padding:16px 18px; background:var(--bg2); position:relative; overflow:hidden; }
.rec-card::before { content:'"'; position:absolute; top:6px; left:12px; font-size:36px; color:rgba(34,197,94,.06); font-style:italic; line-height:1; }
.rec-card::after { content:''; position:absolute; top:0; left:0; bottom:0; width:2px; background:linear-gradient(180deg,var(--green) 0%,transparent 100%); }
.rec-quote { font-size:12.5px; color:var(--text); line-height:1.8; font-style:italic; padding-left:14px; margin-bottom:12px; }
.rec-div { height:1px; background:var(--border); margin-bottom:10px; }
.rec-name { font-size:12px; font-weight:600; color:var(--green); }
.rec-role { font-family:var(--mono); font-size:9px; color:var(--text-dim); margin-top:2px; }

/* ── GALLERY ── */
.gallery-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:6px; }
.gal-item { aspect-ratio:1; background:var(--bg3); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:20px; filter:grayscale(1) brightness(.4); transition:filter .3s, border-color .2s; cursor:pointer; }
.gal-item.wide { grid-column:span 2; }
.gal-item:hover { filter:grayscale(0) brightness(.85); border-color:var(--border3); }

/* ── MEMBERSHIPS ── */
.mem-list { border:1px solid var(--border); }
.mem-row { display:flex; align-items:center; gap:10px; padding:10px 13px; border-bottom:1px solid var(--border); text-decoration:none; color:inherit; transition:background .15s; }
.mem-row:last-child { border-bottom:none; }
.mem-row:hover { background:var(--bg2); }
.mem-dot { width:6px; height:6px; border-radius:50%; background:var(--text-dim); flex-shrink:0; }
.mem-name { font-size:12px; color:var(--text); flex:1; }
.mem-arrow { font-size:10px; color:var(--text-dim); transition:color .15s; }
.mem-row:hover .mem-arrow { color:var(--green); }

/* ── SPEAKING ── */
.speaking-box { border:1px solid var(--border); padding:16px; background:var(--bg2); }
.speaking-text { font-size:12.5px; color:var(--text); line-height:1.75; margin-bottom:12px; }
.sp-btns { display:flex; gap:6px; flex-wrap:wrap; }
.sp-btn { display:flex; align-items:center; gap:5px; padding:6px 11px; border:1px solid var(--border2); background:transparent; color:var(--text-dim); font-family:var(--mono); font-size:10px; text-decoration:none; letter-spacing:0.04em; transition:all .15s; }
.sp-btn:hover { border-color:var(--green); color:var(--green); background:var(--green4); }

/* ── CONTACT ── */
.contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:0; border:1px solid var(--border); }
.contact-cell { display:flex; align-items:center; gap:10px; padding:13px 15px; border-bottom:1px solid var(--border); text-decoration:none; transition:background .15s; position:relative; overflow:hidden; }
.contact-cell::before { content:''; position:absolute; left:0; top:0; bottom:0; width:0; background:var(--green4); transition:width .2s; }
.contact-cell:hover::before { width:100%; }
.contact-cell:nth-child(odd) { border-right:1px solid var(--border); }
.contact-cell:nth-last-child(-n+2) { border-bottom:none; }
.contact-icon { font-size:14px; color:var(--green); flex-shrink:0; position:relative; z-index:1; }
.contact-label { font-family:var(--mono); font-size:9px; letter-spacing:0.14em; text-transform:uppercase; color:var(--text-dim); position:relative; z-index:1; }
.contact-val { font-size:12px; color:var(--text-bright); margin-top:1px; position:relative; z-index:1; }
.contact-arrow { margin-left:auto; font-size:10px; color:var(--text-dim); position:relative; z-index:1; transition:color .15s; }
.contact-cell:hover .contact-arrow { color:var(--green); }

/* ══════════════════════════════
   FLUID GRADIENT "NETHAIAH" FOOTER
   vanilla JS recreation of the
   chanhdai FluidGradientText component
══════════════════════════════ */
.fluid-footer {
  position: relative;
  border-top: 1px solid var(--border);
  overflow: hidden;
  cursor: default;
  user-select: none;
}
.fluid-footer::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, var(--green), transparent);
}
.fluid-footer-inner {
  padding: 16px 22px 0;
  max-width: 640px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
}
.fluid-footer-meta {
  font-family: var(--mono); font-size: 9px;
  color: var(--text-dim); letter-spacing: 0.06em;
  padding-bottom: 20px;
  display: flex; gap: 0;
}
.fluid-footer-meta a { color: var(--text-dim); text-decoration: none; padding: 0 10px; border-left: 1px solid var(--border); transition: color .15s; }
.fluid-footer-meta a:first-child { padding-left: 0; border-left: none; }
.fluid-footer-meta a:hover { color: var(--green); }
.fluid-footer-copy { font-family: var(--mono); font-size: 9px; color: var(--text-dim); padding-bottom: 20px; }

/* SVG fluid name */
.fluid-name-wrap {
  position: relative;
  width: 100%; height: 120px;
  overflow: hidden;
}
.fluid-name-wrap::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
  background: rgba(255,255,255,0.06);
}
#fluid-svg {
  width: 100%; height: 100%;
  display: block;
}
</style>
</head>
<body>

<!-- ═══ NAV ═══ -->
<nav>
  <div class="nav-inner">

    <!-- PIXEL "NT" LOGO -->
    <a class="pixel-logo" href="#" title="NT — Your Name">
      <!-- N -->
      <div class="pixel-grid" id="logo-N"></div>
      <!-- T -->
      <div class="pixel-grid" id="logo-T" style="margin-left:4px"></div>
    </a>

    <div class="nav-links">
      <a href="#about">about</a>
      <a href="#stack">stack</a>
      <a href="#exp">exp</a>
      <a href="#projects">projects</a>
      <a href="#contact">contact</a>
    </div>

    <div class="nav-right">
      <div class="nav-status"><div class="pulse"></div>available</div>
    </div>
  </div>
</nav>

<!-- ═══ HERO ═══ -->
<div class="col">
<div class="hero" id="about">
  <div class="hero-top">
    <div class="avatar-wrap">
      <div class="avatar">👨‍💻</div>
      <div class="av-tl"></div>
      <div class="av-br"></div>
      <div class="av-status">LIVE</div>
    </div>
    <div class="hero-body">
      <div class="hero-eyebrow">
        <span id="lt7" style="font-family:var(--mono);font-size:10px;color:var(--text-dim)">--:--</span>
        <span style="color:var(--border3)">·</span>
        <span style="font-size:10px;color:var(--text-dim)">Metro Manila, PH</span>
      </div>
      <div class="name">Your Name<span class="name-cursor"></span></div>
      <div class="tagline"><span class="hl">AI</span> · Software Engineer · <span class="hl">Content Creator</span></div>
    </div>
  </div>

  <div class="badges">
    <span class="badge hi">🏆 DICT OpenGov Hackathon 2025 Champion</span>
    <span class="badge">⭐ PH100 — Bright Minds Under 30</span>
  </div>

  <div class="meta-grid">
    <div class="meta-row"><span class="meta-k">location</span><span class="meta-v">Metro Manila, PH</span></div>
    <div class="meta-row"><span class="meta-k">email</span><span class="meta-v"><a href="#">you@email.com</a></span></div>
    <div class="meta-row"><span class="meta-k">status</span><span class="meta-v live">open to work</span></div>
    <div class="meta-row"><span class="meta-k">pronouns</span><span class="meta-v">he/him</span></div>
    <div class="meta-row"><span class="meta-k">site</span><span class="meta-v"><a href="#">yoursite.dev</a></span></div>
    <div class="meta-row"><span class="meta-k">blog</span><span class="meta-v"><a href="#">blog.yoursite.dev</a></span></div>
  </div>

  <div class="social-grid">
    <a href="#" class="soc"><span class="soc-icon">𝕏</span><span>Twitter / X</span><span class="soc-arrow">↗</span></a>
    <a href="#" class="soc"><span class="soc-icon">⌥</span><span>GitHub</span><span class="soc-arrow">↗</span></a>
    <a href="#" class="soc"><span class="soc-icon">in</span><span>LinkedIn</span><span class="soc-arrow">↗</span></a>
    <a href="#" class="soc"><span class="soc-icon">◈</span><span>Discord</span><span class="soc-arrow">↗</span></a>
    <a href="#" class="soc"><span class="soc-icon">▶</span><span>YouTube</span><span class="soc-arrow">↗</span></a>
    <a href="#" class="soc"><span class="soc-icon">📰</span><span>daily.dev</span><span class="soc-arrow">↗</span></a>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ ABOUT ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">About</span><div class="sec-line"></div></div>
  <div class="about-cols">
    <div class="about-text">
      <p>I'm a <span class="kw">full-stack software engineer</span> specializing in JavaScript, Python, and PHP. I build modern web applications, mobile apps, and AI-powered products.</p>
      <p>I've helped <span class="kw">startups and MSMEs</span> grow through software, and built a community of over <span class="kw">200,000 developers</span> sharing knowledge and mentorship.</p>
      <p>Lately focused on <span class="kw">artificial intelligence</span> — developing AI-powered solutions and leveraging generative AI to optimize development workflows.</p>
    </div>
    <div>
      <div class="access-card">
        <div class="ac-head"><span class="ac-prompt">>_</span><span class="ac-sub">Devs One Hundred</span></div>
        <div class="ac-body">
          <div class="ac-label">Founding Member</div>
          <div class="ac-value">YOUR_NAME</div>
          <div class="ac-label">Role</div>
          <div style="font-size:11px;color:var(--text)">Developer</div>
          <div class="ac-qr">⬛</div>
        </div>
      </div>
      <div class="ph100">⭐ PH&gt;100 — Brightest Minds Under 30</div>
    </div>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ GITHUB HEATMAP ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">GitHub Contributions</span><div class="sec-line"></div></div>
  <div class="heatmap-box">
    <div class="hm-scroll" id="hm7"></div>
    <div class="hm-foot">
      <span id="hm7-count">-- contributions in 2025</span>
      <div class="hm-leg">
        Less
        <div class="hm-lc"></div>
        <div class="hm-lc" style="background:#0a2215;border-color:#0f3320"></div>
        <div class="hm-lc" style="background:#14532d;border-color:#166534"></div>
        <div class="hm-lc" style="background:#15803d;border-color:#16a34a"></div>
        <div class="hm-lc" style="background:#22c55e;border-color:#4ade80"></div>
        More
      </div>
    </div>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ STACK ═══ -->
<div class="col" id="stack">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Stack</span><div class="sec-line"></div></div>
  <div class="stack-chips">
    <span class="s-chip"><span class="dot"></span>TypeScript</span>
    <span class="s-chip"><span class="dot"></span>JavaScript</span>
    <span class="s-chip"><span class="dot"></span>Python</span>
    <span class="s-chip"><span class="dot"></span>PHP</span>
    <span class="s-chip"><span class="dot"></span>React</span>
    <span class="s-chip"><span class="dot"></span>Next.js</span>
    <span class="s-chip"><span class="dot"></span>Vue.js</span>
    <span class="s-chip"><span class="dot"></span>Tailwind CSS</span>
    <span class="s-chip"><span class="dot"></span>Node.js</span>
    <span class="s-chip"><span class="dot"></span>Laravel</span>
    <span class="s-chip"><span class="dot"></span>PostgreSQL</span>
    <span class="s-chip"><span class="dot"></span>MongoDB</span>
    <span class="s-chip"><span class="dot"></span>AWS</span>
    <span class="s-chip"><span class="dot"></span>Docker</span>
    <span class="s-chip"><span class="dot"></span>Kubernetes</span>
    <span class="s-chip"><span class="dot"></span>Claude</span>
    <span class="s-chip"><span class="dot"></span>ChatGPT</span>
    <span class="s-chip"><span class="dot"></span>LangChain</span>
    <span class="s-chip"><span class="dot"></span>Figma</span>
    <span class="s-chip"><span class="dot"></span>GitHub Actions</span>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ COMPONENTS (chanhdai-style 3-col grid) ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Projects</span><span class="sec-count">12</span><div class="sec-line"></div></div>
  <div class="comp-grid">
    <a href="#" class="comp-item"><span class="comp-icon">🧠</span><span class="comp-name">CodeCred</span></a>
    <a href="#" class="comp-item"><span class="comp-icon">📚</span><span class="comp-name">BASE404</span></a>
    <a href="#" class="comp-item"><span class="comp-icon">👗</span><span class="comp-name">DIIN.PH</span></a>
    <a href="#" class="comp-item"><span class="comp-icon">💪</span><span class="comp-name">DYNAMIS</span></a>
    <a href="#" class="comp-item"><span class="comp-icon">⚡</span><span class="comp-name">AI Dashboard</span></a>
    <a href="#" class="comp-item"><span class="comp-icon">🔐</span><span class="comp-name">Auth Module</span></a>
    <a href="#" class="comp-item"><span class="comp-icon">📊</span><span class="comp-name">Analytics Kit</span></a>
    <a href="#" class="comp-item"><span class="comp-icon">🌐</span><span class="comp-name">Web Scraper</span></a>
    <a href="#" class="comp-item"><span class="comp-icon">🤖</span><span class="comp-name">Bot Framework</span></a>
  </div>
  <div class="comp-all-btn"><a href="#" class="all-btn">All Projects →</a></div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ BLOG (chanhdai-style) ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Blog</span><span class="sec-count">12</span><div class="sec-line"></div></div>
  <div class="blog-grid">
    <a href="#" class="blog-card">
      <div class="blog-thumb">🤖</div>
      <div class="blog-body">
        <div class="blog-title">Building AI Agents with LangChain <span class="blog-dot"></span></div>
        <div class="blog-date">03.05.2026</div>
      </div>
    </a>
    <a href="#" class="blog-card">
      <div class="blog-thumb">⚡</div>
      <div class="blog-body">
        <div class="blog-title">Full-Stack Patterns in 2025 <span class="blog-dot"></span></div>
        <div class="blog-date">27.04.2026</div>
      </div>
    </a>
    <a href="#" class="blog-card">
      <div class="blog-thumb">🏆</div>
      <div class="blog-body">
        <div class="blog-title">Winning DICT OpenGov Hackathon 2025</div>
        <div class="blog-date">24.07.2025</div>
      </div>
    </a>
    <a href="#" class="blog-card">
      <div class="blog-thumb">🌏</div>
      <div class="blog-body">
        <div class="blog-title">Growing a Developer Community to 200K+</div>
        <div class="blog-date">15.06.2025</div>
      </div>
    </a>
  </div>
  <div class="comp-all-btn"><a href="#" class="all-btn">All Posts →</a></div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ EXPERIENCE ═══ -->
<div class="col" id="exp">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Experience</span><div class="sec-line"></div></div>

  <div class="exp-block">
    <div class="exp-company"><div class="exp-dot"></div><span class="exp-co">Standard Chartered</span><span class="exp-live">LIVE</span></div>
    <div class="exp-role">
      <div class="exp-role-top"><span class="exp-rname">AI Engineer</span><span class="exp-rtype">Full-time</span></div>
      <div class="exp-dates">01.2025 → ∞ <span class="dur">Current</span></div>
      <ul class="exp-bul"><li>Build AI-powered enterprise banking solutions</li><li>Lead GenAI and LLM workflow integration into production</li></ul>
      <div class="exp-chips"><span class="e-tag">Python</span><span class="e-tag">LangChain</span><span class="e-tag">AWS</span></div>
    </div>
    <div class="exp-role" style="border-bottom:none">
      <div class="exp-role-top"><span class="exp-rname">AI Ops Engineer</span><span class="exp-rtype">Full-time</span></div>
      <div class="exp-dates">01.2025 → ∞ <span class="dur">Current</span></div>
      <div class="exp-chips"><span class="e-tag">GenAI</span><span class="e-tag">MLOps</span></div>
    </div>
  </div>

  <div class="exp-block">
    <div class="exp-company"><div class="exp-dot old"></div><span class="exp-co">Core Technology, Cambridge</span></div>
    <div class="exp-role" style="border-bottom:none">
      <div class="exp-role-top"><span class="exp-rname">Senior Full-Stack Developer</span><span class="exp-rtype">Full-time</span></div>
      <div class="exp-dates">03.2023 – 12.2024 <span class="dur">1y 9m</span></div>
      <ul class="exp-bul"><li>Built scalable applications for 50K+ daily users</li><li>Architected microservices on AWS</li></ul>
      <div class="exp-chips"><span class="e-tag">React</span><span class="e-tag">Node.js</span><span class="e-tag">PostgreSQL</span></div>
    </div>
  </div>

  <div class="exp-block">
    <div class="exp-company"><div class="exp-dot old"></div><span class="exp-co">PocketDevs</span></div>
    <div class="exp-role" style="border-bottom:none">
      <div class="exp-role-top"><span class="exp-rname">Software Engineering Lead</span><span class="exp-rtype">Full-time</span></div>
      <div class="exp-dates">01.2021 – 02.2023 <span class="dur">2y 1m</span></div>
      <ul class="exp-bul"><li>Led team of 8 building SaaS products for SMEs</li><li>Established CI/CD pipelines and code review culture</li></ul>
      <div class="exp-chips"><span class="e-tag">Vue.js</span><span class="e-tag">Laravel</span><span class="e-tag">Docker</span></div>
    </div>
  </div>

  <!-- Education -->
  <div style="margin-top:20px">
    <div class="sec-hd" style="margin-bottom:12px">
      <span class="sec-title" style="color:var(--text-muted);font-size:9px">Education</span>
      <div class="sec-line"></div>
    </div>
    <div class="exp-block">
      <div class="exp-company"><div class="exp-dot old"></div><span class="exp-co">University of San Carlos</span></div>
      <div class="exp-role" style="border-bottom:none">
        <div class="exp-role-top"><span class="exp-rname">BS Information Technology</span></div>
        <div class="exp-dates">2015 – 2019</div>
      </div>
    </div>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ CERTS ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Certifications</span><span class="sec-count">19</span><div class="sec-line"></div><a href="#" class="sec-more">View All</a></div>
  <div class="cert-list">
    <div class="cert-row"><div><div class="cert-name">Huawei Developer Expert</div><div class="cert-by">@ Huawei</div></div><div class="cert-right"><span class="cert-year">2024</span><span class="cert-arrow">↗</span></div></div>
    <div class="cert-row"><div><div class="cert-name">Generative AI Leader</div><div class="cert-by">@ Google</div></div><div class="cert-right"><span class="cert-year">2024</span><span class="cert-arrow">↗</span></div></div>
    <div class="cert-row"><div><div class="cert-name">Software Engineering</div><div class="cert-by">@ TestDome</div></div><div class="cert-right"><span class="cert-year">2023</span><span class="cert-arrow">↗</span></div></div>
    <div class="cert-row"><div><div class="cert-name">Generative AI Professional</div><div class="cert-by">@ Oracle</div></div><div class="cert-right"><span class="cert-year">2024</span><span class="cert-arrow">↗</span></div></div>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ AWARDS ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Awards</span><span class="sec-count">26</span><div class="sec-line"></div></div>
  <div class="awards-list">
    <div class="aw-row"><span class="aw-icon">◆</span><div><div class="aw-name">DICT OpenGov Hackathon 2025 Champion</div><div class="aw-meta">07.2025 · Government / National</div></div><span class="aw-chip win">Champion</span></div>
    <div class="aw-row"><span class="aw-icon">◇</span><div><div class="aw-name">PH&gt;100 Bright Minds Under 30</div><div class="aw-meta">2025 · Stellar PH</div></div><span class="aw-chip">Awardee</span></div>
    <div class="aw-row"><span class="aw-icon">◇</span><div><div class="aw-name">Devs One Hundred — Founding Member</div><div class="aw-meta">2024 · Developer Community</div></div><span class="aw-chip">Member</span></div>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ RECOMMENDATIONS ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Recommendations</span><div class="sec-line"></div></div>
  <div class="rec-list">
    <div class="rec-card"><div class="rec-quote">Bryl was the most talented software engineer I've mentored. A fast learner who always delivers quality output. Very keen on new technologies — someone you want on your team.</div><div class="rec-div"></div><div class="rec-name">Cris Lawrence Adrian Militante</div><div class="rec-role">ICT Director at GCM</div></div>
    <div class="rec-card"><div class="rec-quote">Bryl and I worked together on various projects where I saw his tenacity to deliver. He met deadlines without sacrificing quality, at times even exceeding set goals.</div><div class="rec-div"></div><div class="rec-name">Van Honoridez</div><div class="rec-role">Application Development Analyst at Accenture</div></div>
    <div class="rec-card"><div class="rec-quote">Intelligent software engineer. Bryl takes lead during development and manages teams well. A reliable engineer who consistently delivers.</div><div class="rec-div"></div><div class="rec-name">Ken Gorro</div><div class="rec-role">Senior Developer at Fullscale</div></div>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ GALLERY ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Gallery</span><div class="sec-line"></div></div>
  <div class="gallery-grid">
    <div class="gal-item wide">🎤</div>
    <div class="gal-item">🏆</div>
    <div class="gal-item">💻</div>
    <div class="gal-item">📊</div>
    <div class="gal-item">🤝</div>
    <div class="gal-item wide">🎯</div>
    <div class="gal-item">🚀</div>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ MEMBERSHIPS + SPEAKING ═══ -->
<div class="col" id="contact">
<div class="sec-inner">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
    <div>
      <div class="sec-hd" style="margin-bottom:12px"><span class="sec-title">A member of</span><div class="sec-line"></div></div>
      <div class="mem-list">
        <a href="#" class="mem-row"><div class="mem-dot"></div><span class="mem-name">Analytics & AI Association of the Philippines (AAP)</span><span class="mem-arrow">↗</span></a>
        <a href="#" class="mem-row"><div class="mem-dot"></div><span class="mem-name">Philippine Software Industry Association</span><span class="mem-arrow">↗</span></a>
      </div>
    </div>
    <div>
      <div class="sec-hd" style="margin-bottom:12px"><span class="sec-title">Speaking</span><div class="sec-line"></div></div>
      <div class="speaking-box">
        <div class="speaking-text">Available for speaking at events about software development and emerging technologies.</div>
        <div class="sp-btns">
          <a href="#" class="sp-btn">✉ Email</a>
          <a href="#" class="sp-btn">✆ Schedule</a>
          <a href="#" class="sp-btn">◈ Blog</a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ═══ CONTACT ═══ -->
<div class="col">
<div class="sec-inner">
  <div class="sec-hd"><span class="sec-title">Get in Touch</span><div class="sec-line"></div></div>
  <div class="contact-grid">
    <a href="mailto:you@email.com" class="contact-cell"><span class="contact-icon">✉</span><div><div class="contact-label">Email</div><div class="contact-val">you@email.com</div></div><span class="contact-arrow">↗</span></a>
    <a href="#" class="contact-cell"><span class="contact-icon">✆</span><div><div class="contact-label">Let's Talk</div><div class="contact-val">Schedule a Call</div></div><span class="contact-arrow">↗</span></a>
    <a href="#" class="contact-cell"><span class="contact-icon">◈</span><div><div class="contact-label">Blog</div><div class="contact-val">Read my Blog</div></div><span class="contact-arrow">↗</span></a>
    <a href="#" class="contact-cell"><span class="contact-icon">⌥</span><div><div class="contact-label">GitHub</div><div class="contact-val">@yourhandle</div></div><span class="contact-arrow">↗</span></a>
  </div>
</div>
</div>

<div class="hatch"></div>

<!-- ══════════════════════════════
   FLUID GRADIENT "NETHAIAH" FOOTER
   exact recreation of chanhdai's
   FluidGradientText component
══════════════════════════════ -->
<footer class="fluid-footer" id="fluid-footer">
  <div class="fluid-footer-inner">
    <div class="fluid-footer-meta">
      <a href="#">llms.txt</a>
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">X</a>
      <a href="#">Instagram</a>
    </div>
    <div class="fluid-footer-copy">© 2026 Nethaiah. All rights reserved.</div>
  </div>

  <!-- SVG fluid gradient name — mouse-tracked -->
  <div class="fluid-name-wrap" id="fluid-wrap">
    <svg id="fluid-svg" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fg" x1="600" y1="0" x2="600" y2="200" gradientUnits="userSpaceOnUse">
          <stop id="fg-stop1" offset="0.55" stop-color="#f2f2f2" stop-opacity="0"/>
          <stop id="fg-stop2" offset="1" stop-color="#f2f2f2" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <!-- ghost outline stroke -->
      <text
        x="50%" y="62%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Helvetica, Arial, sans-serif"
        font-size="200"
        font-weight="bold"
        fill="none"
        stroke="#f2f2f2"
        stroke-opacity="0.06"
        stroke-width="1"
      >Nethaiah</text>
      <!-- fluid gradient fill -->
      <text
        x="50%" y="62%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-family="Helvetica, Arial, sans-serif"
        font-size="200"
        font-weight="bold"
        fill="url(#fg)"
      >Nethaiah</text>
    </svg>
  </div>
</footer>

<script>
/* ── Live time ── */
function updateTime() {
  const n = new Date();
  const el = document.getElementById('lt7');
  if (el) el.textContent = String(n.getHours()).padStart(2,'0') + ':' + String(n.getMinutes()).padStart(2,'0');
}
updateTime(); setInterval(updateTime, 30000);

/* ── Pixel "NT" Logo ── */
// Each letter is a 5x5 pixel grid
// 1 = filled, 0 = empty
const N_map = [
  1,0,0,0,1,
  1,1,0,0,1,
  1,0,1,0,1,
  1,0,0,1,1,
  1,0,0,0,1,
];
const T_map = [
  1,1,1,1,1,
  0,0,1,0,0,
  0,0,1,0,0,
  0,0,1,0,0,
  0,0,1,0,0,
];
function buildLogo(id, map) {
  const el = document.getElementById(id);
  if (!el) return;
  map.forEach(v => {
    const px = document.createElement('div');
    px.className = v ? 'p' : '_';
    el.appendChild(px);
  });
}
buildLogo('logo-N', N_map);
buildLogo('logo-T', T_map);

/* ── GitHub heatmap ── */
const hm = document.getElementById('hm7');
if (hm) {
  let total = 0;
  for (let w = 0; w < 52; w++) {
    const col = document.createElement('div');
    col.className = 'hm-col';
    for (let d = 0; d < 7; d++) {
      const c = document.createElement('div');
      const r = Math.random();
      const n = Math.floor(Math.random() * 14);
      total += n;
      let cls = 'hm-c';
      if (r > 0.55) cls += ' ' + (n > 9 ? 'l4' : n > 5 ? 'l3' : n > 2 ? 'l2' : 'l1');
      c.className = cls;
      col.appendChild(c);
    }
    hm.appendChild(col);
  }
  const cnt = document.getElementById('hm7-count');
  if (cnt) cnt.textContent = total.toLocaleString() + ' contributions in 2025 on GitHub';
}

/* ══════════════════════════════════════
   FLUID GRADIENT TEXT — mouse tracking
   Recreation of chanhdai's component
══════════════════════════════════════ */
const fluidWrap = document.getElementById('fluid-wrap');
const gradEl   = document.getElementById('fg');

const SVG_W = 1200;
let currentX = SVG_W / 2;
let targetX  = SVG_W / 2;
let rafId;

function lerp(a, b, t) { return a + (b - a) * t; }

function animateGradient() {
  currentX = lerp(currentX, targetX, 0.08);
  if (gradEl) {
    gradEl.setAttribute('x1', String(currentX));
    gradEl.setAttribute('x2', String(SVG_W / 2));
  }
  rafId = requestAnimationFrame(animateGradient);
}
animateGradient();

if (fluidWrap) {
  fluidWrap.addEventListener('mousemove', e => {
    const rect = fluidWrap.getBoundingClientRect();
    const mx   = e.clientX - rect.left;
    const nx   = (mx / rect.width) * SVG_W;
    targetX    = Math.max(0, Math.min(SVG_W, nx));
  });
  fluidWrap.addEventListener('mouseleave', () => {
    targetX = SVG_W / 2;
  });
}
</script>
</body>
</html>