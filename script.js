// script.js
const slider = document.querySelector('.slider');
const sliderWidth = slider.clientWidth;
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3;
    slider.style.transform = `translateX(-${currentIndex * sliderWidth}px)`;
}

setInterval(nextSlide, 5000);

slider.addEventListener('mouseenter', () => {
    clearInterval(intervalId);
});

slider.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 5000);
});

let intervalId = setInterval(nextSlide, 5000);