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

document.addEventListener('DOMContentLoaded', function () {
    const sectionLinks = document.querySelectorAll('nav a');

    sectionLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Remove the 'highlight' class from all sections
            const sections = document.querySelectorAll('.card');
            sections.forEach(function (section) {
                section.classList.remove('highlight');
            });

            // Add the 'highlight' class to the target section
            const targetSectionId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);
            targetSection.classList.add('highlight');

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
