var navMain = document.querySelector('.main-nav__wrapper');
var navOpen = document.querySelector('.main-nav__open');
var navClose = document.querySelector('.main-nav__close');

navMain.classList.remove('main-nav--nojs');

navOpen.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navOpen.classList.add('main-nav__open--hide');
  }
});

navClose.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navOpen.classList.remove('main-nav__open--hide');
  }
});
