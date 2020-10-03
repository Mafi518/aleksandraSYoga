'use strict';

$(document).ready(function () {
    $('.feedback-list').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 560,
            settings: {
                arrows: false
            }
        }]
    });
});

var disableScroll = function disableScroll() {
    var paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.toggle('scroll-lock');
    document.body.style.paddingRight = paddingOffset;
};

var burger = document.querySelector('.menu-icon').addEventListener('click', function () {
    var _this = this;

    disableScroll();
    var menu = document.querySelector('.menu');
    this.classList.toggle('menu-icon__active');
    menu.classList.toggle('menu__active');

    var links = document.querySelectorAll('.menu__link').forEach(function (element) {
        element.onclick = function () {
            menu.classList.toggle('menu__active');
            _this.classList.toggle('menu-icon__active');
            disableScroll();
        };
    });
});

var autorizationBtn = document.querySelectorAll('.registrationBtn').forEach(function (element) {
    var forms = document.querySelector('.autorization-registration-forgot__form');
    var formBg = document.querySelector('.autorization-registration-forgot__bg');
    element.addEventListener('click', function () {

        var registrationForm = document.querySelector('.registration-form');
        var registration = document.querySelector('#registration');

        forms.classList.add('forms-active');
        formBg.classList.add('bg-active');
        registrationForm.classList.add('form-active');
        registration.parentNode.classList.add('label-active');
    });
    formBg.addEventListener('click', function () {
        forms.classList.remove('forms-active');
        formBg.classList.remove('bg-active');
    });

    var inp = document.querySelectorAll('.radio').forEach(function (element) {

        var autorizationForm = document.querySelector('.autorization-form');
        var registrationForm = document.querySelector('.registration-form');
        var forgotForm = document.querySelector('.forgot');
        element.addEventListener('click', function () {
            if (autorization.checked) {
                autorization.parentNode.classList.add('label-active');
                forgotForm.classList.remove('form-active');
                registrationForm.classList.remove('form-active');
                autorizationForm.classList.add('form-active');
                registration.parentNode.classList.remove('label-active');
            } else if (registration.checked) {
                registration.parentNode.classList.add('label-active');
                forgotForm.classList.remove('form-active');
                registrationForm.classList.add('form-active');
                autorizationForm.classList.remove('form-active');
                autorization.parentNode.classList.remove('label-active');
            }
        });
        var forgotPass = document.querySelector('.forgot-pass').addEventListener('click', function () {
            forgotForm.classList.add('form-active');
            autorization.parentNode.classList.remove('label-active');
            autorizationForm.classList.remove('form-active');
        });
    });
});

// let burger = document.querySelector('.menu-icon').addEventListener('click', function() {
//     disableScroll()
//     let menu = document.querySelector('.menu')
//     this.classList.toggle('menu-icon__active')
//     menu.classList.toggle('menu__active')

//     let links = document.querySelectorAll('.menu__item').forEach(element => {
//         element.onclick = () => {
//             menu.classList.toggle('menu__active')
//             this.classList.toggle('menu-icon__active')
//             disableScroll()
//         }
//     })
// })