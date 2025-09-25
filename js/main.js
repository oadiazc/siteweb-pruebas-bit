const slide = document.querySelector('.carrusel-slide');
const images = document.querySelectorAll('.carrusel-slide img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

// Función para actualizar la posición
function mostrarImagen() {
  slide.style.transform = `translateX(${-index * 100}%)`;
}

// Botón siguiente
nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  mostrarImagen();
});

// Botón anterior
prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  mostrarImagen();
});
