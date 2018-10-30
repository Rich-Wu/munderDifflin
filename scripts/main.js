window.addEventListener('scroll',returnBar);

function returnBar() {
  if (window.scrollY + window.innerHeight == document.body.scrollHeight) {
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
