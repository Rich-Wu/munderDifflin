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
function infoForm() {
  console.log('form shows up now');
  document.getElementById('greyout').style.visibility = "visible";
  document.getElementById('greyout').style.opacity = ".9";
  document.getElementsByClassName('customerInfo')[0].style.visibility = "visible";
  // window.setTimeout(function delayShow() {
  //   document.getElementsByClassName('customerInfo')[0].style.visiblity = "visible";
  // }, 200);
}
function fadeBack() {
  console.log('form goes away now');
  document.getElementById('greyout').style.visibility = "hidden";
  document.getElementById('greyout').style.opacity = "0";
  document.getElementsByClassName('customerInfo')[0].style.visibility = "hidden";
}

window.addEventListener('scroll',returnBar);
document.getElementById('returnPrompt').addEventListener('click',scrollTop);
document.getElementById('aboutUsLink').addEventListener('click', moveTo);
document.getElementById('contactUsLink').addEventListener('click', scrollBottom);
document.getElementById('greyout').style.height = document.body.scrollHeight+'px';
let infoButtons = document.getElementsByClassName('moreInfo');
for (i=0;i<infoButtons.length;i++) {
  infoButtons[i].addEventListener('click', infoForm);
}
document.getElementById('greyout').addEventListener('click', fadeBack);
