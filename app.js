const currentDayOfTheWeek = document.querySelector(
  "[data-testid='currentDayOfTheWeek']"
);

const currentUTCTime = document.querySelector(
  "[ data-testid='currentUTCTime']"
);

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let currentDay = days[now.getDay()];

const year = now.getUTCFullYear();
const month = now.getUTCMonth() + 1;
const day = now.getUTCDate();
const hours = now.getUTCHours();
const minutes = now.getUTCMinutes();
const seconds = now.getUTCSeconds();
const milliseconds = now.getUTCMilliseconds();

const currentTime = `
${hours}:${minutes}:${seconds}`;

currentDayOfTheWeek.textContent = currentDay;

currentUTCTime.textContent = currentTime;
