const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');
const topNav = document.getElementById('topNav');
const searchIcon = document.getElementById('searchIcon');
const cartIcon = document.getElementById('cartIcon');
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let searchField = null;

menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.style.right = menu.style.right === '0px' ? '-40%' : '0px';
});

searchIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!searchField) {
    searchField = document.createElement('input');
    searchField.type = 'text';
    searchField.placeholder = 'Buscar artículo...';
    searchField.style.position = 'fixed';
    searchField.style.top = '60px';
    searchField.style.left = '10px';
    searchField.style.zIndex = '1001';
    searchField.style.padding = '10px';
    searchField.style.width = '80%';
    searchField.style.fontSize = '20px';
    document.body.appendChild(searchField);
    searchField.focus();
  } else {
    document.body.removeChild(searchField);
    searchField = null;
  }
});

document.addEventListener('click', (e) => {
  if (menu.style.right === '0px' && !menu.contains(e.target) && e.target !== menuIcon) {
    menu.style.right = '-40%';
  }
  if (searchField && e.target !== searchField && e.target !== searchIcon) {
    document.body.removeChild(searchField);
    searchField = null;
  }
});

let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  topNav.style.top = window.scrollY < lastY ? '0' : '-60px';
  lastY = window.scrollY;
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
