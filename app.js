const hourNeedle = document.querySelector("#hour");
const minuteNeedle = document.querySelector("#minute");
const secondNeedle = document.querySelector("#second");
const timeEL = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});
function runClock() {
  var date = new Date();
  let day=date.getDay()
  let date2=date.getDate()
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  const month = date.getMonth();
  const hourForClock = hour % 12;
  const ampm = hour >= 12 ? "PM" : "AM";

  hourNeedle.style.transform = `translate(-50%,-100%) rotate(${scale(
    hourForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    minute,
    0,
    59,
    0,
    360
  )}deg)`;
  secondNeedle.style.transform = `translate(-50%, -100%) rotate(${scale(
    second,
    0,
    59,
    0,
    360
  )}deg)`;

  timeEL.innerText = `${hourForClock}:${
    minute < 10 ? `0${minute}` : minute
  }:${second} ${ampm}`;
    dateEl.innerHTML =`${days[day]}, ${months[month]} <span class='circle'> ${date2}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setInterval(runClock, 1000);
