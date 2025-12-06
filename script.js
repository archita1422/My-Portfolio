let hamburger = document.getElementsByClassName("lines")[0];
let menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
