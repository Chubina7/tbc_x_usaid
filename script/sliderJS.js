//// Bindings to the DOM elements
const items = document.querySelector(".partners_section__slider_items")
const groups = Array.from(document.querySelectorAll(".partners_section__slider_group"))
const dots = Array.from(document.querySelectorAll(".partners_section__dot"))
const leftArrow = document.querySelector(".partners_section__left_arrow")
const rightArrow = document.querySelector(".partners_section__right_arrow")

// Current shown
let currentShownGroup = 0

//// Manually changeing script

// functions
const isActiveDot = (id) => {
    dots.forEach(dot => dot.classList.remove("active_opacity"))
    dots[id].classList.add("active_opacity")
}
const isShownGroup = (id) => {
    groups.forEach(group => group.classList.remove("active_shown"))
    groups[id].classList.add("active_shown")
}
const transformation = (current) => {
    items.style.transform = `translateX(-${current * 100}%)`
}

// Clicking on the dot
dots.forEach(dot => dot.addEventListener("click", (e) => {
    currentShownGroup = dots.indexOf(e.target)
    isActiveDot(currentShownGroup)
    isShownGroup(currentShownGroup)
    transformation(currentShownGroup)
}))

// Clicking on the arrows
rightArrow.addEventListener("click", () => {
    currentShownGroup = (currentShownGroup + 1) % 3
    isActiveDot(currentShownGroup)
    isShownGroup(currentShownGroup)
    transformation(currentShownGroup)
})
leftArrow.addEventListener("click", () => {
    currentShownGroup = (currentShownGroup === 0) ? 2 : currentShownGroup - 1;
    isActiveDot(currentShownGroup)
    isShownGroup(currentShownGroup)
    transformation(currentShownGroup)
})

//// Automatically changeing script
setInterval(() => {
    currentShownGroup = (currentShownGroup + 1) % 3
    isShownGroup(currentShownGroup)
    isActiveDot(currentShownGroup)
    items.style.transform = `translateX(-${currentShownGroup * 100}%)`
}, 3000);