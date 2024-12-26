// Initialize AOS
AOS.init({
    duration: 800, // Animation duration in ms
    easing: 'ease-in-out', // Animation easing
    once: true, // Animation triggers only once
});


// Toggle visibility of additional services
const viewMoreBtn = document.getElementById('view-more-btn');
const additionalServices = document.getElementById('additional-services');

viewMoreBtn.addEventListener('click', () => {
    additionalServices.classList.toggle('d-none');
    if (additionalServices.classList.contains('d-none')) {
        viewMoreBtn.textContent = 'View More Services';
    } else {
        viewMoreBtn.textContent = 'View Less Services';
    }
});

