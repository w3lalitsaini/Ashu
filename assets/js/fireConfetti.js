function fireConfetti() {
  confetti({
    particleCount: 300,
    spread: 250,
    origin: { y: .7 },
  });
}

const confettiScript = document.createElement("script");
confettiScript.src =
  "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
document.body.appendChild(confettiScript);
