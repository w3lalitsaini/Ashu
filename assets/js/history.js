const timelineContainer = document.querySelector(".timeline-container");

timelineContainer.addEventListener("scroll", () => {
  document.querySelectorAll(".timeline-item").forEach((item) => {
    const rect = item.getBoundingClientRect();
    const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight + 100;
    if (isVisible) {
      item.classList.add("show");
    }
  });
});

// Initial trigger on load
window.addEventListener("load", () => {
  timelineContainer.dispatchEvent(new Event("scroll"));
});
