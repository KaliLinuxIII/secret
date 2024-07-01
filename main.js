const music = document.getElementById('music');
const p = document.getElementById('time');
const btn = document.getElementById('btn');
const dateDisplay = document.getElementById('date');

const updateDate = () => {
  const date = new Date();
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  const formattedDate = date.toLocaleDateString('en-US', options);
  dateDisplay.textContent = formattedDate;
};

setInterval(updateDate, 1);

const updateTime = () => {
  const time = new Date();
  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const milliseconds = time.getMilliseconds().toString().padStart(3, '0');
  p.textContent = `${hours} : ${minutes} : ${seconds} : ${milliseconds}`;
};
setInterval(updateTime, 1);

btn.addEventListener('click', playMusic)

let buttonCreated = false;

function playMusic() {
  if (!buttonCreated) {
    let downloadBtn = document.createElement('button');
    downloadBtn.innerHTML = 'Download?';
    downloadBtn.classList.add('downloadBtn');
    document.body.appendChild(downloadBtn);
    buttonCreated = true;
    downloadBtn.addEventListener('click', downloadFile);
  };

  btn.classList.add('animation');

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  };
  buttonPressed = true;
};

function downloadFile() {
  let a = document.createElement('a');
  a.setAttribute('href', 'AJR Burn the house down clean.MP3');
  a.setAttribute('download', 'AJR Burn The House Down.MP3');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};