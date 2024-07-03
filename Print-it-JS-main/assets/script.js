const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Variables

let currentSlideIndex = 0;

const bannerImg = document.getElementById("bannerImg");
const tagline = document.getElementById("tagline");
const ArrowLeft = document.querySelector(".arrow_left");
const ArrowRight = document.querySelector(".arrow_right");
const dotSelected = document.querySelectorAll(".dots");

//Event Listner for Arrows

/*let baliseArrowLeft = document.querySelector(".arrow_left").addEventListener("click", () => {
	console.log("left arrow clicked");
});

let baliseArrowRight = document.querySelector(".arrow_right").addEventListener("click", () => {
	console.log("right arrow clicked");
});*/

ArrowLeft.addEventListener("click", () => {
	if (currentSlideIndex > 0) {
		currentSlideIndex = currentSlideIndex - 1;
	}
	else {
		currentSlideIndex = slides.length - 1;
	}

	changeSlide();
	console.log("left arrow clicked")
});

ArrowRight.addEventListener("click", () => {
	if (currentSlideIndex < slides.length - 1) {
		currentSlideIndex = currentSlideIndex + 1;
	}
	else {
		currentSlideIndex = 0;
	}
	changeSlide();
	console.log("right arrow clicked")
});

// Functions

function changeSlide(index) {
	const slide = slides[currentSlideIndex];
	bannerImg.src = "./Print-it-JS-main/assets/images/slideshow/" + slide.image;
	tagline.innerHTML = slide.tagLine;


	dotSelected.forEach((dot, index) => {
		if (index === currentSlideIndex) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

/*function updateSlide(index) {
	const slide = slides[index];
	bannerImg.src = "./Print-it-JS-main/assets/images/slideshow/${slide.image}";
	tagline.innerHTML = slide.tagLine;
}

function updateSlide(currentSlideIndex) {
	currentSlideIndex = (currentSlideIndex < slides.length - 1) ? currentSlideIndex + 1 : 0;
}*/
