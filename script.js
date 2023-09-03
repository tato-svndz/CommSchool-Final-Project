// Slider 
let slideIndex = 1; 
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
showSlides(slideIndex);


// Tabs
let tabButtons = document.querySelectorAll('.tab-btn');
let tabContent = document.querySelectorAll('.tab-content');
function tabBtn(index) {
    for (let content of tabContent) {
        content.style.display = "none";
        if (content.id == index) {
            content.style.display = 'flex';
        } 
    }
    for (let btn of tabButtons) {
        btn.classList.remove('active');
    }
    tabButtons[index].classList.add('active');
    for (let button of tabButtons) {
        if (!button.classList.contains("active")){
            button.style.borderBottom = "1px solid #DEE2E6";
        } else {
            button.style.borderBottom = 'none';
        }
    }
}
tabBtn(0); //default