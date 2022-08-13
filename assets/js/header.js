const menuBurger = document.querySelector('.menu-burger'),
      mobileMenu = document.querySelector('.mobile-menu'),
      closeMenu = document.querySelector('.close-menu')


menuBurger.addEventListener('click', () => {
    mobileMenu.classList.add('showMobileMenu')
});
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('showMobileMenu')
});