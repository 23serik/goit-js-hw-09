const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const INTERVAL_TIME = 1000;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let startInterval = null;

startBtn.addEventListener('click', event => {
  startBtn.disabled = true;
  startInterval = setInterval(() => {
    document.querySelector('body').style = `background: ${getRandomHexColor()}`;
  }, INTERVAL_TIME);
});

stoptBtn.addEventListener('click', event => {
  startBtn.disabled = false;
  clearInterval(startInterval);
});
