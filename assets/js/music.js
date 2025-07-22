const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggle.textContent = "🔈 ▶️";
  } else {
    bgMusic.play();
    musicToggle.textContent = "🔊 ⏸️";
  }
  isPlaying = !isPlaying;
});
