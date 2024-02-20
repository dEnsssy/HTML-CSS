const menuActive = document.querySelector(".banner__menu");
const burger = document.querySelector(".btn-logos-menu");
const menuClose = document.querySelector(".menu-close");

function toggleMenu() {
    menuActive.classList.toggle("hidden-menu");
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener("click", toggleMenu);

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});