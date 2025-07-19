document.addEventListener("DOMContentLoaded", function () {
  const extraProjects = document.querySelector(".extra-projects");
  const viewMoreBtn = document.getElementById("view-more-btn");
  const cards = document.querySelectorAll(".project-card");

  // Reveal animation on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.4 }
  );

  // Only observe currently visible cards
  cards.forEach((card) => {
    if (!card.closest(".extra-projects")) {
      observer.observe(card);
    }
  });

  // Toggle view more
  viewMoreBtn.addEventListener("click", function () {
    extraProjects.classList.toggle("hidden");

    // Animate revealed cards too
    if (!extraProjects.classList.contains("hidden")) {
      extraProjects.querySelectorAll(".project-card").forEach((card) => {
        observer.observe(card);
      });
    }

    this.textContent = extraProjects.classList.contains("hidden")
      ? "View More"
      : "View Less";
  });
});
