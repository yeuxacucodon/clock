const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(() => {
  const date = new Date();
  const hh = date.getHours() * 30;
  const mm = date.getMinutes() * 6;
  const ss = date.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 30}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
});
