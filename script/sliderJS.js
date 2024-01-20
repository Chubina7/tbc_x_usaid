//// Bindings to the DOM elements
const groups = Array.from(document.querySelectorAll(".partners_section__slider_group"))
const dots = Array.from(document.querySelectorAll(".partners_section__dot"))
const leftArrow = document.querySelector(".partners_section__left_arrow")
const rightArrow = document.querySelector(".partners_section__right_arrow")


//// Manually change script

// functions
const isActiveDot = (id) => {
    dots.forEach(dot => dot.classList.remove("active_opacity"))
    dots[id].classList.add("active_opacity")
}
const isShownGroup = (id) => {
    groups.forEach(group => group.classList.remove("active_shown"))
    groups[id].classList.add("active_shown")
}

// Clicking on the dot
dots.forEach(dot => dot.addEventListener("click", (e) => {
    isActiveDot(dots.indexOf(e.target))
    isShownGroup(dots.indexOf(e.target))
}))

// Clicking on the arrows
rightArrow.addEventListener("click", () => console.log("clicked right one"))
leftArrow.addEventListener("click", () => console.log("clicked left one"))


//// Automatically change script
let current = 0
setInterval(() => {
    current = (current + 1) % 3
    isShownGroup(current)
    isActiveDot(current)
}, 2500);