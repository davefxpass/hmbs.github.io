



document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const sideBarContainer = document.querySelector('.side-bar-container');

    // Function to show sidebar and swap buttons
    function openSidebar() {
        sideBarContainer.style.display = 'flex';
        menuButton.style.display = 'none';
        closeButton.style.display = 'block';
    }

    // Function to hide sidebar and swap buttons back
    function closeSidebar() {
        sideBarContainer.style.display = 'none';
        menuButton.style.display = 'block';
        closeButton.style.display = 'none';
    }

    // Add event listeners to buttons
    menuButton.addEventListener('click', openSidebar);
    closeButton.addEventListener('click', closeSidebar);
});

// Slide show code 

document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.simage');
    const totalSlides = slides.length;

    function showSlides(index) {
        if (index >= totalSlides) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = totalSlides - 1;
        } else {
            slideIndex = index;
        }

        slides.forEach((slide, i) => {
            slide.style.display = (i === slideIndex) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        showSlides(slideIndex + 1);
    }

    function prevSlide() {
        showSlides(slideIndex - 1);
    }

    function plusSlides(n) {
        showSlides(slideIndex + n);
    }

    // Automatic slideshow
    setInterval(nextSlide, 5000);

    // Show the first slide initially
    showSlides(slideIndex);

    // Attach event listeners for the navigation buttons
    document.querySelector('.prev').addEventListener('click', prevSlide);
    document.querySelector('.next').addEventListener('click', nextSlide);
});
