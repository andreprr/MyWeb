var typed = new Typed(".text",{
    strings:["Web Developer", "Software Engineer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuBtn.classList.toggle('active');
});