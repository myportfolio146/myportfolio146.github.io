var toggle = document.getElementsByClassName('toggle')[0];
var phonemenu = document.getElementsByClassName('phonemenu')[0];
var menulist = document.getElementsByClassName('phone')[0];
var body = document.getElementsByTagName("body")[0];

toggle.addEventListener('click', handleToggle);

var on = false;

function handleToggle(e) {
  if(!on) {
    toggle.innerHTML = 'Close Menu';
    on = true;
  } else {
    toggle.innerHTML = 'Open Menu';
    on = false;
  }
  body.classList.toggle('overflowyhidden');
  phonemenu.classList.toggle('active');
  menulist.classList.toggle('show');
}