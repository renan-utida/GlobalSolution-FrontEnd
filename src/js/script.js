//-----------------------------------------------------//
//Funcionalidade Menu
const btnMenu = document.getElementById('btn-menu');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);
btnMenu.addEventListener('touchstart', toggleMenu);

//-----------------------------------------------------//
// Exibe uma mensagem de boas-vindas
alert("Bem-vindo!");


//----------------------------------------------------//
//SLIDESHOW AUTOMATIO E MANUAL
let slideIndex = 1;
let slideInterval;

// Inicializa o slideshow
showSlides(slideIndex);

// Define o intervalo para mudar automaticamente as imagens a cada 4 segundos
startAutoSlide();

// Função para avançar/navegar para slides anteriores
function plusSlides(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex += n);
  startAutoSlide();
}

// Função para ir para um slide específico
function currentSlide(n) {
  clearInterval(slideInterval);
  showSlides(slideIndex = n);
  startAutoSlide();
}

// Função para mostrar o slide atual
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Função para iniciar o autoplay
function startAutoSlide() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 4000); // Troca a imagem a cada 4 segundos
}


//-------------------------------------------------------------------//
//DOUBLE CLICK PARA CORES

let colors = ['#e9f8ff', '#cce0ef', '#add8e6'];
let colorIndex = 0;

document.body.style.backgroundColor = colors[colorIndex]; // Define a cor inicial

document.body.addEventListener('dblclick', function() {
    colorIndex++;
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    document.body.style.backgroundColor = colors[colorIndex];
});