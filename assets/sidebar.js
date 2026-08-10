(function(){
  var toggle = document.getElementById('sidebarToggle');
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('sidebarBackdrop');
  function close(){ sidebar.classList.remove('open'); backdrop.classList.remove('open'); }
  if (toggle) toggle.addEventListener('click', function(){
    sidebar.classList.toggle('open');
    backdrop.classList.toggle('open');
  });
  if (backdrop) backdrop.addEventListener('click', close);
})();

(function(){
  var toggle = document.getElementById('pastMeetingsToggle');
  var list = document.getElementById('past-meetings-list');
  if (!toggle || !list) return;

  function setOpen(open){
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    list.classList.toggle('open', open);
    list.style.maxHeight = open ? list.scrollHeight + 'px' : '0px';
  }

  setOpen(list.classList.contains('open'));

  toggle.addEventListener('click', function(){
    setOpen(!list.classList.contains('open'));
  });
})();
