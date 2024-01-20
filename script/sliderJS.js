// Bindings to the DOM elements
const items = Array.from(document.querySelectorAll(".partners_section__slider_group"))
const dots = Array.from(document.querySelectorAll(".partners_section__dot"))

const leftArrow = document.querySelector(".partners_section__left_arrow")
const rightArrow = document.querySelector(".partners_section__right_arrow")

dots.forEach(dot => dot.addEventListener("click", () => {
    dots.forEach(dot => dot.classList.remove("active"))
    dot.classList.add("active")
}))

rightArrow.addEventListener("click", () => {
})

console.log("");