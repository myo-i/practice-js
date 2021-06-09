document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelector(".title");
  const cb = function (entries, observe) {
    entries.forEach((entry) => {
      if (entry.isInteresting) {
        const ta = new TextAnimation(entry, target);
        ta.animate();
      }
    });
  };
});
