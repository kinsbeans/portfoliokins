document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slideCount;
        slides[currentSlide].classList.add('active');
    }

    setInterval(nextSlide, 5000); // Change slide every 5 seconds
});

window.addEventListener('scroll', function() {
    const parallax = document.querySelector('body');
    let scrollPosition = window.pageYOffset;
    parallax.style.backgroundPositionY = -scrollPosition * 0.5 + 'px'; // Adjust the multiplier for the desired parallax effect speed
});
