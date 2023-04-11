const burgerMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.header__list');
const overlay = document.createElement('div');
overlay.classList.add('overlay');


burgerMenu.addEventListener('click', function(){
    burgerMenu.classList.toggle('menu-open');
    burgerMenu.classList.toggle('header__burger-active');
    menu.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll');
    if (burgerMenu.classList.contains('menu-open')) {
      document.body.appendChild(overlay);
    } else {
      document.body.removeChild(overlay);
    }

});

const links = document.querySelectorAll('.header__links');

links.forEach(function(link) {
    link.addEventListener('click', function() {
    burgerMenu.classList.remove('menu-open');
    menu.classList.remove('menu-open');
    document.body.classList.remove('no-scroll');
    document.body.removeChild(overlay);
  });
});