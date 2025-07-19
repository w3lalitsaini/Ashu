const quotes = [
  "🌸 You're my favorite notification.",
  "You're the reason my heart beats faster 💓",
  "Every moment with you is a beautiful memory 💫",
  "You make my world brighter ☀️",
  "Loving you is my favorite thing to do 💖",
  "💌 I still get butterflies even though I've seen you a hundred times.",
  "🥰 You stole my heart, but'll let you keep it.",
  "❤️ With you, forever isn't too long.",
];

let quoteIndex = 0;
const toast = document.getElementById("quote-toast");

function showQuote() {
  toast.textContent = quotes[quoteIndex];
  toast.classList.add("show");
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.classList.add("hidden");
  }, 5000); // visible for 5 sec

  quoteIndex = (quoteIndex + 1) % quotes.length;
}

// Start showing quotes every 15 seconds
setInterval(showQuote, 10000);
