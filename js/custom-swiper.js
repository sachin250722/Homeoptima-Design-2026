
// Agent section: photo fades (left), info slides (right), synced via realIndex
const agentPhotoSwiper = new Swiper(".agent-photo-swiper", {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    effect: "fade",
    fadeEffect: { crossFade: true },
    allowTouchMove: false,
});

const agentInfoSwiper = new Swiper(".agent-info-swiper", {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    navigation: {
        nextEl: "#agentNext",
        prevEl: "#agentPrev",
    },
    pagination: {
        el: "#agentPagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + ' agent-dot"></span>';
        },
    },
    on: {
        slideChange: function () {
            agentPhotoSwiper.slideToLoop(this.realIndex, 600);
        },
    },
});

const swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 2.35,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
    pagination: {
        el: ".custom-dots",
        clickable: true,

        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        0: {
            slidesPerView: 1.1,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
         1400: {
            slidesPerView: 2.35,
        }
    }
});

const swiper1 = new Swiper(".testimonial-swiper-1", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".next-btn",
        prevEl: ".prev-btn",
    },
    pagination: {
        el: ".custom-dots",
        clickable: true,

        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        360: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 2,
        },
         1400: {
            slidesPerView: 4,
        }
    }
});

// property-swiper
document.querySelectorAll('.mp-property-card').forEach(function (card) {
    const swiperEl = card.querySelector('.mp-property-swiper');
    const prevBtn  = card.querySelector('.mp-property-card__arrow--prev');
    const nextBtn  = card.querySelector('.mp-property-card__arrow--next');
    const pagEl    = card.querySelector('.swiper-pagination-custom');

    if (!swiperEl) return;

    new Swiper(swiperEl, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 500,
        navigation: {
            prevEl: prevBtn,
            nextEl: nextBtn,
        },
        pagination: {
            el: pagEl,
            clickable: true,
            bulletClass: 'mp-property-card__dot',
            bulletActiveClass: 'mp-property-card__dot--active',
        },
    });
});

// ================================================
//  Sold Properties Swiper
// ================================================
const soldSwiper = new Swiper('.sold-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '#soldNext',
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
//  Similar Properties Swiper (listing-details.html)
// ================================================
const similarSwiper = new Swiper('.similar-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '#similarNext',
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
//  Featured Listings Swiper
// ================================================
const featuredSwiper = new Swiper('.featured-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '#listingsNext',
        prevEl: '#listingsPrev',
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
    on: {
        slideChange: function () {
            const prevBtn = document.getElementById('listingsPrev');
            if (prevBtn) prevBtn.classList.toggle('swiper-btn-hidden', this.realIndex === 0);
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
        prevEl: '#citiesPrev',
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
    on: {
        slideChange: function () {
            const prevBtn = document.getElementById('citiesPrev');
            if (prevBtn) prevBtn.classList.toggle('swiper-btn-hidden', this.realIndex === 0);
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