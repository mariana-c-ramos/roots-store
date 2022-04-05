const hamburguer = document.querySelector(".hamburguer");
const navBar = document.querySelector(".nav__menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".nav__item").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navBar.classList.remove("active");
}))