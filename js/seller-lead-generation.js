// Sticky header scroll shadow
(function () {
    var header = document.getElementById('slg-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
})();

// Testimonials slider
(function () {
    new Swiper('.slg-testimonials-slider', {
        slidesPerView: 2.35,
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: '.slg-testimonials-next',
            prevEl: '.slg-testimonials-prev',
        },
        pagination: {
            el: '.slg-testimonials-dots',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>';
            },
        },
        breakpoints: {
            0:    { slidesPerView: 1.1,  spaceBetween: 16 },
            768:  { slidesPerView: 2,    spaceBetween: 24 },
            1200: { slidesPerView: 2,    spaceBetween: 24 },
            1400: { slidesPerView: 2.35, spaceBetween: 24 },
        },
    });
})();

// KPI slider — activates at ≤1099px
(function () {
    var kpiSwiper = null;

    function initKpiSlider() {
        if (window.innerWidth <= 1099) {
            if (!kpiSwiper) {
                kpiSwiper = new Swiper('.slg-kpi-slider', {
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
            if (kpiSwiper) {
                kpiSwiper.destroy(true, true);
                kpiSwiper = null;
            }
        }
    }

    initKpiSlider();
    window.addEventListener('resize', initKpiSlider);
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
