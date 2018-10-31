function returnBar() {
  if (window.scrollY + (1.05 * window.innerHeight) > document.body.scrollHeight) {
    document.getElementById('returnPrompt').style.bottom = '0';
  }
  if (window.scrollY == 0) {
    document.getElementById('returnPrompt').style.bottom = '-10vh';
  }
}
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function moveTo() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}
function scrollBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

window.addEventListener('scroll',returnBar);
document.getElementById('returnPrompt').addEventListener('click',scrollTop);
document.getElementById('aboutUsLink').addEventListener('click', moveTo);
document.getElementById('contactUsLink').addEventListener('click', scrollBottom);
document.getElementById('overlay-1').addEventListener('mouseover', convenience);
