(function(){
  var saved = null;
  try { saved = window.sessionStorage ? sessionStorage.getItem('lang') : null; } catch(e){}
  var lang = saved || 'uk';
  var params = new URLSearchParams(location.search);
  if (params.get('lang')) lang = params.get('lang');
  setLang(lang);
  document.querySelectorAll('[data-setlang]').forEach(function(btn){
    btn.addEventListener('click', function(){ setLang(btn.getAttribute('data-setlang')); });
  });
  function setLang(l){
    if (['uk','ru','nl'].indexOf(l) === -1) l = 'uk';
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.setAttribute('lang', l === 'uk' ? 'uk' : l);
    document.querySelectorAll('[data-setlang]').forEach(function(b){
      b.setAttribute('aria-pressed', String(b.getAttribute('data-setlang') === l));
    });
    document.querySelectorAll('[data-href-uk]').forEach(function(a){
      var h = a.getAttribute('data-href-' + l);
      if (h) a.setAttribute('href', h);
    });
    try { if (window.sessionStorage) sessionStorage.setItem('lang', l); } catch(e){}
  }
})();