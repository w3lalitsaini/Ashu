const cursor1 = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  cursor1.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
  cursor2.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
});



