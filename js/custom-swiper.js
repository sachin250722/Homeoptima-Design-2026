
// ================================================
//  What We Do Swiper (≤ 1099px)
// ================================================
let wwdSwiper = null;
const wwdSwiperEl = document.querySelector('.wwd-swiper');

function initWwdSwiper() {
    if (!wwdSwiperEl) return;
    const isSlider = window.innerWidth <= 1099;
    if (isSlider && !wwdSwiper) {
        wwdSwiper = new Swiper(wwdSwiperEl, {
            grabCursor: true,
            navigation: {
                prevEl: '.wwd-prev',
                nextEl: '.wwd-next',
            },
            pagination: {
                el: '.wwd-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                },
            },
        });
    } else if (!isSlider && wwdSwiper) {
        wwdSwiper.destroy(true, true);
        wwdSwiper = null;
    }
}

initWwdSwiper();
window.addEventListener('resize', initWwdSwiper);

// ================================================
//  Pre-Construction: Floorplans Swiper (≤ 1099px)
// ================================================
let pcFpSwiper = null;
const pcFpSwiperEl = document.querySelector('.pc-fp-swiper');

function initPcFpSwiper() {
    if (!pcFpSwiperEl) return;
    const isSlider = window.innerWidth <= 1099;
    if (isSlider && !pcFpSwiper) {
        pcFpSwiper = new Swiper(pcFpSwiperEl, {
            grabCursor: true,
            navigation: {
                prevEl: '.pc-fp-prev',
                nextEl: '.pc-fp-next',
            },
            pagination: {
                el: '.pc-fp-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                },
            },
        });
    } else if (!isSlider && pcFpSwiper) {
        pcFpSwiper.destroy(true, true);
        pcFpSwiper = null;
    }
}

initPcFpSwiper();
window.addEventListener('resize', initPcFpSwiper);

// ================================================
//  Pre-Construction: Benefits Swiper (≤ 1099px)
// ================================================
let ftbBenefitsSwiper = null;
const ftbBenefitsSwiperEl = document.querySelector('.ftb-benefits-swiper');

function initFtbBenefitsSwiper() {
    if (!ftbBenefitsSwiperEl) return;
    const isSlider = window.innerWidth <= 1099;
    if (isSlider && !ftbBenefitsSwiper) {
        ftbBenefitsSwiper = new Swiper(ftbBenefitsSwiperEl, {
            grabCursor: true,
            navigation: {
                prevEl: '.ftb-benefits-prev',
                nextEl: '.ftb-benefits-next',
            },
            pagination: {
                el: '.ftb-benefits-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                },
            },
        });
    } else if (!isSlider && ftbBenefitsSwiper) {
        ftbBenefitsSwiper.destroy(true, true);
        ftbBenefitsSwiper = null;
    }
}

initFtbBenefitsSwiper();
window.addEventListener('resize', initFtbBenefitsSwiper);

// ================================================
//  Why Choose Us Swiper (≤ 767px)
// ================================================
let whyUsSwiper = null;
const whyUsSwiperEl = document.querySelector('.why-us-swiper');

function initWhyUsSwiper() {
    if (!whyUsSwiperEl) return;
    const isSlider = window.innerWidth <= 1099;
    if (isSlider && !whyUsSwiper) {
        whyUsSwiper = new Swiper(whyUsSwiperEl, {
            grabCursor: true,
            navigation: {
                prevEl: '.why-us-prev',
                nextEl: '.why-us-next',
            },
            pagination: {
                el: '.why-us-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
            breakpoints: {
                0: { slidesPerView: 1.2, spaceBetween: 16 },
                768: { slidesPerView: 2.5, spaceBetween: 24 },
            },
        });
    } else if (!isSlider && whyUsSwiper) {
        whyUsSwiper.destroy(true, true);
        whyUsSwiper = null;
    }
}

initWhyUsSwiper();
window.addEventListener('resize', initWhyUsSwiper);

// ================================================
//  Neighborhood Stats Swiper (≤ 1099px)
// ================================================
window.hvhStatsSwiper = null;
const hvhStatsSwiperEl = document.querySelector('.hvh-lf-stats-swiper');

function initHvhStatsSwiper() {
    if (!hvhStatsSwiperEl) return;
    const isSlider = window.innerWidth <= 1099;
    if (isSlider && !window.hvhStatsSwiper) {
        window.hvhStatsSwiper = new Swiper(hvhStatsSwiperEl, {
            slidesPerView: 1,
            spaceBetween: 16,
            grabCursor: true,
            navigation: {
                prevEl: '.hvh-lf-stats-prev',
                nextEl: '.hvh-lf-stats-next',
            },
            pagination: {
                el: '.hvh-lf-stats-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
        });
    } else if (!isSlider && window.hvhStatsSwiper) {
        window.hvhStatsSwiper.destroy(true, true);
        window.hvhStatsSwiper = null;
    }
}

initHvhStatsSwiper();
window.addEventListener('resize', initHvhStatsSwiper);

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

// ================================================
//  Agent Mobile Swiper (≤ 991px)
// ================================================
let agentMobileSwiper = null;
const agentMobileSwiperEl = document.querySelector('.agent-mobile-swiper');

function initAgentMobileSwiper() {
    if (!agentMobileSwiperEl) return;
    const isMobile = window.innerWidth <= 991;
    if (isMobile && !agentMobileSwiper) {
        agentMobileSwiper = new Swiper(agentMobileSwiperEl, {
            slidesPerView: 1,
            spaceBetween: 16,
            loop: true,
            grabCursor: true,
            watchOverflow: false,
            navigation: {
                prevEl: '.agent-mob-prev',
                nextEl: '.agent-mob-next',
            },
            pagination: {
                el: '.agent-mob-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"></span>';
                },
            },
        });
    } else if (!isMobile && agentMobileSwiper) {
        agentMobileSwiper.destroy(true, true);
        agentMobileSwiper = null;
    }
}

initAgentMobileSwiper();
window.addEventListener('resize', initAgentMobileSwiper);

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
        0: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2.5,
        },
        1200: {
            slidesPerView: 4,
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
    slidesPerView: 1.2,
    spaceBetween: 16,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.listings-nav-next',
        prevEl: '.listings-nav-prev',
    },
    pagination: {
        el: '.listings-mobile-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        576: {
            slidesPerView: 1.5,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 3.2,
            spaceBetween: 24,
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
//  projects Listings Swiper
// ================================================
const projectsSwiper = new Swiper('.projects-swiper', {
    slidesPerView: 1.1,
    spaceBetween: 24,
    slidesPerGroup: 1,
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: '.pc-listings-next',
        prevEl: '.pc-listings-prev',
    },
    pagination: {
        el: '.listings-mobile-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        576: {
            slidesPerView: 1.5,
        },
        768: {
            slidesPerView: 2.2,
        },
        1200: {
            slidesPerView: 3,
        },
    },
    on: {
        slideChange: function () {
            const realIdx = this.realIndex;
            document.querySelectorAll('.pc-listings-prev').forEach(function (btn) {
                btn.classList.toggle('swiper-btn-hidden', realIdx === 0);
            });
        },
    },
});

// ================================================
//  Cities Swiper
//  Mobile (base): centeredSlides, active card taller via CSS
//  Desktop (≥1100px): slidesPerView:'auto', cards use fixed CSS widths
// ================================================
const citiesSwiper = new Swiper('.cities-swiper', {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    watchOverflow: false,
    grabCursor: true,
    navigation: {
        nextEl: '.cities-nav-next',
        prevEl: '.cities-nav-prev',
    },
    pagination: {
        el: '.cities-mobile-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        576: {
            slidesPerView: 1.4,
            spaceBetween: 16,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 24,
            centeredSlides: false,
        },
        1100: {
            slidesPerView: 'auto',
            spaceBetween: 24,
            centeredSlides: false,
        },
    },
});

// ================================================
//  Testimonials Swiper
// ================================================
// ================================================
//  Contact Agent: Agent Cards Swiper
// ================================================
const caAgentsSwiper = new Swiper('.ca-agents-swiper', {
    slidesPerView: 2,
    spaceBetween: 24,
    grabCursor: true,
    loop: true,
    navigation: {
        prevEl: '.ca-agents-prev',
        nextEl: '.ca-agents-next',
    },
    pagination: {
        el: '.ca-agents-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        0: { slidesPerView: 1.1, spaceBetween: 16 },
        576: { slidesPerView: 1.5, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 24 },
    },
});

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