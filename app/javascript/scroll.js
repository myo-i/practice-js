document.addEventListener("DOMContentLoaded", function () {
  const els = document.querySelectorAll(".title");

  const cb = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target);

        ta.animate();

        observer.unobserve(entry.target);

        // console.log('in');
      } else {
        // console.log('out');
      }
    });
  };

  const options = {
    root: null,

    rootMargin: "0px",

    threshold: 0,
  };

  const io = new IntersectionObserver(cb, options);

  els.forEach((el) => io.observe(el));
});

class TextAnimation {
  constructor(el) {
    this.DOM = {};

    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);

    this.chars = this.DOM.el.innerHTML.trim().split("");

    this.DOM.el.innerHTML = this._splitText();
  }

  _splitText() {
    return this.chars.reduce((acc, curr) => {
      curr = curr.replace(/\s+/, "&nbsp;");

      return `${acc}<span class="char">${curr}</span>`;
    }, "");
  }

  animate() {
    this.DOM.el.classList.toggle("inview");
  }
}

// class TweenTextAnimation extends TextAnimation {
//   constructor(el) {
//     super(el);

//     this.DOM.chars = this.DOM.el.querySelectorAll(".char");
//   }

//   animate() {
//     this.DOM.el.classList.add("inview");

//     this.DOM.chars.forEach((c, i) => {
//       TweenMax.to(c, 0.6, {
//         ease: Back.easeOut,

//         delay: i * 0.05,

//         startAt: { y: "-50%", opacity: 0 },

//         y: "0%",

//         opacity: 1,
//       });
//     });
//   }
// }

