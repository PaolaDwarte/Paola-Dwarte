
document.querySelectorAll('.bolso').forEach(card => {
  const images = card.querySelectorAll('img');
  let index = 0;
  card.addEventListener('click', () => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  });
});
