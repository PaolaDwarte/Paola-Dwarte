
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');
const topNav = document.getElementById('topNav');
const searchIcon = document.getElementById('searchIcon');
const cartIcon = document.getElementById('cartIcon');
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let searchField = null;

// Menú desplegable
menuIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  menu.style.right = menu.style.right === '0px' ? '-40%' : '0px';
});

// Campo de búsqueda
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

// Cerrar menú o campo de búsqueda si se hace clic fuera
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

// Carousel auto scroll
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

// — NPC: mantené TODO lo que ya tienes arriba (menú, buscador, carrusel)… luego pega esto al final —

// — Cambios nuevos: tap/swipe para los sliders de imagen de los bolsos —
document.querySelectorAll('.bolso-img').forEach(slider => {
  const images = slider.querySelectorAll('img');
  if (images.length < 2) return;  // Solo si hay más de una imagen

  let current = 0;
  // Inicializa opacidades y transición
  images.forEach((img, i) => {
    img.style.opacity = i === 0 ? '1' : '0';
    img.style.transition = 'opacity 0.4s ease-in-out';
  });

  // Tap/click para alternar imagen
  slider.addEventListener('click', () => {
    images[current].style.opacity = '0';
    current = (current + 1) % images.length;
    images[current].style.opacity = '1';
  });

  // Swipe (touch) para alternar imagen
  let startX = 0;
  slider.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });
  slider.addEventListener('touchend', e => {
    const endX = e.changedTouches[0].clientX;
    if (Math.abs(endX - startX) > 30) {
      images[current].style.opacity = '0';
      current = (current + 1) % images.length;
      images[current].style.opacity = '1';
    }
  });
});

// — Cambio aleatorio de color para el título Destacadas —
(function() {
  const destTitle = document.querySelector('.dest-title');
  if (!destTitle) return;

  // genera un color hexadecimal aleatorio
  function randomColor() {
    return '#'+Math.floor(Math.random()*0xFFFFFF).toString(16).padStart(6,'0');
  }

  // aplica un nuevo color cada vez
  function tick() {
    destTitle.style.color = randomColor();
  }

  // Al cargar por primera vez y luego cada 2s (igual que tu carrusel)
  tick();
  setInterval(tick, 2000);
})();

