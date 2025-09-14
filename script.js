// Timer since anniversary date
const timerEl = document.getElementById("timer");
const startDate = new Date("May 15, 2024 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerEl.innerHTML = `⏳ ${days} Days ${hours}h ${minutes}m ${seconds}s together 💕`;
}, 1000);

// Play/Pause background music
const audio = document.getElementById("bgAudio");
const playPauseBtn = document.getElementById("playPause");
let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "🎵 Play Piano";
  } else {
    audio.play();
    playPauseBtn.textContent = "⏸ Pause Music";
  }
  isPlaying = !isPlaying;
});

// Falling rose petals 🌹
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.textContent = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 5 + Math.random() * 5 + "s"; // speed variation
  petal.style.fontSize = 20 + Math.random() * 20 + "px"; // size variation

  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}
setInterval(createPetal, 600);
