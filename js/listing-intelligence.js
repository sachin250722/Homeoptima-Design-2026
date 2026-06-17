// Features slider — activates at ≤1099px
(function () {
    var swiper = null;

    function initFeaturesSlider() {
        if (window.innerWidth <= 1099) {
            if (!swiper) {
                swiper = new Swiper('.li-features-slider', {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                    grabCursor: true,
                    breakpoints: {
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20
                        }
                    }
                });
            }
        } else {
            if (swiper) {
                swiper.destroy(true, true);
                swiper = null;
            }
        }
    }

    initFeaturesSlider();
    window.addEventListener('resize', initFeaturesSlider);
})();

// Deep features slider — mobile only ≤767px
(function () {
    var dfSwiper = null;
    function initDfSlider() {
        if (window.innerWidth <= 767) {
            if (!dfSwiper) {
                dfSwiper = new Swiper('.li-deepfeat-slider', {
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                    grabCursor: true,
                    navigation: { nextEl: '.li-deepfeat__next', prevEl: '.li-deepfeat__prev' },
                    pagination: {
                        el: '.li-deepfeat__dots',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '"></span>';
                        }
                    }
                });
            }
        } else {
            if (dfSwiper) { dfSwiper.destroy(true, true); dfSwiper = null; }
        }
    }
    initDfSlider();
    window.addEventListener('resize', initDfSlider);
})();

// Testimonials slider
(function () {
    new Swiper('.li-testimonials-slider', {
        slidesPerView: 2.35,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.li-testimonials-next',
            prevEl: '.li-testimonials-prev',
        },
        pagination: {
            el: '.li-testimonials-dots',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        breakpoints: {
            0:    { slidesPerView: 1.1 },
            768:  { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 2, spaceBetween: 24 },
            1400: { slidesPerView: 2.35, spaceBetween: 24 },
        },
    });
})();

// Price stat cards — horizontal swipe on mobile ≤767px
(function () {
    var statSwiper = null;
    function initStatSlider() {
        if (window.innerWidth <= 767) {
            if (!statSwiper) {
                statSwiper = new Swiper('.li-price__stats-slider', {
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                    grabCursor: true,
                });
            }
        } else {
            if (statSwiper) { statSwiper.destroy(true, true); statSwiper = null; }
        }
    }
    initStatSlider();
    window.addEventListener('resize', initStatSlider);
})();

// Live Sample Report mobile sliders (signals + activity table) — active at ≤767px
(function () {
    var sigSwiper = null;
    var actSwiper = null;

    function initSampleSliders() {
        if (window.innerWidth <= 767) {
            if (!sigSwiper) {
                sigSwiper = new Swiper('.li-sample__signals-slider', {
                    slidesPerView: 1.15,
                    spaceBetween: 16,
                    grabCursor: true,
                    navigation: {
                        nextEl: '.li-sample__signals-next',
                        prevEl: '.li-sample__signals-prev',
                    },
                    pagination: {
                        el: '.li-sample__signals-dots',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '"></span>';
                        },
                    },
                });
            }
            if (!actSwiper) {
                actSwiper = new Swiper('.li-sample__activity-slider', {
                    slidesPerView: 'auto',
                    spaceBetween: 16,
                    grabCursor: true,
                    navigation: {
                        nextEl: '.li-sample__activity-next',
                        prevEl: '.li-sample__activity-prev',
                    },
                    pagination: {
                        el: '.li-sample__activity-dots',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '"></span>';
                        },
                    },
                });
            }
        } else {
            if (sigSwiper) { sigSwiper.destroy(true, true); sigSwiper = null; }
            if (actSwiper) { actSwiper.destroy(true, true); actSwiper = null; }
        }
    }

    initSampleSliders();
    window.addEventListener('resize', initSampleSliders);
})();

// Sticky header scroll shadow
(function () {
    var header = document.getElementById('li-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
})();

// Multi-step CTA form
(function () {
    var form = document.getElementById('li-cta-form');
    if (!form) return;

    var panels = form.querySelectorAll('.li-cta__step-panel');

    function showStep(n) {
        panels.forEach(function (panel) {
            panel.hidden = (parseInt(panel.dataset.step, 10) !== n);
        });
    }

    form.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-next],[data-prev],[data-reset]');
        if (!btn) return;
        if (btn.dataset.next)  showStep(parseInt(btn.dataset.next, 10));
        if (btn.dataset.prev)  showStep(parseInt(btn.dataset.prev, 10));
        if (btn.dataset.reset) showStep(parseInt(btn.dataset.reset, 10));
    });
})();

// AI Recs section — scroll parallax (desktop >=992px only)
(function () {
    var section = document.querySelector('.li-ai-recs');
    if (!section) return;

    var leftPanel  = section.querySelector('.li-ai-recs__left');
    var rightPanel = section.querySelector('.li-ai-recs__right');
    var blob       = section.querySelector('.li-ai-recs__blob');

    var ticking   = false;
    var isDesktop = false;

    function draw() {
        var rect     = section.getBoundingClientRect();
        var vh       = window.innerHeight;
        var progress = (rect.top + rect.height * 0.5) - vh * 0.5;

        if (leftPanel)  leftPanel.style.transform  = 'translateY(' + (progress * 0.18).toFixed(2) + 'px)';
        if (rightPanel) rightPanel.style.transform = 'translateY(' + (progress * -0.18).toFixed(2) + 'px)';
        if (blob)       blob.style.transform       = 'translateY(calc(-50% + ' + (progress * -0.25).toFixed(2) + 'px))';

        ticking = false;
    }

    function reset() {
        if (leftPanel)  leftPanel.style.transform  = '';
        if (rightPanel) rightPanel.style.transform = '';
        if (blob)       blob.style.transform       = 'translateY(-50%)';
    }

    function checkViewport() {
        var desktop = window.innerWidth > 991;
        if (desktop && !isDesktop) {
            isDesktop = true;
            draw();
        } else if (!desktop && isDesktop) {
            isDesktop = false;
            reset();
        }
    }

    window.addEventListener('scroll', function () {
        if (!isDesktop || ticking) return;
        ticking = true;
        requestAnimationFrame(draw);
    }, { passive: true });

    window.addEventListener('resize', checkViewport);
    checkViewport();
})();
