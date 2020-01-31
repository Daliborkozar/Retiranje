const closeButton = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");
const openButton = document.querySelector(".open-btn")

closeButton.addEventListener("click", () => {
    nav.classList.remove("navigation-open")
})

openButton.addEventListener("click", () => {
    nav.classList.add("navigation-open")
})