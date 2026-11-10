/* Cookie banner for Google Analytics. Google only measures after the visitor clicks Accept. */
(function(){
  var KEY="syt_consent";
  function get(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
  function set(v){try{localStorage.setItem(KEY,v);}catch(e){}}
  function apply(v){if(window.gtag)gtag("consent","update",{analytics_storage:v==="yes"?"granted":"denied"});}
  var saved=get(); if(saved){apply(saved);return;}
  var he=document.documentElement.lang==="he"||document.body.classList.contains("rtl");
  var css=".ck{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:520px;margin:0 auto;background:#fff;color:#1a2840;border:1px solid #d0dcea;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.25);padding:1rem 1.2rem;display:flex;gap:1rem;align-items:center;flex-wrap:wrap;font-family:inherit;font-size:.9rem;line-height:1.5}"+
    ".ck p{flex:1 1 240px;margin:0}.ck div{display:flex;gap:.5rem}.ck button{border:0;border-radius:100px;padding:.55rem 1.1rem;font-weight:700;font-family:inherit;cursor:pointer;font-size:.88rem}"+
    ".ck .y{background:#1565c0;color:#fff}.ck .n{background:#eef3f9;color:#1a2840}";
  var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
  var b=document.createElement("div");b.className="ck";b.setAttribute("role","dialog");b.dir=he?"rtl":"ltr";
  b.innerHTML="<p>"+(he?"אנחנו משתמשים בעוגיות של Google Analytics כדי להבין איך משתמשים באתר.":"We use Google Analytics cookies to understand how people use this site.")+"</p><div><button class='n'>"+(he?"לא תודה":"No thanks")+"</button><button class='y'>"+(he?"אישור":"Accept")+"</button></div>";
  function choose(v){set(v);apply(v);b.remove();}
  b.querySelector(".y").onclick=function(){choose("yes");};
  b.querySelector(".n").onclick=function(){choose("no");};
  document.body.appendChild(b);
})();
