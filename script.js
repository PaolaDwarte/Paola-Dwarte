
const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menuIcon');
const searchIcon = document.getElementById('searchIcon');
const cartIcon = document.getElementById('cartIcon');
const cartPanel = document.getElementById('cart-panel');
const cartItemsUl = document.getElementById('cart-items');

let cart = [];

// Menú
menuIcon.addEventListener('click', e => {
  e.stopPropagation();
  menu.style.right = menu.style.right === '0px' ? '-40%' : '0px';
});

// Carrito panel toggle
cartIcon.addEventListener('click', e => {
  e.stopPropagation();
  cartPanel.style.right = cartPanel.style.right === '0px' ? '-300px' : '0px';
});

// Close panels on outside click
document.addEventListener('click', e => {
  if (!menu.contains(e.target) && e.target !== menuIcon) {
    menu.style.right = '-40%';
  }
  if (!cartPanel.contains(e.target) && e.target !== cartIcon) {
    cartPanel.style.right = '-300px';
  }
});

// Add to cart buttons
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', e => {
    const prod = e.target.closest('.product').dataset.name;
    cart.push(prod);
    renderCart();
  });
});

// Render cart items
function renderCart() {
  cartItemsUl.innerHTML = '';
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    const removeBtn = document.createElement('span');
    removeBtn.textContent = '✖';
    removeBtn.className = 'remove-item';
    removeBtn.addEventListener('click', () => {
      cart.splice(index, 1);
      renderCart();
    });
    li.appendChild(removeBtn);
    cartItemsUl.appendChild(li);
  });
}

// Carousel basic
const carousel = document.getElementById('carousel');
let pos = 0;
function moveCarousel(amount) {
  pos += amount;
  if (pos >= carousel.scrollWidth) pos = 0;
  if (pos < 0) pos = carousel.scrollWidth - carousel.offsetWidth;
  carousel.scrollTo({ left: pos, behavior: 'smooth' });
}
setInterval(() => moveCarousel(carousel.offsetWidth * 0.33), 2000);

// Prev/Next (if prevBtn and nextBtn exist)
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => moveCarousel(-carousel.offsetWidth * 0.33));
  nextBtn.addEventListener('click', () => moveCarousel(carousel.offsetWidth * 0.33));
}
