// Sticky header scroll shadow
(function () {
    var header = document.getElementById('pcr-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
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

// Market Stats Line Chart (pcrMarketChart)
(function () {
    var canvas = document.getElementById('pcrMarketChart');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, 360);
    gradient.addColorStop(0, 'rgba(255,255,255,0.18)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'Sep 2014', 'Sep 2015', 'Sep 2016', 'Sep 2017',
                'Sep 2018', 'Sep 2019', 'Sep 2020', 'Sep 2021',
                'Sep 2022', 'Sep 2023', 'Sep 2024', 'Sep 2025'
            ],
            datasets: [{
                data: [
                    1870000, 1190000, 1240000, 1200000,
                    1560000, 1080000, 1760000, 1185000,
                    1760000, 1710000, 2130000, 1560000
                ],
                borderColor: '#ffffff',
                borderWidth: 2,
                backgroundColor: gradient,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 7,
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: 'rgba(255,255,255,0.4)',
                pointHoverBorderWidth: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(10,91,216,0.9)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: 'rgba(255,255,255,0.3)',
                    borderWidth: 1,
                    padding: 10,
                    callbacks: {
                        label: function (context) {
                            return '$' + context.parsed.y.toLocaleString('en-CA');
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255,255,255,0.1)',
                        drawBorder: false
                    },
                    border: { display: false },
                    ticks: {
                        color: 'rgba(255,255,255,0.7)',
                        font: { size: 12, family: 'Manrope, sans-serif' },
                        maxRotation: 35,
                        minRotation: 35
                    }
                },
                y: {
                    min: 500000,
                    max: 2200000,
                    afterBuildTicks: function (axis) {
                        axis.ticks = [500000, 1200000, 1550000, 1850000, 2000000, 2200000]
                            .map(function (v) { return { value: v }; });
                    },
                    grid: {
                        color: 'rgba(255,255,255,0.1)',
                        drawBorder: false
                    },
                    border: { display: false },
                    ticks: {
                        color: 'rgba(255,255,255,0.7)',
                        font: { size: 12, family: 'Manrope, sans-serif' },
                        callback: function (value) {
                            return value.toLocaleString('en-CA');
                        }
                    }
                }
            }
        }
    });
})();

// Equity Donut Chart (pcrEquityChart)
(function () {
    var canvas = document.getElementById('pcrEquityChart');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');

    var equityLabelPlugin = {
        id: 'equityLabels',
        afterDraw: function (chart) {
            var ctx = chart.ctx;
            var meta = chart.getDatasetMeta(0);
            var slices = [
                { name: 'Equity', pct: '32%' },
                { name: 'Mortgage', pct: '68%' }
            ];
            meta.data.forEach(function (arc, i) {
                var mid = (arc.startAngle + arc.endAngle) / 2;
                var r = (arc.outerRadius + arc.innerRadius) / 2;
                var x = arc.x + r * Math.cos(mid);
                var y = arc.y + r * Math.sin(mid);
                ctx.save();
                ctx.textAlign = 'center';
                ctx.fillStyle = 'rgba(255,255,255,0.95)';
                ctx.font = '7px Poppins, sans-serif';
                ctx.fillText(slices[i].name, x, y - 4);
                ctx.font = 'bold 10px Poppins, sans-serif';
                ctx.fillText(slices[i].pct, x, y + 7);
                ctx.restore();
            });
        }
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [32, 68],
                backgroundColor: ['#e9bd5f', '#2c6efe'],
                borderWidth: 0,
                hoverOffset: 0
            }]
        },
        options: {
            responsive: false,
            cutout: '50%',
            rotation: -130,
            plugins: {
                legend: { display: false },
                tooltip: { enabled: false }
            },
            animation: { duration: 600 }
        },
        plugins: [equityLabelPlugin]
    });
})();
