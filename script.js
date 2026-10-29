// Laam Digital Vault — vanilla JS: scroll progress, reveal-on-scroll,
// horizontal journey driven by vertical scroll, contact form -> mailto.
(function(){
  // Scroll progress bar
  var bar = document.querySelector('.progress');
  function onScroll(){
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar && max > 0) bar.style.width = (h.scrollTop / max * 100) + '%';
    // Horizontal journey
    var wrap = document.getElementById('journeyWrap');
    var track = document.getElementById('journeyTrack');
    if (wrap && track && window.innerWidth > 820){
      var rect = wrap.getBoundingClientRect();
      var total = wrap.offsetHeight - window.innerHeight;
      var p = Math.min(Math.max(-rect.top / total, 0), 1);
      var maxX = track.scrollWidth - window.innerWidth + 44;
      track.style.transform = 'translateX(' + (-p * maxX) + 'px)';
    } else if (track) {
      track.style.transform = 'none';
    }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  onScroll();

  // Reveal on scroll
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });

  // Contact form -> opens visitor's email client (no backend, no fake "sent")
  var form = document.getElementById('enquiryForm');
  if (form){
    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      var name = document.getElementById('fName').value.trim();
      var org = document.getElementById('fOrg').value.trim();
      var product = document.getElementById('fProduct').value;
      var msg = document.getElementById('fMsg').value.trim();
      var subject = 'Enquiry - ' + product;
      var body = 'Hello,\n\nMy name: ' + name + '\nOrganisation: ' + (org || 'Not provided') + '\nProduct of interest: ' + product + '\n\n' + msg + '\n\nThank you.';
      window.location.href = 'mailto:admin@laam.buzz?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      var note = document.getElementById('formNote');
      if (note) note.textContent = 'Your email client should now open with this enquiry addressed to admin@laam.buzz. Press Send in your email app to deliver it.';
    });
  }
})();
