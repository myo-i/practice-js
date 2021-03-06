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

// ここから模範解答
// document.addEventListener('DOMContentLoaded', function() {
//   const content = document.querySelectorAll('.content');
//   const callback = function(entries, observer) {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const ta = new TextAnimation(entry.target);
//         ta.animate();
//         observer.unobserve(entry.target);
//       }
//     });
//   };

//   const options = {
//     root: null,
//     rootMarigin: "0px",
//     threshold: 0,
//   };

//   const io = new IntersectionObserver(callback, options);
//   content.forEach((el) => io.observe(el));
// })

// class TextAnimation {
//   constructor(el) {
//     this.DOM = {};
//     this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
//     this.chars = this.DOM.el.innerHTML.trim().split("");
//     this.DOM.el.innerHTML = this.splitText();
//   }

//   splitText() {
//     return this.chars.reduce((accu, curr) => {
//       curr = curr.replace(/\s+/, "&nbsp;");
//       return accu = `${accu}<span class="char">${curr}</span>`;
//     },"");
//   }

//   animate() {
//     this.DOM.el.classList.toggle("inview");
//   }
// }
// ここから模範解答

document.addEventListener('DOMContentLoaded', function() {
  const obj = document.querySelectorAll('.content');
  const callback = function(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const te = new TextAnimation(entry.target);
        te.animate();
        observer.unobserve();
      }else {
      }
    });
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0,
  };

  const io = new IntersectionObserver(callback, options);
  obj.forEach((el) => io.observe(el));
})

class TextAnimation {
  constructor(el) {
    this.DOM = {};
    this.DOM.el = el instanceof HTMLElement ? el : document.querySelector(el);
    this.moji = this.DOM.el.innerHTML.trim().split("");
    
    this.DOM.el.innerHTML = this.splitText();
  }

  animate() {
    this.DOM.el.classList.toggle('inview');
  }

  splitText() {
    return this.moji.reduce((accu, curr) => {
      curr = curr.replace(/\s+/, '&nbsp;');
      return `${accu}<span class="moji">${curr}</span>`;
    },"");
  }
}