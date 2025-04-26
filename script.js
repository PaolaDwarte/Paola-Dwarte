function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}
function toggleSearch() {
    alert('Buscar productos...');
}
function openCart() {
    alert('Carrito de compras');
}
function navigate(section) {
    alert('Navegando a ' + section);
}
let colors = ['#ff00ff', '#00ffff', '#ff9900', '#00ff00', '#ff0000'];
let currentColor = 0;
setInterval(() => {
    const title = document.getElementById('destacadas-title');
    title.style.color = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
}, 2000);
