function ignoreCall() {
  document.querySelector(".popup").style.display = "none";
}

function allowCall() {
  window.location.href = "tel:+18888888888";
}

// Countdown logic
let seconds = 81;
const timerEl = document.getElementById("timer");
setInterval(() => {
  if (seconds > 0) {
    seconds--;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    timerEl.textContent = `${m} minutes and ${s} seconds`;
  }
}, 1000);