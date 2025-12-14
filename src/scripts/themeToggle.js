import confetti from "canvas-confetti";

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".theme-controller");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme =
    localStorage.getItem("theme") || (prefersDark ? "forest" : "cupcake");

  document.documentElement.setAttribute("data-theme", currentTheme);

  if (toggle) toggle.checked = currentTheme === "cupcake";

  toggle?.addEventListener("change", (e) => {
    const target = e.target;
    const newTheme = target.checked ? "cupcake" : "forest";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});

// on end of scroll
let fired = false;

window.addEventListener("scroll", () => {
  if (fired) return;

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    fired = true;
    confetti({
      particleCount: 150,
      spread: 200,
      startVelocity: 30,
      origin: { y: 0.6 },
      colors: ["#d90429", "#2b9348", "#ffd700", "#ffffff"], // Christmas Red, Green, Gold, White
    });
  }
});

(function () {
  const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let position = 0;

  window.addEventListener("keydown", function (e) {
    if (e.keyCode === konamiCode[position]) {
      position++;
      if (position === konamiCode.length) {
        position = 0;
        confetti({
          particleCount: 150,
          spread: 120,
          startVelocity: 40,
          colors: ["#ffd700", "#ffea00", "#fff700"],
          shapes: ["star", "circle"],
        });
      }
    } else {
      position = 0; // Reset if wrong key
    }
  });
})();
