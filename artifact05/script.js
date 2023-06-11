var slideNumber = 1;
var automatic = null;
showSlide(slideNumber);
	
function nextSlide(n) {
	clearInterval(automatic);
	showSlide(slideNumber += n);
}

function currentSlide(n) {
	clearInterval(automatic);
	showSlide(slideNumber = n);
}

function autoSlide() { 
	clearInterval(automatic);
	
	let i;
	let slides = document.getElementsByClassName("Slides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideNumber++;
	if (slideNumber > slides.length) {slideNumber = 1}
	slides[slideNumber-1].style.display = "block";
	automatic = setInterval(autoSlide, 2000);
}

function showSlide(n) {
	let i;
	let slides = document.getElementsByClassName("Slides");
	if (n > slides.length) {slideNumber = 1}
	if (n < 1) {slideNumber = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideNumber-1].style.display = "block";
}

	




