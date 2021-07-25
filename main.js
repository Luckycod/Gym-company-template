const menu = document.querySelector('#mobile__menu');
const menuLink = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
const body = document.querySelector('body');

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');
    body.classList.toggle('active');
}

addEventListener('click', mobileMenu);