const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');
const topNav = document.getElementById('topNav');

menuIcon.addEventListener('mouseenter', () => menu.style.right = '0');
menu.addEventListener('mouseleave', () => menu.style.right = '-40%');
menuIcon.addEventListener('click', () => {
  menu.style.right = menu.style.right === '0px' ? '-40%' : '0px';
});

let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  topNav.style.top = window.scrollY < lastY ? '0' : '-60px';
  lastY = window.scrollY;
});

// Carousel auto scroll
const carousel = document.getElementById('carousel');
let pos = 0;
setInterval(() => {
  pos += carousel.offsetWidth * 0.33;
  if (pos >= carousel.scrollWidth) pos = 0;
  carousel.scrollTo({ left: pos, behavior: 'smooth' });
}, 2000);
