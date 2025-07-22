if (localStorage.getItem("auth") !== "true") {
  window.location.href = "index.html";
}

function logout() {
  localStorage.removeItem("auth");
  window.location.href = "index.html";
}

// Toggle nav menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
});

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

// Array of quotes/messages
const messages = [
  "I Love You More Every Single Day...🌹",
  "You're the reason my heart beats with joy 💖",
  "With you, every moment becomes magical ✨"
];

let messageIndex = 0;
let charIndex = 0;

function type() {
  const currentMessage = messages[messageIndex];
  
  if (charIndex < currentMessage.length) {
    typewriter.textContent += currentMessage.charAt(charIndex);
    charIndex++;
    setTimeout(type, 70);
  } else {
    // After complete typing, wait 15 seconds, then type the next message
    setTimeout(() => {
      messageIndex = (messageIndex + 1) % messages.length; // Loop back to first
      charIndex = 0;
      typewriter.textContent = "";
      type();
    }, 10000); // 15 seconds
  }
}

// Start typing
type();

