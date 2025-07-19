const button = document.getElementById("sendLove");
const animationBox = document.getElementById("loveAnimation");
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function createHeart(x, y) {
  hearts.push({
    x: x,
    y: y,
    size: Math.random() * 20 + 10,
    speedY: Math.random() * -2 - 1,
    speedX: (Math.random() - 0.5) * 2,
    alpha: 1,
  });
}

function drawHearts() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    ctx.globalAlpha = heart.alpha;
    ctx.fillStyle = "#ff69b4";
    ctx.beginPath();
    ctx.moveTo(heart.x, heart.y);
    ctx.bezierCurveTo(
      heart.x + heart.size / 2,
      heart.y - heart.size / 2,
      heart.x + heart.size,
      heart.y + heart.size / 3,
      heart.x,
      heart.y + heart.size
    );
    ctx.bezierCurveTo(
      heart.x - heart.size,
      heart.y + heart.size / 3,
      heart.x - heart.size / 2,
      heart.y - heart.size / 2,
      heart.x,
      heart.y
    );
    ctx.fill();
    ctx.globalAlpha = 1;

    heart.y += heart.speedY;
    heart.x += heart.speedX;
    heart.alpha -= 0.01;
    if (heart.alpha <= 0) {
      hearts.splice(index, 1);
    }
  });

  requestAnimationFrame(drawHearts);
}

button.addEventListener("click", () => {
  const msg = document.getElementById("loveMessage").value.trim();
  if (!msg) return;

  animationBox.classList.remove("hidden");

  for (let i = 0; i < 30; i++) {
    createHeart(window.innerWidth / 2, window.innerHeight / 2);
  }

  drawHearts();
});
