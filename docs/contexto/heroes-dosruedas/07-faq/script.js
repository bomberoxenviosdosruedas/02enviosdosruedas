(function(){
  var q=document.getElementById('faq-q'),items=[].slice.call(document.querySelectorAll('#qlist li')),empty=document.getElementById('qempty'),btns=[].slice.call(document.querySelectorAll('.topics button')),topic='';
  function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');}
  function run(){
    var t=norm(q.value.trim()),n=0;
    items.forEach(function(li){
      var okT=!topic||(' '+li.dataset.t+' ').indexOf(' '+topic+' ')>-1;
      var okQ=!t||norm(li.textContent).indexOf(t)>-1;
      li.hidden=!(okT&&okQ); if(!li.hidden) n++;
    });
    empty.hidden=n>0;
  }
  q.addEventListener('input',run);
  btns.forEach(function(b){b.addEventListener('click',function(){
    var on=b.getAttribute('aria-pressed')==='true';
    btns.forEach(function(x){x.setAttribute('aria-pressed','false');});
    topic=on?'':b.dataset.t; if(!on) b.setAttribute('aria-pressed','true'); run();
  });});

  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  (function(){
    var inp=document.getElementById('faq-q');if(!inp||reduce)return;
    var qs=['horario de corte','rastreo en tiempo real','zonas de cobertura','mínimo de envíos','depósito y fulfillment'];
    var qi=0,ci=0,del=false,stop=false;
    inp.addEventListener('focus',function(){stop=true;inp.placeholder='Ej: horario de corte, rastreo, zonas';});
    function tick(){
      if(stop||inp.value)return;
      var w=qs[qi];
      if(!del){ci++;if(ci>w.length){del=true;inp.placeholder='Ej: '+w;setTimeout(tick,1400);return;}}
      else{ci--;if(ci<0){del=false;ci=0;qi=(qi+1)%qs.length;}}
      inp.placeholder='Ej: '+w.slice(0,Math.max(ci,0))+'|';
      setTimeout(tick,del?35:70);
    }
    setTimeout(tick,900);
  })();
})();
