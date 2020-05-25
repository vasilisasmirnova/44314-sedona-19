var navMain = document.querySelector('.main-nav__wrapper');
var navOpen = document.querySelector('.main-nav__open');
var navClose = document.querySelector('.main-nav__close');

navMain.classList.remove('main-nav__wrapper--nojs');

navOpen.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__wrapper--closed')) {
    navMain.classList.remove('main-nav__wrapper--closed');
    navMain.classList.add('main-nav__wrapper--opened');
    navOpen.classList.add('main-nav__hide');
  }
});

navClose.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav__wrapper--opened')) {
    navMain.classList.add('main-nav__wrapper--closed');
    navMain.classList.remove('main-nav__wrapper--opened');
    navOpen.classList.remove('main-nav__hide');
  }
});
