const menuToggle = document.querySelector("#menu-toggle");
const navigationLinks = document.querySelectorAll(".main-navigation a");
const root = document.documentElement;

/* Close the mobile menu after selecting a navigation link. */
navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});

/* Subtle cursor-follow glow for desktop devices. */
window.addEventListener("pointermove", (event) => {
  if (window.matchMedia("(pointer: fine)").matches) {
    root.style.setProperty("--cursor-x", `${event.clientX}px`);
    root.style.setProperty("--cursor-y", `${event.clientY}px`);
  }
});
