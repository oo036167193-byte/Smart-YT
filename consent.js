/* Cookie bar for Google Analytics. Google only measures after the visitor clicks Accept.
   The text follows the site language (English / Hebrew) and switches with the language button. */
(function(){
  var KEY="syt_consent";
  function get(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
  function set(v){try{localStorage.setItem(KEY,v);}catch(e){}}
  function apply(v){if(window.gtag)gtag("consent","update",{analytics_storage:v==="yes"?"granted":"denied"});}
  /* "Cookie settings" link: forget the choice, turn analytics off and show the bar again */
  window.sytCookieSettings=function(){try{localStorage.removeItem(KEY);}catch(e){}apply("no");location.reload();};
  var saved=get(); if(saved){apply(saved);return;}

  var TXT={
    en:{t:"We use cookies from Google Analytics to see which pages people read, so we can make the site better.",y:"Accept",n:"Decline"},
    he:{t:"אנחנו משתמשים בעוגיות של Google Analytics כדי לראות אילו דפים קוראים, וכך לשפר את האתר.",y:"אישור",n:"דחייה"}
  };
  var css=
    ".ck{position:fixed;left:0;right:0;bottom:0;z-index:9999;background:rgba(8,22,40,.97);backdrop-filter:blur(14px);border-top:1px solid rgba(33,150,243,.3);box-shadow:0 -8px 30px rgba(0,0,0,.3);color:#e3eaf5;font-family:inherit;transform:translateY(100%);transition:transform .35s ease}"+
    ".ck.show{transform:none}"+
    ".ck-in{max-width:1200px;margin:0 auto;padding:1rem 5vw;display:flex;align-items:center;gap:1.5rem}"+
    ".ck-ic{flex-shrink:0;width:36px;height:36px;border-radius:50%;background:rgba(0,180,255,.12);display:grid;place-items:center;font-size:1.1rem}"+
    ".ck p{flex:1;margin:0;font-size:.9rem;line-height:1.55;color:#c9d6e8}"+
    ".ck-b{display:flex;gap:.6rem;flex-shrink:0}"+
    ".ck button{border-radius:100px;padding:.6rem 1.4rem;font-weight:700;font-family:inherit;cursor:pointer;font-size:.88rem;white-space:nowrap;transition:all .2s}"+
    ".ck .y{background:linear-gradient(135deg,#1565c0,#00b4ff);color:#fff;border:0;box-shadow:0 4px 15px rgba(33,150,243,.35)}"+
    ".ck .y:hover{transform:translateY(-1px)}"+
    ".ck .n{background:transparent;color:#c9d6e8;border:1px solid rgba(255,255,255,.2)}"+
    ".ck .n:hover{border-color:#00b4ff;color:#fff}"+
    "body.ck-open .wa-float{bottom:110px}"+
    "@media(max-width:700px){.ck-in{flex-wrap:wrap;gap:.8rem;padding:1rem 1.1rem 1.1rem}.ck-ic{display:none}.ck p{flex-basis:100%;font-size:.86rem}.ck-b{width:100%}.ck-b button{flex:1}body.ck-open .wa-float{bottom:150px}}";
  var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

  var bar=document.createElement("div");bar.className="ck";bar.setAttribute("role","region");bar.setAttribute("aria-label","Cookies");
  bar.innerHTML="<div class='ck-in'><span class='ck-ic'>🍪</span><p></p><div class='ck-b'><button type='button' class='n'></button><button type='button' class='y'></button></div></div>";
  function lang(){var h=document.documentElement;return (h.lang==="he"||h.dir==="rtl"||document.body.classList.contains("rtl"))?"he":"en";}
  function paint(){var l=lang(),x=TXT[l];bar.dir=l==="he"?"rtl":"ltr";bar.querySelector("p").textContent=x.t;bar.querySelector(".y").textContent=x.y;bar.querySelector(".n").textContent=x.n;}
  paint();
  new MutationObserver(paint).observe(document.documentElement,{attributes:true,attributeFilter:["lang","dir"]});

  function choose(v){set(v);apply(v);bar.classList.remove("show");document.body.classList.remove("ck-open");setTimeout(function(){bar.remove();},400);}
  bar.querySelector(".y").onclick=function(){choose("yes");};
  bar.querySelector(".n").onclick=function(){choose("no");};
  document.body.appendChild(bar);document.body.classList.add("ck-open");
  setTimeout(function(){bar.classList.add("show");},600);
})();
