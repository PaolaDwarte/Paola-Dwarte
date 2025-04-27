
// Script general
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');
const searchIcon = document.getElementById('searchIcon');
const cartIcon = document.getElementById('cartIcon');
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.style.right = menu.style.right === '0px' ? '-40%' : '0px';
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== menuIcon) {
    menu.style.right = '-40%';
  }
});

let pos = 0;
function moveCarousel(amount) {
  pos += amount;
  if (pos >= carousel.scrollWidth) pos = 0;
  if (pos < 0) pos = carousel.scrollWidth - carousel.offsetWidth;
  carousel.scrollTo({ left: pos, behavior: 'smooth' });
}
setInterval(() => moveCarousel(carousel.offsetWidth * 0.33), 2000);
prevBtn.addEventListener('click', () => moveCarousel(-carousel.offsetWidth * 0.33));
nextBtn.addEventListener('click', () => moveCarousel(carousel.offsetWidth * 0.33));
