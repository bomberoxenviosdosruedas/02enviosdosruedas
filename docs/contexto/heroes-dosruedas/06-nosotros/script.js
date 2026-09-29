(function(){
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if(reduce){var am=document.getElementById('am1');if(am)am.remove();var m=document.getElementById('moto1');if(m)m.setAttribute('transform','translate(960 50)');}
})();
