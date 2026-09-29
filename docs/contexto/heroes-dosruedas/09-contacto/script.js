(function(){
  var cb=document.getElementById('copy-tel');
  cb.addEventListener('click',function(){
    var t='2236602699';
    function done(){cb.textContent='Copiado';setTimeout(function(){cb.textContent='Copiar';},1600);}
    function fallback(){var r=document.createRange();r.selectNodeContents(document.getElementById('tel'));var s=getSelection();s.removeAllRanges();s.addRange(r);cb.textContent='Seleccionado';}
    try{navigator.clipboard.writeText(t).then(done,fallback);}catch(e){fallback();}
  });

  var f=document.getElementById('cform'),nm=document.getElementById('c-nombre'),er=document.getElementById('c-err'),ok=document.getElementById('c-ok');
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!nm.value.trim()){nm.setAttribute('aria-invalid','true');er.hidden=false;ok.hidden=true;nm.focus();return;}
    nm.removeAttribute('aria-invalid');er.hidden=true;
    ok.textContent='Maqueta: en el sitio esto abre WhatsApp con "Hola, soy '+nm.value.trim()+(document.getElementById('c-negocio').value.trim()?' de '+document.getElementById('c-negocio').value.trim():'')+'. Hago '+document.getElementById('c-vol').value.toLowerCase()+'."';
    ok.hidden=false;
  });
  nm.addEventListener('input',function(){if(nm.value.trim()){nm.removeAttribute('aria-invalid');er.hidden=true;}});
})();
