import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputDateTimeEl = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const startBtnEl = document.querySelector('[data-start]');

startBtnEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > options.defaultDate) {
      startBtnEl.disabled = false;
    } else {
      startBtnEl.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

flatpickr('#datetime-picker', options);

startBtnEl.addEventListener('click', startTimer);
function startTimer() {
  startBtnEl.disabled = true;

  const timerID = setInterval(() => {
    const currentTime = new Date();
    const selectedFinishTime = new Date(inputDateTimeEl.value);
    const timeMilliseconds = selectedFinishTime - currentTime;

    addLeadingZero(convertMs(timeMilliseconds));

    if (timeMilliseconds <= 1000) {
      clearInterval(timerID);
      return;
    }
  }, 1000);
}

function addLeadingZero({ days, hours, minutes, seconds }) {
  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
