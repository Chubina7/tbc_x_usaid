//// Bindings to the DOM elements
const overlay = document.querySelector(".header__burger_menu__overlay")
const sidebar = document.querySelector(".header__burger_menu__nav")
const xBtn = document.querySelector(".header__burger_menu__x_btn")
const burgerMenuIcon = document.querySelector(".header__burger_icon")

// Functions
const openingFunction = () => {
    overlay.style.display = "block"
    overlay.classList.add("fade-in");

    sidebar.classList.remove("slide-out");
    sidebar.classList.add("slide-in");
    sidebar.style.display = "flex"
}
const closingFunction = () => {
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    setTimeout(() => {
        overlay.style.display = "none";
        overlay.classList.remove("fade-out");
    }, 250);

    sidebar.classList.remove("slide-in");
    sidebar.classList.add("slide-out");
    setTimeout(() => {
        sidebar.style.display = "none";
        sidebar.classList.remove("fade-out");
    }, 250);
}

// Events
burgerMenuIcon.addEventListener("click", openingFunction)
overlay.addEventListener("click", closingFunction)
xBtn.addEventListener("click", closingFunction)