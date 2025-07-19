document.addEventListener("DOMContentLoaded", () => {
  const fullText = [
    "Our journey started with a smile and turned into something magical.",
    "From random conversations to deep bonds, every moment feels like a dream.",
    "Together, we grow, support, laugh, and dream — and that’s the most beautiful part of “Us”.",
    '— Lalit ❤️ Ashu'
  ];

  const typeTarget = document.getElementById("typewriter");
  let lineIndex = 0;
  let charIndex = 0;
  const speed = 40;

  function typeWriterEffect() {
    if (lineIndex < fullText.length) {
      const currentLine = fullText[lineIndex];

      if (charIndex < currentLine.length) {
        typeTarget.innerHTML += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriterEffect, speed);
      } else {
        typeTarget.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeWriterEffect, speed * 3);
      }
    } else {
      // After all lines printed, replace plain text with gradient styled version
      typeTarget.innerHTML = typeTarget.innerHTML.replace(
        "— Lalit ❤️ Ashu",
        '— <strong>Lalit ❤️ Ashu</strong>'
      );
    }
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (typeTarget.innerHTML === "") typeWriterEffect();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(document.querySelector("#about-us"));
});
