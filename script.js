// let hamburger = document.getElementsByClassName("lines")[0];
// let menu = document.querySelector(".menu");

// hamburger.addEventListener("click", () => {
//     menu.classList.toggle("active");
// });
// let back=document.querySelector(".back");
// console.log(back);
// back.addEventListener("click", () => {
//     menu.classList.toggle("deactive");
// });

let hamburger = document.querySelector(".lines");
let menu = document.querySelector(".menu");
let back = document.querySelector(".back");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

back.addEventListener("click", () => {
    menu.classList.toggle("active");
});


