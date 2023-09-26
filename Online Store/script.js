const menuActive = document.querySelector(".banner__menu");
const burger = document.querySelector(".btn-logos-menu");
const menuClose = document.querySelector(".menu-close");

function toggleMenu() {
    menuActive.classList.toggle("hidden-menu");
}

burger.addEventListener('click', toggleMenu);
menuClose.addEventListener("click", toggleMenu);
