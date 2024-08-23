document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;

    const slides = document.querySelectorAll('.box-container .box');
    const totalSlides = slides.length;
    const boxContainer = document.querySelector('.box-container');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');


    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }
        const offset = -currentSlide * 50; // Move to the current slide
        boxContainer.style.transform = `translateX(${offset}%)`;
    }
    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });


    document.querySelector('.next').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });

    document.querySelector('.prev').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });


    showSlide(currentSlide);
});








document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and image elements
    const buttons = document.querySelectorAll('.button');
    const images = document.querySelectorAll('.image');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons and add it to the clicked button
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Get the filter value
            const filter = this.getAttribute('data-filter');

            // Show or hide images based on the filter
            images.forEach(image => {
                if (filter === 'all') {
                    image.style.display = 'block';
                } else if (image.classList.contains(filter)) {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        });
    });
});







