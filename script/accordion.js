//// Bindings to the DOM elements
const questions = Array.from(document.querySelectorAll(".questions_section__question_bar"))
const answers = Array.from(document.querySelectorAll(".questions_section__answer_bar"))
const icons = Array.from(document.querySelectorAll(".questions_section__drop_icon"))

let activeItem = 0


questions.forEach(question => question.addEventListener("click", () => {
    activeItem = questions.indexOf(question)

    // If the is no active accordion item ...
    if (answers[activeItem].classList.length == 1) {
        // ... then make ONLY ONE active
        icons.forEach(icon => icon.src = "./assets/svg/drop_down.svg")
        answers.forEach(answer => answer.classList.remove("active_item"))
        icons[activeItem].src = "./assets/svg/drop_up.svg"
        answers[activeItem].classList.add("active_item")
    } // and else if the clicked item is already active ...
    else if (answers[activeItem].classList.length == 2) {
        // ... remove active classes for each ones
        answers.forEach(answer => answer.classList.remove("active_item"))
        icons.forEach(icon => icon.src = "./assets/svg/drop_down.svg")
    }
}))