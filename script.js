// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Testimonials Carousel
const carousel = document.querySelector('.testimonials-carousel');

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    carousel.classList.add('active');
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});
carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});
carousel.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    carousel.scrollLeft = scrollLeft - walk;
});

// Optional: Touch support for mobile
carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
});
carousel.addEventListener('touchend', () => {
    isDown = false;
});
carousel.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
});
