//your JS code here. If required.
let currentSlide = 0;
const slides = document.querySelectorAll('.left-slide');
const totalSlides = slides.length;

document.querySelector('.up-button').addEventListener('click', ()=>{
	slides.[currentSlide].style.display = 'none';
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	slides[currentSlide].style.display = 'block';
});
document.querySelector('.down-button').addEventListener('click', ()=>{
	slides[currentSlide].style.display = 'none';
	currentSlide = (currentSlide + 1) % totalSlides;
	slides[currentSlide].style.display = 'block';
})