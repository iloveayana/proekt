const iconBurger = document.querySelector(".icon-burger");
const headerList = document.querySelector(".header__list");

iconBurger.addEventListener("click", toggleMenu);

function toggleMenu() {
    headerList.classList.toggle("show");
}