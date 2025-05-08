// Menu
const body = document.querySelector("body")
const navToggle = document.querySelector(".nav-toggle")
const nav = document.querySelector(".nav")
const logo = document.querySelector(".logo")
const overlay = document.querySelector(".overlay")

navToggle.addEventListener("click", () => {
  body.classList.toggle("no-scroll")
  logo.classList.toggle("none")
  navToggle.classList.toggle("nav-toggle--close")
  nav.classList.toggle("nav--visible")
  overlay.classList.toggle("overlay--visible")
})

// Caroussel
const heroes = document.querySelectorAll(".hero__item")
let nextImage = document.querySelector(".next-button")
let prevImage = document.querySelector(".prev-button")
let currentIndex = 0

function updateActiveImage(index) {
  heroes[currentIndex].classList.remove("active")
  currentIndex = index
  heroes[currentIndex].classList.add("active")
}

nextImage.addEventListener("click", () => {
  updateActiveImage((currentIndex + 1) % heroes.length)
})
prevImage.addEventListener("click", () => {
  updateActiveImage((currentIndex - 1 + heroes.length) % heroes.length)
})
nextImage.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault()
    updateActiveImage((currentIndex + 1) % heroes.length)
  }
})
prevImage.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault()
    updateActiveImage((currentIndex - 1 + heroes.length) % heroes.length)
  }
})
