// Slider 
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}
function slideButton(n) {
    showSlides(slideIndex += n);
}
function nextSlide() {
    
}

let slideIndex = 1; 
showSlides(slideIndex);