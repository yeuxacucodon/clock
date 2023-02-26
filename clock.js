const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

rotation = (target, val) => {
  target.style.transform = `rotate(${val}deg)`;
};

clock = () => {
  let date = new Date();
  let hh = (date.getHours() % 12) + date.getMinutes() / 59;
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  hh *= 30;
  mm *= 6;
  ss *= 6;

  rotation(hr, hh);
  rotation(min, mm);
  rotation(sec, ss);

  setTimeout(clock, 500);
};

window.onload = clock();
