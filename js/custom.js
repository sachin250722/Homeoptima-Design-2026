// ================================================
//  Featured Listings Swiper
// ================================================
const listingsSwiper = new Swiper('.listings-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '#listingsNext',
    },
    breakpoints: {
        576: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
        },
        1200: {
            slidesPerView: 3.2,
        },
    },
});

// ================================================
//  Cities Swiper
// ================================================
const citiesSwiper = new Swiper('.cities-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '#citiesNext',
    },
    breakpoints: {
        576: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
        },
        1200: {
            slidesPerView: 3.5,
        },
    },
});

// ================================================
//  Testimonials Swiper
// ================================================
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    navigation: {
        prevEl: '#testimonialPrev',
        nextEl: '#testimonialNext',
    },
    breakpoints: {
        576: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 1.5,
        },
        992: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 2.3,
        },
    },
});
