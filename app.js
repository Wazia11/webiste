app.js
========================================================================================================================================================
  
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const menuLinkss = document.querySelector('.navbarr__menu')
const menuLinksss = document.querySelector('.navbarP__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
