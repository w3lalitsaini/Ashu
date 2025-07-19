const anniversary = new Date("2024-12-16"); // Replace with your date
const now = new Date();
const diffTime = Math.abs(now - anniversary);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("daysCount").innerText = diffDays;
