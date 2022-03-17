const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'jun',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const weakDays = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'tursday',
  'friday',
  'saturday',
];

const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');
const deadline = document.querySelector('.deadline');

const tempDate = new Date();
const tempYear = tempDate.getFullYear();
const tempMonth = tempDate.getMonth();
const tempDayDate = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDayDate + 10, 15, 50, 0);

const day = weakDays[futureDate.getDay()];
const date = futureDate.getDate();
let month = futureDate.getMonth();
month = months[month];
const year = futureDate.getFullYear();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hour}:${minute}pm`;

const futureTime = futureDate.getTime();

function getRemainingDays() {
  const today = new Date().getTime();
  const t = futureTime - today;

  //   Time in ms
  // 1s = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1d = 24hr

  // calculate time in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  const days = Math.floor(t / oneDay);
  const hours = Math.floor((t % oneDay) / oneHour);
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });

  if (t < 0) {
    clearInterval(cowntdown);
    deadline.innerHTML = `<h4>time is ended</h4>`;
  }
}

const cowntdown = setInterval(getRemainingDays, 1000);
getRemainingDays();
