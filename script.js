const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e)=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-close": "fa-solid fa-bar")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","fa-solid-fa-bar");
});

const navSearch = document.getElementById("nav-search")

navSearch.addEventListener("click", (e) => {
    navSearch.classList.toggle("open")
});

const scrollRevealOption = {
    distance : "50px",
    origin: "bottom",
    duration: "1000",
};

ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
});


ScrollReveal().reveal(".header__content div", {
    duration: 1000,
    delay: 500,
});


ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 1000,
});


ScrollReveal().reveal(".header__image p", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".deals__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "right",
});


ScrollReveal().reveal(".about__card", {
    duration: 1000,
    interval: 500,
    delay: 500,
});

const swiper = new Swiper(".swiper", {
    loop: true,

});

