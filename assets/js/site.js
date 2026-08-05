/* =====================================================================
   site.js — builds the shared header/footer and renders page content
   from the data/*.js files. No build step, no dependencies.
   ===================================================================== */
(function(){
  "use strict";
  var S = window.SITE || {};
  var P = S.profile || {};

  var NAV = [
    {href:"index.html",        label:"Home"},
    {href:"research.html",     label:"Research"},
    {href:"publications.html", label:"Publications"},
    {href:"teaching.html",     label:"Teaching"},
    {href:"group.html",        label:"Group"}
  ];

  function el(html){var t=document.createElement("template");t.innerHTML=html.trim();return t.content.firstChild;}
  function esc(s){return (s==null?"":String(s)).replace(/[&<>]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;"}[c];});}
  function boldName(s){
    return esc(s).replace(/(Ishan\s+(?:G\.?\s+)?Thakkar)/g,"<b>$1</b>");
  }
  var here = (location.pathname.split("/").pop()||"index.html")||"index.html";

  /* ---------- Header ---------- */
  function header(){
    var links = NAV.map(function(n){
      var cur = n.href===here ? ' aria-current="page"' : '';
      return '<a href="'+n.href+'"'+cur+'>'+n.label+'</a>';
    }).join("");
    return el(
      '<div>'+
      '<div class="top-strip"></div>'+
      '<header class="site-header"><div class="wrap nav">'+
        '<a class="brand" href="index.html" aria-label="UCAT — home">'+
          '<img src="assets/img/ucat-mark.png" alt="UK · UCAT logo">'+
          '<span class="bt">UCAT<small>Unconventional Computing Architectures &amp; Technologies</small></span>'+
        '</a>'+
        '<button class="nav-toggle" aria-expanded="false" aria-controls="navlinks">Menu</button>'+
        '<nav id="navlinks" class="nav-links">'+links+'</nav>'+
      '</div></header></div>'
    );
  }

  /* ---------- Footer ---------- */
  function footer(){
    return el(
      '<footer class="site-footer"><div class="wrap">'+
        '<div>'+
          '<h4>'+esc(P.name||"")+'</h4>'+
          '<div class="fmeta">'+
            esc(P.dept||"")+'<br>'+esc(P.org||"")+'<br>'+
            (P.office?esc(P.office)+'<br>':'')+
            (P.email?'<a href="mailto:'+esc(P.email)+'">'+esc(P.email)+'</a> · ':'')+
            esc(P.phone||"")+
          '</div>'+
          '<div class="fmono">© '+new Date().getFullYear()+' UCAT Lab · University of Kentucky · built as a static site on GitHub Pages</div>'+
        '</div>'+
        '<img src="assets/img/ucat-full.png" alt="UK · UCAT — Unconventional Computing Architectures and Technologies">'+
      '</div></footer>'
    );
  }

  function mountChrome(){
    document.body.insertBefore(header(), document.body.firstChild);
    document.body.appendChild(footer());
    var btn=document.querySelector(".nav-toggle"), links=document.getElementById("navlinks");
    if(btn){btn.addEventListener("click",function(){
      var open=links.classList.toggle("open");
      btn.setAttribute("aria-expanded",open?"true":"false");
    });}
  }

  /* ---------- Home ---------- */
  function renderHome(){
    var photo = '<div class="hero-side">'+
      '<img class="portrait" src="'+esc(P.photo||"")+'" alt="'+esc(P.name||"")+'"'+
        ' onerror="this.outerHTML=\'<div class=&quot;monogram&quot;>IT</div>\'">'+
      '<img class="hero-logo" src="assets/img/ucat-full.png" alt="UCAT logo">'+
    '</div>';

    var links=(P.links||[]).map(function(l,i){
      return '<a class="btn'+(i===0?' primary':'')+'" href="'+esc(l.url)+'"'+(/^https?:/.test(l.url)?' target="_blank" rel="noopener"':'')+'>'+esc(l.label)+'</a>';
    }).join("");

    set("hero",
      '<div class="hero-grid">'+
        '<div>'+
          '<h1>'+esc(P.name||"")+'</h1>'+
          '<div class="role">'+esc(P.title||"")+'</div>'+
          '<div class="aff">'+esc(P.dept||"")+' · '+esc(P.org||"")+'</div>'+
          '<div class="lab">'+esc(P.lab||"")+'</div>'+
          '<p class="thesis">'+esc(P.thesis||"")+'</p>'+
          '<div class="links">'+links+'</div>'+
          '<div class="meta-row"><span class="mono">'+esc(P.office||"")+'</span></div>'+
        '</div>'+ photo +
      '</div>'
    );

    set("interests",'<div class="chips">'+(S.interests||[]).map(function(x){return '<span class="chip">'+esc(x)+'</span>';}).join("")+'</div>');
    set("bio",'<div class="prose">'+(P.bio||[]).map(function(p){return '<p>'+esc(p)+'</p>';}).join("")+'</div>');
    set("honors",'<ul class="stack">'+(S.honors||[]).map(function(h){return '<li><span class="when">'+esc(h.year)+'</span><span class="what">'+esc(h.text)+'</span></li>';}).join("")+'</ul>');
    set("service",'<ul class="stack plain">'+(S.service||[]).map(function(s){return '<li>'+esc(s)+'</li>';}).join("")+'</ul>');
    set("news",'<ul class="stack">'+(S.news||[]).map(function(n){return '<li><span class="when">'+esc(n.date)+'</span><span class="what">'+n.html+'</span></li>';}).join("")+'</ul>');
  }

  /* ---------- Research ---------- */
  function renderResearch(){
    var html=(S.research||[]).map(function(a){
      var refs=(a.pubs||[]).map(function(id){return '<a class="tag" href="publications.html#'+esc(id)+'">'+esc(id)+'</a>';}).join("");
      return '<div class="card"><h3>'+esc(a.title)+'</h3><p>'+esc(a.blurb)+'</p><div class="refs">'+refs+'</div></div>';
    }).join("");
    set("research-grid",'<div class="grid two">'+html+'</div>');
  }

  /* ---------- Publications ---------- */
  var PUBMETA=[
    {key:"journal",     label:"Journal Articles",     cls:"j"},
    {key:"conference",  label:"Conference Papers",    cls:"c"},
    {key:"bookChapter", label:"Book Chapters",        cls:"b"},
    {key:"patent",      label:"Patents",              cls:"p"},
    {key:"talk",        label:"Invited Talks",        cls:"t"}
  ];
  function pubItem(p,cls){
    return '<div class="pub" id="'+esc(p.id)+'">'+
      '<div class="pid '+cls+'">'+esc(p.id)+'</div>'+
      '<div>'+
        '<div class="ptitle">'+esc(p.title)+'</div>'+
        '<div class="pauth">'+boldName(p.authors)+'</div>'+
        '<div class="pven">'+esc(p.venue)+' <span class="yr">· '+esc(p.year)+'</span></div>'+
        (p.award?'<span class="award">'+esc(p.award)+'</span>':'')+
      '</div></div>';
  }
  function renderPublications(){
    var pubs=S.publications||{};
    var groups=PUBMETA.map(function(m){
      var items=(pubs[m.key]||[]);
      if(!items.length) return "";
      return '<section class="pub-group" data-group="'+m.key+'">'+
        '<h3>'+m.label+' ('+items.length+')</h3>'+
        items.map(function(p){return pubItem(p,m.cls);}).join("")+
      '</section>';
    }).join("");

    var filters='<button class="filter" data-f="all" aria-pressed="true">All</button>'+
      PUBMETA.filter(function(m){return (pubs[m.key]||[]).length;})
             .map(function(m){return '<button class="filter" data-f="'+m.key+'" aria-pressed="false">'+m.label+'</button>';}).join("");

    set("pub-controls",filters);
    set("pub-list",groups);

    var buttons=[].slice.call(document.querySelectorAll(".filter"));
    buttons.forEach(function(b){
      b.addEventListener("click",function(){
        var f=b.dataset.f;
        buttons.forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false");});
        document.querySelectorAll(".pub-group").forEach(function(g){
          g.style.display=(f==="all"||g.dataset.group===f)?"":"none";
        });
      });
    });

    if(location.hash){var t=document.getElementById(location.hash.slice(1));if(t){t.scrollIntoView();t.style.background="#fbf4ec";}}
  }

  /* ---------- Teaching ---------- */
  function renderTeaching(){
    var rows=(S.teaching||[]).map(function(t){
      return '<li><span class="when">'+esc(t.term)+'</span><span class="what">'+t.courses.map(esc).join("<br>")+'</span></li>';
    }).join("");
    set("teaching-list",'<ul class="stack">'+rows+'</ul>'+(S.teachingNote?'<p class="prose" style="margin-top:18px;color:var(--mut)">'+esc(S.teachingNote)+'</p>':''));
  }

  /* ---------- Group ---------- */
  function personCard(p){
    var meta=p.degree?p.degree:((p.since?"Since "+p.since:"")||(p.when||""));
    return '<div class="person"><div class="pn">'+esc(p.name)+'</div>'+
      (meta?'<div class="pd">'+esc(meta)+'</div>':'')+
      (p.topic?'<div class="pt">'+esc(p.topic)+'</div>':'')+'</div>';
  }
  function peopleBlock(id,title,arr){
    if(!arr||!arr.length) return "";
    return '<div class="section" style="border:none;padding:0 0 8px">'+
      '<div class="eyebrow">'+esc(title)+'</div>'+
      '<div class="people">'+arr.map(personCard).join("")+'</div></div>';
  }
  function renderGroup(){
    var st=S.students||{};
    var html=
      peopleBlock("phd","Ph.D. Students",st.phd)+
      peopleBlock("ms","M.S. Thesis Students",st.ms)+
      peopleBlock("bs","Undergraduate Researchers",st.bs)+
      peopleBlock("postdoc","Postdoctoral Researchers",st.postdoc)+
      peopleBlock("alumni","Alumni",st.alumni);
    set("group-list",html);
    if(S.prospective) set("prospective",'<div class="callout"><p>'+esc(S.prospective)+'</p></div>');
  }

  function set(id,html){var n=document.getElementById(id);if(n)n.innerHTML=html;}

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded",function(){
    mountChrome();
    var page=document.body.dataset.page;
    ({home:renderHome,research:renderResearch,publications:renderPublications,teaching:renderTeaching,group:renderGroup}[page]||function(){})();
  });
})();
