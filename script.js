// Select Elements
const numberHours = document.querySelector(".number-hours");
const barSeconds = document.querySelector(".bar-seconds");

// Arrays for Hour Numbers and Second Markers
const numberElement = [];
const barElement = [];

// Populate Hour Numbers (1-12)
for (let i = 1; i <= 12; i++) {
  numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);
}

// Add Hour Numbers to the DOM
numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// Populate Second Markers (1-60)
for (let i = 1; i <= 60; i++) {
  barElement.push(`<span style="--index:${i};"><p></p></span>`);
}

// Add Second Markers to the DOM
barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

// Select Clock Hands
const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

// Function to Update Clock Hands
function getCurrentTime() {
  const date = new Date();
  const currentHours = date.getHours() % 12; // Convert to 12-hour format
  const currentMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();

  // Calculate Degrees for Each Hand
  const hourDegrees = currentHours * 30 + currentMinutes / 2; // 30° per hour
  const minuteDegrees = currentMinutes * 6; // 6° per minute
  const secondDegrees = currentSeconds * 6; // 6° per second

  // Rotate Hands
  handHours.style.transform = `rotate(${hourDegrees}deg)`;
  handMinutes.style.transform = `rotate(${minuteDegrees}deg)`;
  handSeconds.style.transform = `rotate(${secondDegrees}deg)`;
}

// Initialize and Update Clock Every Second
getCurrentTime();
setInterval(getCurrentTime, 1000);
