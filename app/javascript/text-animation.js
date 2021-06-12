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
