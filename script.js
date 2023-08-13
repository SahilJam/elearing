let menubtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .top .navbar');
menubtn.onclick = () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
var swiper = new Swiper(".course-slider", {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".teacher-slider", {
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    pagination: {
          el: ".swiper-pagination",
          clickable: true,
    },
    breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});