// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('mainNavbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//             target.scrollIntoView({
//                 behavior: 'smooth'
//             });
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     const heroCarousel = document.getElementById('heroCarousel');
//     const indicators = document.querySelectorAll('.carousel-indicators-custom button');

//     if (heroCarousel && indicators.length > 0) {
//         heroCarousel.addEventListener('slide.bs.carousel', (event) => {
//             const index = event.to;
//             indicators.forEach((indicator, i) => {
//                 if (i === index) {
//                     indicator.classList.add('active');
//                 } else {
//                     indicator.classList.remove('active');
//                 }
//             });
//         });
//     }

//     const video = document.getElementById('heroVideo');
//     if (video) {
//         const playPromise = video.play();
//         if (playPromise !== undefined) {
//             playPromise.then(_ => {
//             }).catch(error => {
//                 console.log("Autoplay prevented:", error);
//             });
//         }
//     }

if ($('.testimonials-carousel').length > 0) {
    $('.testimonials-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
}

// Scroll Animation Observer (Fallback/Enhancement)

// Observe all elements with animation classes

// Prevent clicks inside mega-menu from closing the dropdown on mobile
