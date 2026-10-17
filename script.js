
document.addEventListener('DOMContentLoaded',function(){
 var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
 var b=document.getElementById('burger'),n=document.getElementById('navlinks');
 if(b&&n) b.addEventListener('click',function(){n.classList.toggle('show')});
 document.querySelectorAll('.faq button').forEach(function(btn){btn.addEventListener('click',function(){btn.parentElement.classList.toggle('open')})});
 document.querySelectorAll('form[data-thanks]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var t=f.querySelector('.thanks');if(t)t.style.display='block';f.querySelectorAll('input,textarea').forEach(function(i){i.value=''});})});
 var s=document.getElementById('search'),c=document.getElementById('catfilter');
 function filt(){var q=(s?s.value.toLowerCase():''),cv=(c?c.value:'all');document.querySelectorAll('[data-card]').forEach(function(card){var ok=card.textContent.toLowerCase().includes(q)&&(cv==='all'||card.dataset.cat===cv);card.style.display=ok?'':'none'})}
 if(s)s.addEventListener('input',filt); if(c)c.addEventListener('change',filt);
});
