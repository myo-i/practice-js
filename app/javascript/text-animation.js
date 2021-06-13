// document.addEventListener("DOMContentLoaded", function () {
//   const title = document.querySelector(".sub-title");
//   const cb = function (entries, observe) {
//     entries.forEach((entry) => {
//       if (entry.isInteresting) {
//         // entry.target.classList.add('inview');
//         console.log("aaa");
//       } else {
//         // entry.target.classList.remove('inview');
//         console.log("in");
//       }
//     });
//   };

//   const options = {
//     root: null,
//     rootMargin: "-100px 0px",
//     threshold: [0, 0.5, 1],
//   };
//   const io = new IntersectionObserver(cb, options);
//   io.observe(title);
// });

// const child = document.querySelector('.sub-title');
// const cb = function(entries, observer) {
//     entries.forEach(entry => {
//         if(entry.isIntersecting) {
//             entry.target.classList.add('inview');
//             // observer.unobserve(entry.target);
//         } else {
//             entry.target.classList.remove('inview');
//         }
//     });
//     // alert('intersecting');
// }
// const options = {
//     root: null,
//     rootMargin: "-300px 0px",
//     threshold: [0, 0.5, 1]
// };
// const io = new IntersectionObserver(cb, options);
// io.observe(child);

document.addEventListener('DOMContentLoaded', function() {
  const cont = document.querySelector('.content');
  const callback = function(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const ta = new TextAnimation(entry.target);
        ta.animate();
        observer.unobserve(entry.target);
      }
    });
  };

  const options = {
    root: null,
    rootMarigin: "0px",
    threshold: 0,
  };

  const io = new IntersectionObserver(callback, options);
  els.forEach((el) => io.observe(el));
})

class TextAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.chars = this.DOM.el.innerHTML.trim().split("");
    this.DOM.el.innerHTML = this.splitText();
  }

  splitText() {
    return this.chars.reduce((accu, curr) => {
      curr = curr.replace(/\s+/, 'nbsp;');
      accu = `${accu}<span class='char'>${curr}</span>`
    },"");
  }

  animate() {
    this.DOM.el.classList.toggle("inview");
  }
}