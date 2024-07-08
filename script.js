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

const tagline = document.getElementById("tagline");
const ArrowLeft = document.querySelector(".arrow_left");
const ArrowRight = document.querySelector(".arrow_right");
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.getElementById("bannerImg");


//Event Listner for Arrows

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

// Functions to change slide

function changeSlide() {
	const slide = slides[currentSlideIndex]; 
	bannerImg.src = "assets/images/slideshow/" + slide.image;
	tagline.innerHTML = slide.tagLine;
	updateDots();
}

// Function to create the dots

function createDots() {
	dotsContainer.innerHTML='';
	slides.forEach((slide,index)=>{
		const dot = document.createElement("div");
		dot.classList.add("dot");
		if (index === currentSlideIndex){
			dot.classList.add("dot_selected");
		}
		dotsContainer.appendChild(dot);
		dot.addEventListener("click",()=>{
			currentSlideIndex = index;
			changeSlide();
		});
	})
}

// Function to update the dots

function updateDots(){
	const dots = dotsContainer.querySelectorAll(".dot");
	dots.forEach((dot,index)=>{
		if (index === currentSlideIndex){
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

// Call the function

changeSlide();
createDots();
updateDots();
