
let slidePosition = 0;
const slides = document.getElementsByClassName('content-box');
const totalSlides = slides.length;

document.
  getElementById('carousel-button--next')
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document.
  getElementById('carousel-button--prev')
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('content-box--visible');
    slide.classList.add('content-box--hidden');
  }

  slides[slidePosition].classList.add('content-box--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}