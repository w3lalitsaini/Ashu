if (localStorage.getItem("auth") !== "true") {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "index.html";
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector("header, .top-nav");
  if (window.scrollY > 200) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

const OFFSET = 55; // pixels from top

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetPosition - OFFSET,
      behavior: "smooth",
    });
  });
});

ScrollReveal().reveal("[data-sr-id]", {
  delay: 500,
  distance: "200px",
  origin: "bottom",
  duration: 900,
  easing: "ease-out",
  interval: 700,
});

const typewriter = document.querySelector(".typewriter");
const text = typewriter.textContent;
let i = 0;
typewriter.textContent = "";
const type = () => {
  if (i < text.length) {
    typewriter.textContent += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
};
type();

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
