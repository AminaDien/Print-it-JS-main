const slides = [
	{
	  "image": "./assets/images/slideshow/slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
const banner = document.querySelector('#banner');
const arrowLeft = document.querySelector("#banner .arrow_left");
const arrowRight = document.querySelector("#banner .arrow_right");
const bannerImage = document.querySelector('#banner > img');
const bannerText = document.querySelector('#banner > p');
const dotsContainer = document.querySelector(".dots");
  
let currentSlideIndex = 0;
  
arrowRight.addEventListener("click", function(event) {
	console.log("Clic sur le bouton droit");
	nextSlide();
  });
  
arrowLeft.addEventListener("click", function(event) {
	console.log("Clic sur le bouton gauche");
	previousSlide();
  });
  
slides.forEach((slide, index) => {
	const dot = document.createElement("span");
	dot.classList.add("dot");
  
	if (index === 0) {
	  dot.classList.add("dot_selected");
	}
  
	dotsContainer.appendChild(dot);
  });
  
function previousSlide() {
	console.log("Changement vers la diapositive précédente");
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
	  currentSlideIndex = slides.length - 1;
	}
	showSlide(currentSlideIndex);
	updateActiveDot(currentSlideIndex);
  }
  
function nextSlide() {
	console.log("Changement vers la diapositive suivante");
	currentSlideIndex++;
	if (currentSlideIndex >= slides.length) {
	  currentSlideIndex = 0;
	}
	showSlide(currentSlideIndex);
	updateActiveDot(currentSlideIndex);
  }
  
function showSlide(index) {
	const slide = slides[index];
	bannerImage.src = slide.image;
	bannerText.innerHTML = slide.tagLine;
  }
  
function updateActiveDot(index) {
	console.log("Mise à jour du point actif", index);
	const dots = dotsContainer.querySelectorAll(".dot");
	dots.forEach((dot, dotIndex) => {
	  if (dotIndex === index) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
  }