window.addEventListener('scroll',returnBar);

function returnBar() {
  if (window.scrollY + (1.05 * window.innerHeight) > document.body.scrollHeight) {
    document.getElementById('returnPrompt').style.bottom = '0';
  }
  if (window.scrollY == 0) {
    document.getElementById('returnPrompt').style.bottom = '-10vh';
  }
}

document.getElementById('returnPrompt').addEventListener('click',scrollTop);

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.getElementById('aboutUsLink').addEventListener('click', moveTo);

function moveTo() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth"
  });
}

document.getElementById('contactUsLink').addEventListener('click', scrollBottom);

function scrollBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

document.getElementById('overlay-1').addEventListener('mouseover', convenience);

function convenience() {
  // document.getElementById('gridContainer').style.gridTemplateRows = '300px 200px 200px 200px';
}
