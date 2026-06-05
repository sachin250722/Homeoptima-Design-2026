if (jQuery('.dataTables_length select').length > 0) {
    jQuery('.dataTables_length select').selectpicker();
}

// ================================================================
//  Listing Details — Gallery Slider  (listing-details.html only)
// ================================================================
(function () {
    if (!document.body.classList.contains('ld-page')) return;
    if (!document.querySelector('.ld-gallery-main')) return;

    var images = [
        { src: 'images/listing-01.jpg', alt: 'Front Exterior' },
        { src: 'images/listing-02.jpg', alt: 'Kitchen' },
        { src: 'images/listing-03.jpg', alt: 'Living Room' },
        { src: 'images/listing-04.jpg', alt: 'Master Bedroom' },
        { src: 'images/listing-01.jpg', alt: 'Dining Room' },
        { src: 'images/listing-02.jpg', alt: 'Bathroom' },
        { src: 'images/listing-03.jpg', alt: 'Home Office' },
        { src: 'images/listing-04.jpg', alt: 'Backyard' },
        { src: 'images/listing-01.jpg', alt: 'Garage' },
        { src: 'images/listing-02.jpg', alt: 'Basement' },
        { src: 'images/listing-03.jpg', alt: 'Laundry Room' },
        { src: 'images/listing-04.jpg', alt: 'Side Yard' },
        { src: 'images/listing-01.jpg', alt: 'Porch' },
        { src: 'images/listing-02.jpg', alt: 'Deck' },
        { src: 'images/listing-03.jpg', alt: 'Garden' }
    ];

    var TOTAL          = images.length;
    var THUMBS_VISIBLE = 5;
    var currentIndex   = 0;
    var windowStart    = 0;

    var mainImg    = document.querySelector('.ld-gallery-main img');
    var sideImgs   = document.querySelectorAll('.ld-gallery-thumb img');
    var thumbItems = document.querySelectorAll('.ld-thumb-img');
    var dots       = document.querySelectorAll('.ld-thumb-dot');
    var countBadge = document.querySelector('.ld-count-badge');
    var btnPrev    = document.getElementById('ldThumbPrev');
    var btnNext    = document.getElementById('ldThumbNext');

    function mod(n, m) { return ((n % m) + m) % m; }

    function swapSrc(img, src, alt) {
        img.classList.add('ld-img-swap');
        setTimeout(function () {
            img.src = src;
            img.alt = alt || '';
            img.classList.remove('ld-img-swap');
        }, 150);
    }

    function render() {
        var cur = images[currentIndex];
        swapSrc(mainImg, cur.src, cur.alt);
        if (sideImgs[0]) { swapSrc(sideImgs[0], images[mod(currentIndex + 1, TOTAL)].src, images[mod(currentIndex + 1, TOTAL)].alt); }
        if (sideImgs[1]) { swapSrc(sideImgs[1], images[mod(currentIndex + 2, TOTAL)].src, images[mod(currentIndex + 2, TOTAL)].alt); }

        if (currentIndex < windowStart) {
            windowStart = currentIndex;
        } else if (currentIndex >= windowStart + THUMBS_VISIBLE) {
            windowStart = currentIndex - THUMBS_VISIBLE + 1;
        }

        thumbItems.forEach(function (thumb, i) {
            var imgIdx = windowStart + i;
            if (imgIdx >= TOTAL) {
                thumb.style.visibility = 'hidden';
            } else {
                thumb.style.visibility = 'visible';
                thumb.querySelector('img').src = images[imgIdx].src;
                thumb.classList.toggle('ld-thumb-img--active', imgIdx === currentIndex);
            }
        });

        var dotPage = Math.floor(currentIndex / THUMBS_VISIBLE);
        dots.forEach(function (dot, i) {
            dot.classList.toggle('ld-thumb-dot--active', i === dotPage);
            dot.classList.toggle('ld-thumb-dot--sm',     i !== dotPage);
        });

        if (countBadge) countBadge.textContent = (currentIndex + 1) + ' of ' + TOTAL;
    }

    function goTo(index) {
        currentIndex = mod(index, TOTAL);
        render();
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { goTo(currentIndex - 1); });
    if (btnNext) btnNext.addEventListener('click', function () { goTo(currentIndex + 1); });

    thumbItems.forEach(function (thumb, i) {
        thumb.addEventListener('click', function () {
            var imgIdx = windowStart + i;
            if (imgIdx < TOTAL) goTo(imgIdx);
        });
    });

    document.querySelectorAll('.ld-gallery-thumb').forEach(function (thumb, i) {
        thumb.addEventListener('click', function () {
            goTo(mod(currentIndex + i + 1, TOTAL));
        });
    });

    render();
})();

// ================================================================
//  Listing Details — Next Steps agent slider
// ================================================================
(function () {
    var slides  = document.querySelectorAll('.ld-agent-slide');
    if (!slides.length) return;
    var dots    = document.querySelectorAll('.ld-agent-dot');
    var btnPrev = document.getElementById('ldAgentPrev');
    var btnNext = document.getElementById('ldAgentNext');
    var current = 0;
    var TOTAL   = slides.length;

    function goTo(index) {
        current = ((index % TOTAL) + TOTAL) % TOTAL;
        slides.forEach(function (slide, i) {
            slide.classList.toggle('ld-agent-slide--active', i === current);
        });
        dots.forEach(function (dot, i) {
            dot.classList.toggle('ld-agent-dot--active', i === current);
        });
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { goTo(current - 1); });
    if (btnNext) btnNext.addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); });
    });
})();

// ================================================================
//  Listing Details — Neighborhood life-factors tabs
// ================================================================
(function () {
    var tabs = document.querySelectorAll('#ldNeighborhoodTabs .hvh-lf-tab');
    if (!tabs.length) return;
    var panels = document.querySelectorAll('.ld-neighborhood-section .hvh-lf-panel');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var target = tab.dataset.tab;
            tabs.forEach(function (t) {
                t.classList.remove('hvh-lf-tab--active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('hvh-lf-tab--active');
            tab.setAttribute('aria-selected', 'true');
            panels.forEach(function (panel) {
                panel.classList.toggle('hvh-lf-panel--active', panel.dataset.panel === target);
            });
        });
    });
})();

// ================================================================
//  Home Value Hub Results — Community Events Swiper
// ================================================================
(function () {
    var eventsEl = document.querySelector('.hvh-events-swiper');
    if (!eventsEl) return;
    var eventsSwiper = new Swiper(eventsEl, {
        slidesPerView: 'auto',
        spaceBetween: 24,
        grabCursor: true,
    });
    var eventsNext = document.getElementById('eventsNext');
    if (eventsNext) {
        eventsNext.addEventListener('click', function () { eventsSwiper.slideNext(); });
    }
})();

// ================================================================
//  Home Value Hub Results — Address item radio toggle
// ================================================================
(function () {
    var items = document.querySelectorAll('.hvh-hero-address-item');
    if (!items.length) return;

    items.forEach(function (item) {
        item.addEventListener('click', function () {
            items.forEach(function (el) {
                el.classList.remove('hvh-hero-address-item--active');
                var radio = el.querySelector('.hvh-hero-radio');
                if (radio) {
                    radio.classList.remove('hvh-hero-radio--selected');
                    var dot = radio.querySelector('.hvh-hero-radio-dot');
                    if (dot) dot.remove();
                }
            });
            item.classList.add('hvh-hero-address-item--active');
            var radio = item.querySelector('.hvh-hero-radio');
            if (radio) {
                radio.classList.add('hvh-hero-radio--selected');
                if (!radio.querySelector('.hvh-hero-radio-dot')) {
                    var dot = document.createElement('div');
                    dot.className = 'hvh-hero-radio-dot';
                    radio.appendChild(dot);
                }
            }
        });
    });
})();

// ================================================================
//  Home Value Hub Results — Life Factors tab switcher
// ================================================================
(function () {
    var tabs = document.querySelectorAll('.hvh-lf-section .hvh-lf-tab');
    if (!tabs.length) return;
    var panels = document.querySelectorAll('.hvh-lf-section .hvh-lf-panel');

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            var target = tab.dataset.tab;
            tabs.forEach(function (t) {
                t.classList.remove('hvh-lf-tab--active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('hvh-lf-tab--active');
            tab.setAttribute('aria-selected', 'true');
            panels.forEach(function (panel) {
                panel.classList.toggle('hvh-lf-panel--active', panel.dataset.panel === target);
            });
        });
    });
})();

// ================================================================
//  Home Value Hub Results — Next Steps agent slider
// ================================================================
(function () {
    var slides = document.querySelectorAll('.hvh-agent-slide');
    if (!slides.length) return;
    var dots    = document.querySelectorAll('.hvh-nav-dot');
    var btnPrev = document.querySelector('.hvh-nav-btn--prev');
    var btnNext = document.querySelector('.hvh-nav-btn--next');
    var current = 0;
    var TOTAL   = slides.length;

    function goTo(index) {
        current = ((index % TOTAL) + TOTAL) % TOTAL;
        slides.forEach(function (slide, i) {
            slide.classList.toggle('hvh-agent-slide--active', i === current);
        });
        dots.forEach(function (dot, i) {
            dot.classList.toggle('hvh-nav-dot--active', i === current);
        });
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { goTo(current - 1); });
    if (btnNext) btnNext.addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); });
    });
})();

// ================================================================
//  Real Estate Scorecard — Next Steps agent slider
// ================================================================
(function () {
    if (!document.body.classList.contains('resc-page')) return;
    var slides  = document.querySelectorAll('.resc-agent-slide');
    if (!slides.length) return;
    var dots    = document.querySelectorAll('.resc-agent-dot');
    var btnPrev = document.querySelector('.resc-agent-nav__arrow[aria-label="Previous"]');
    var btnNext = document.querySelector('.resc-agent-nav__arrow[aria-label="Next"]');
    var current = 0;
    var TOTAL   = slides.length;

    function goTo(index) {
        current = ((index % TOTAL) + TOTAL) % TOTAL;
        slides.forEach(function (slide, i) {
            slide.classList.toggle('resc-agent-slide--active', i === current);
        });
        dots.forEach(function (dot, i) {
            dot.classList.toggle('resc-agent-dot--active', i === current);
        });
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { goTo(current - 1); });
    if (btnNext) btnNext.addEventListener('click', function () { goTo(current + 1); });
    dots.forEach(function (dot, i) {
        dot.addEventListener('click', function () { goTo(i); });
    });
})();

// ================================================================
//  Home Search Landing — View toggle + Filter system
// ================================================================
(function () {
    if (!document.getElementById('hsHero')) return;

    window.hsSetView = function (view) {
        var hero       = document.getElementById('hsHero');
        var mapHeader  = document.getElementById('hsMapHeader');
        var propGrid   = document.querySelector('.hs-prop-grid');
        var pagination = document.querySelector('.hs-pagination:not(.hs-pagination--sidebar)');
        var mapView    = document.getElementById('hsMapView');
        var btnList    = document.getElementById('btnListView');
        var btnMap     = document.getElementById('btnMapView');

        if (view === 'map') {
            hero.style.display       = 'none';
            propGrid.style.display   = 'none';
            pagination.style.display = 'none';
            mapView.classList.add('is-active');
            mapHeader.classList.add('is-active');
            mapHeader.setAttribute('aria-hidden', 'false');
            btnList.classList.remove('active');
            btnMap.classList.add('active');
        } else {
            hero.style.display       = '';
            propGrid.style.display   = '';
            pagination.style.display = '';
            mapView.classList.remove('is-active');
            mapHeader.classList.remove('is-active');
            mapHeader.setAttribute('aria-hidden', 'true');
            btnList.classList.add('active');
            btnMap.classList.remove('active');
        }
    };

    var HS_FILTERS = { price: { min: '', max: '' }, beds: '', baths: '', type: 'house', more: [] };

    function hsCloseAll() {
        document.querySelectorAll('.hs-filter-dropdown.is-open').forEach(function (d) {
            d.classList.remove('is-open');
        });
    }

    document.addEventListener('click', function (e) {
        var pill = e.target.closest('[data-dropdown]');
        if (pill) {
            e.stopPropagation();
            var id     = pill.getAttribute('data-dropdown');
            var dd     = document.getElementById(id);
            var wasOpen = dd && dd.classList.contains('is-open');
            hsCloseAll();
            if (dd && !wasOpen) dd.classList.add('is-open');
            return;
        }
        if (!e.target.closest('.hs-filter-wrap')) hsCloseAll();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') hsCloseAll();
    });

    document.addEventListener('click', function (e) {
        var opt = e.target.closest('.hs-opt');
        if (!opt) return;
        var key   = opt.getAttribute('data-filter');
        var value = opt.getAttribute('data-value');
        var label = opt.getAttribute('data-label');
        document.querySelectorAll('.hs-opt[data-filter="' + key + '"]').forEach(function (b) {
            b.classList.toggle('hs-opt--active', b.getAttribute('data-value') === value);
        });
        HS_FILTERS[key] = value;
        hsUpdateLabels(key, label);
        hsUpdatePills(key, !!value);
        hsCloseAll();
    });

    document.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-apply]');
        if (!btn) return;
        var key = btn.getAttribute('data-apply');

        if (key === 'price') {
            var min = document.getElementById('hd-price-min').value;
            var max = document.getElementById('hd-price-max').value;
            document.getElementById('mhd-price-min').value = min;
            document.getElementById('mhd-price-max').value = max;
            HS_FILTERS.price = { min: min, max: max };
            var label = 'Any price';
            if (min && max) label = '$' + hsFmt(min) + '–$' + hsFmt(max);
            else if (min)   label = '$' + hsFmt(min) + '+';
            else if (max)   label = 'Up to $' + hsFmt(max);
            hsUpdateLabels('price', label);
            hsUpdatePills('price', !!(min || max));
        }

        if (key === 'more') {
            var checked = [];
            document.querySelectorAll('.hs-check-inp[data-filter="more"]:checked').forEach(function (c) {
                if (!checked.includes(c.value)) checked.push(c.value);
            });
            HS_FILTERS.more = checked;
            var count = checked.length;
            hsUpdateLabels('more', count ? 'More (' + count + ')' : 'More');
            hsUpdatePills('more', count > 0);
            document.querySelectorAll('.hs-check-inp[data-filter="more"]').forEach(function (c) {
                c.checked = checked.includes(c.value);
            });
        }

        hsCloseAll();
    });

    document.addEventListener('click', function (e) {
        var btn = e.target.closest('[data-clear]');
        if (!btn) return;
        var key = btn.getAttribute('data-clear');

        if (key === 'price') {
            ['hd-price-min', 'hd-price-max', 'mhd-price-min', 'mhd-price-max'].forEach(function (id) {
                var el = document.getElementById(id);
                if (el) el.value = '';
            });
            HS_FILTERS.price = { min: '', max: '' };
            hsUpdateLabels('price', 'Any price');
            hsUpdatePills('price', false);
        }

        if (key === 'more') {
            document.querySelectorAll('.hs-check-inp[data-filter="more"]').forEach(function (c) {
                c.checked = false;
            });
            HS_FILTERS.more = [];
            hsUpdateLabels('more', 'More');
            hsUpdatePills('more', false);
        }

        hsCloseAll();
    });

    document.addEventListener('change', function (e) {
        if (!e.target.classList.contains('hs-price-select')) return;
        var id     = e.target.id;
        var mirror = id.startsWith('hd-') ? id.replace('hd-', 'mhd-') : id.replace('mhd-', 'hd-');
        var el     = document.getElementById(mirror);
        if (el) el.value = e.target.value;
    });

    document.addEventListener('click', function (e) {
        var opt = e.target.closest('.hs-sort-opt');
        if (!opt) return;
        document.querySelectorAll('.hs-sort-opt').forEach(function (b) {
            b.classList.remove('hs-sort-opt--active');
        });
        opt.classList.add('hs-sort-opt--active');
        var label        = opt.textContent.trim();
        var shortLabel   = label.split(':')[0].split(' ')[0];
        var displayLabel = label.includes(':') ? label : shortLabel;
        document.getElementById('sortLabel').textContent = displayLabel;
        var btn = document.querySelector('.hs-sort-btn');
        btn.classList.toggle('is-open', opt.getAttribute('data-sort') !== 'newest');
        hsCloseAll();
    });

    function hsUpdateLabels(key, text) {
        document.querySelectorAll('[data-filter-label="' + key + '"]').forEach(function (el) {
            el.textContent = text;
        });
    }

    function hsUpdatePills(key, applied) {
        document.querySelectorAll('[data-filter-pill="' + key + '"]').forEach(function (pill) {
            pill.classList.toggle('hs-pill--applied', applied);
        });
    }

    function hsFmt(val) {
        var n = parseInt(val, 10);
        if (n >= 1000000) return (n % 1000000 === 0 ? n / 1000000 : (n / 1000000).toFixed(2).replace(/\.?0+$/, '')) + 'M';
        if (n >= 1000)    return Math.round(n / 1000) + 'K';
        return n;
    }
})();

// ================================================================
//  Pre-Construction — Gallery Slider  (pc-page only)
// ================================================================
(function () {
    if (!document.body.classList.contains('pc-page')) return;
    var gallery = document.querySelector('.pc-gallery');
    if (!gallery) return;

    var mainImg    = gallery.querySelector('.ld-gallery-main img');
    if (!mainImg) return;

    var sideImgs   = gallery.querySelectorAll('.ld-gallery-thumb img');
    var thumbItems = gallery.querySelectorAll('.ld-thumb-img');
    var dots       = gallery.querySelectorAll('.ld-thumb-dot');
    var counter    = gallery.querySelector('.ld-count-badge');
    var btnPrev    = document.getElementById('ldThumbPrev');
    var btnNext    = document.getElementById('ldThumbNext');

    var THUMBS_VISIBLE = 5;
    var current    = 0;
    var windowStart = 0;

    // Build image list from the thumb strip
    var images = [];
    thumbItems.forEach(function (t) {
        var img = t.querySelector('img');
        if (img) images.push({ src: img.src, alt: img.alt || '' });
    });
    if (!images.length) return;
    var TOTAL = images.length;

    function mod(n, m) { return ((n % m) + m) % m; }

    function swapSrc(img, src, alt) {
        img.classList.add('ld-img-swap');
        setTimeout(function () {
            img.src = src;
            img.alt = alt || '';
            img.classList.remove('ld-img-swap');
        }, 150);
    }

    function render() {
        var cur = images[current];
        swapSrc(mainImg, cur.src, cur.alt);
        if (sideImgs[0]) { swapSrc(sideImgs[0], images[mod(current + 1, TOTAL)].src, images[mod(current + 1, TOTAL)].alt); }
        if (sideImgs[1]) { swapSrc(sideImgs[1], images[mod(current + 2, TOTAL)].src, images[mod(current + 2, TOTAL)].alt); }

        if (current < windowStart) {
            windowStart = current;
        } else if (current >= windowStart + THUMBS_VISIBLE) {
            windowStart = current - THUMBS_VISIBLE + 1;
        }

        thumbItems.forEach(function (thumb, i) {
            var imgIdx = windowStart + i;
            if (imgIdx >= TOTAL) {
                thumb.style.visibility = 'hidden';
            } else {
                thumb.style.visibility = 'visible';
                thumb.querySelector('img').src = images[imgIdx].src;
                thumb.classList.toggle('ld-thumb-img--active', imgIdx === current);
            }
        });

        var dotPage = Math.floor(current / THUMBS_VISIBLE);
        dots.forEach(function (dot, i) {
            dot.classList.toggle('ld-thumb-dot--active', i === dotPage);
            dot.classList.toggle('ld-thumb-dot--sm',     i !== dotPage);
        });

        if (counter) counter.textContent = (current + 1) + ' of ' + TOTAL;
    }

    function goTo(index) {
        current = mod(index, TOTAL);
        render();
    }

    if (btnPrev) btnPrev.addEventListener('click', function () { goTo(current - 1); });
    if (btnNext) btnNext.addEventListener('click', function () { goTo(current + 1); });

    thumbItems.forEach(function (thumb, i) {
        thumb.addEventListener('click', function () {
            var imgIdx = windowStart + i;
            if (imgIdx < TOTAL) goTo(imgIdx);
        });
    });

    gallery.querySelectorAll('.ld-gallery-thumb').forEach(function (thumb, i) {
        thumb.addEventListener('click', function () {
            goTo(mod(current + i + 1, TOTAL));
        });
    });

    render();
})();

// ================================================================
//  Phone Code Dropdown — all forms site-wide
// ================================================================
(function () {
    // Legacy hvh-rr handler
    document.addEventListener('click', function (e) {
        var opt = e.target.closest('.hvh-rr-phone-opt');
        if (!opt) return;
        e.preventDefault();
        var code = opt.dataset.code;
        var flag = opt.dataset.flag;
        var dropdown = opt.closest('.dropdown');
        if (!dropdown) return;
        var btn = dropdown.querySelector('.hvh-rr-phone-code');
        if (!btn) return;
        var codeEl = btn.querySelector('span');
        var flagEl = btn.querySelector('img');
        if (codeEl) codeEl.textContent = code;
        if (flagEl && flag) flagEl.src = flag;
    });

    // Auth page phone-code-dropdown handler
    document.addEventListener('click', function (e) {
        var opt = e.target.closest('.phone-code-option');
        if (!opt) return;
        var code = opt.dataset.code;
        var flag = opt.dataset.flag;
        var name = opt.dataset.name;
        var dropdown = opt.closest('.phone-code-dropdown');
        if (!dropdown) return;
        var btn = dropdown.querySelector('.phone-code-select');
        if (!btn) return;
        var codeEl = btn.querySelector('.phone-code-label');
        var flagEl = btn.querySelector('.phone-flag');
        if (codeEl) codeEl.textContent = code;
        if (flagEl && flag) { flagEl.src = flag; flagEl.alt = name || ''; }
        // Close Bootstrap dropdown
        var bsDropdown = bootstrap.Dropdown.getInstance(btn);
        if (bsDropdown) bsDropdown.hide();
    });
})();

// ================================================================
//  Video Section Modal — pc-videos-section (pre-construction only)
// ================================================================
(function () {
    var modal    = document.getElementById('pcVideoModal');
    if (!modal) return;

    var iframe   = document.getElementById('pcVideoIframe');
    var closeBtn = document.getElementById('pcVideoClose');
    var backdrop = modal.querySelector('.pc-video-modal__backdrop');

    function openModal(src) {
        var sep = src.indexOf('?') >= 0 ? '&' : '?';
        iframe.src = src + sep + 'autoplay=1&rel=0';
        modal.classList.add('pc-video-modal--open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('pc-video-modal--open');
        iframe.src = '';
        document.body.style.overflow = '';
    }

    // Open on card click or Enter/Space keypress
    document.querySelectorAll('.pc-video-card').forEach(function (card) {
        card.addEventListener('click', function () {
            openModal(card.dataset.videoSrc);
        });
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openModal(card.dataset.videoSrc);
            }
        });
    });

    closeBtn.addEventListener('click', closeModal);
    backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('pc-video-modal--open')) {
            closeModal();
        }
    });
})();

// ================================================================
//  Schools Near the Property — interactive chart (pre-construction)
// ================================================================
(function () {
    if (!document.getElementById('schoolsBarChart')) return;

    // ---- Per-school data (Reading / Writing / Math school scores) ----
    var PROVINCIAL = [64, 72, 58]; // constant provincial averages

    var schoolData = [
        { name: 'Meadowvale Village PS',   scores: [56, 64, 48] },
        { name: 'Churchville Public School', scores: [62, 58, 44] },
        { name: 'St. Roch Catholic Elem.',   scores: [70, 68, 60] },
        { name: 'Heart Lake Secondary',      scores: [52, 55, 40] },
        { name: 'Notre Dame CSS',            scores: [65, 62, 55] },
        { name: 'Turner Fenton SS',          scores: [45, 50, 35] }
    ];

    var emptyEl   = document.getElementById('schoolsChartEmpty');
    var chartEl   = document.getElementById('schoolsChartArea');
    var titleEl   = document.getElementById('schoolsChartTitle');
    var canvas    = document.getElementById('schoolsBarChart');
    var rows      = document.querySelectorAll('.pc-school-row');
    var listEl    = document.querySelector('.pc-schools-list');
    var thumbEl   = document.querySelector('.pc-schools-scrollbar__thumb');
    var chartInst = null;

    // ---- Decorative scrollbar thumb tracking ----
    if (listEl && thumbEl) {
        function updateThumb() {
            var scrollTop  = listEl.scrollTop;
            var scrollH    = listEl.scrollHeight - listEl.clientHeight;
            var trackH     = thumbEl.parentElement.clientHeight;
            var thumbH     = thumbEl.offsetHeight;
            var maxTop     = trackH - thumbH;
            var pct        = scrollH > 0 ? scrollTop / scrollH : 0;
            thumbEl.style.top = Math.round(pct * maxTop) + 'px';
        }
        listEl.addEventListener('scroll', updateThumb, { passive: true });
        updateThumb(); // initialise position
    }

    var CHART_OPTIONS = {
        responsive: true,
        maintainAspectRatio: false,   // let the CSS wrapper control height
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#fff',
                borderColor: '#f1f5f9',
                borderWidth: 1,
                titleColor: '#475569',
                bodyColor: '#64748b',
                titleFont: { family: "'Poppins', sans-serif", size: 12 },
                bodyFont: { family: "'Poppins', sans-serif", size: 13 },
                padding: 10,
                cornerRadius: 12,
                callbacks: {
                    label: function (ctx) {
                        return '  ' + ctx.dataset.label + ':  ' + ctx.parsed.y;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { font: { family: "'Poppins', sans-serif", size: 12 }, color: 'rgba(0,0,0,0.7)' },
                border: { display: false }
            },
            y: {
                min: 0, max: 100,
                ticks: { stepSize: 20, font: { family: "'Poppins', sans-serif", size: 12 }, color: 'rgba(0,0,0,0.7)' },
                grid: { color: 'rgba(0,0,0,0.06)' },
                border: { display: false }
            }
        }
    };

    function buildDatasets(scores) {
        return [
            {
                label: 'School score',
                data: scores,
                backgroundColor: 'rgba(112,134,253,0.8)',
                borderRadius: 4,
                barPercentage: 0.85,
                categoryPercentage: 0.8
            },
            {
                label: 'Provincial score',
                data: PROVINCIAL,
                backgroundColor: 'rgba(111,209,149,0.8)',
                borderRadius: 4,
                barPercentage: 0.85,
                categoryPercentage: 0.8
            }
        ];
    }

    function showChart(idx) {
        var school = schoolData[idx];

        // toggle empty → chart
        emptyEl.style.display = 'none';
        chartEl.style.display = 'flex';

        // update title
        titleEl.textContent = school.name + ' — Score Breakdown';

        if (!chartInst) {
            // first time: create the chart
            chartInst = new Chart(canvas, {
                type: 'bar',
                data: {
                    labels: ['Reading', 'Writing', 'Math'],
                    datasets: buildDatasets(school.scores)
                },
                options: CHART_OPTIONS
            });
        } else {
            // subsequent clicks: just swap data and animate update
            chartInst.data.datasets[0].data = school.scores;
            chartInst.update('active');
        }
    }

    rows.forEach(function (row, idx) {
        row.style.cursor = 'pointer';
        row.addEventListener('click', function () {
            // deactivate all, activate clicked
            rows.forEach(function (r) { r.classList.remove('pc-school-row--active'); });
            row.classList.add('pc-school-row--active');
            showChart(idx);
        });
    });
})();

// ================================================================
//  Sticky header — scroll-triggered glassmorphism animation
// ================================================================
(function () {
    var header = document.querySelector('.main-header');
    if (!header) return;

    var THRESHOLD = 40; // px before the effect kicks in

    function onScroll() {
        if (window.scrollY > THRESHOLD) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load in case page is already scrolled
})();

// ================================================================
//  Book a Call — interactive calendar (pre-construction only)
// ================================================================
(function () {
    var grid        = document.getElementById('bacGrid');
    if (!grid) return;

    var monthLabel  = document.getElementById('bacMonthLabel');
    var prevBtn     = document.getElementById('bacPrev');
    var nextBtn     = document.getElementById('bacNext');
    var slotsEmpty  = document.getElementById('bacSlotsEmpty');
    var slotsBody   = document.getElementById('bacSlotsBody');
    var slotsGrid   = document.getElementById('bacSlotsGrid');
    var dateLabel   = document.getElementById('bacDateLabel');
    var confirmBtn  = document.getElementById('bacConfirm');
    var confirmedEl = document.getElementById('bacConfirmed');
    var confirmedTx = document.getElementById('bacConfirmedText');
    var resetBtn    = document.getElementById('bacReset');

    var MONTH_NAMES = ['January','February','March','April','May','June',
                       'July','August','September','October','November','December'];
    var DAY_NAMES   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    var ALL_SLOTS = ['9:00 AM','9:30 AM','10:00 AM','10:30 AM',
                     '11:00 AM','11:30 AM','1:00 PM','1:30 PM',
                     '2:00 PM','2:30 PM','3:00 PM','4:00 PM'];
    var BOOKED    = ['9:30 AM','10:30 AM','2:30 PM']; // demo unavailable slots

    var today        = new Date();
    var viewYear     = today.getFullYear();
    var viewMonth    = today.getMonth();
    var selectedDate = null;
    var selectedTime = null;

    // ---- Render calendar grid ----
    function renderCalendar() {
        monthLabel.textContent = MONTH_NAMES[viewMonth] + ' ' + viewYear;

        var first   = new Date(viewYear, viewMonth, 1).getDay();
        var daysInM = new Date(viewYear, viewMonth + 1, 0).getDate();
        var daysInP = new Date(viewYear, viewMonth, 0).getDate();

        grid.innerHTML = '';

        // Leading days from previous month
        for (var p = first - 1; p >= 0; p--) {
            grid.appendChild(makeDay(daysInP - p, true, false, false, false));
        }

        // Days of current month
        for (var d = 1; d <= daysInM; d++) {
            var cellDate = new Date(viewYear, viewMonth, d);
            var isPast   = cellDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
            var isSel    = selectedDate && selectedDate.toDateString() === cellDate.toDateString();
            var isTod    = cellDate.toDateString() === today.toDateString();
            grid.appendChild(makeDay(d, false, isPast, isSel, isTod));
        }

        // Trailing filler days
        var trailer = grid.children.length % 7 === 0 ? 0 : 7 - (grid.children.length % 7);
        for (var t = 1; t <= trailer; t++) {
            grid.appendChild(makeDay(t, true, false, false, false));
        }

        // Disable prev button at current month boundary
        var prevLimit = new Date(today.getFullYear(), today.getMonth(), 1);
        prevBtn.disabled = (new Date(viewYear, viewMonth, 1) <= prevLimit);
    }

    function makeDay(num, isOther, isDisabled, isSelected, isToday) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = num;
        btn.className = 'bac-day';
        if (isOther)    btn.classList.add('bac-day--other');
        if (isDisabled) btn.classList.add('bac-day--disabled');
        if (isSelected) btn.classList.add('bac-day--selected');
        if (isToday)    btn.classList.add('bac-day--today');

        if (!isOther && !isDisabled) {
            btn.addEventListener('click', function () {
                selectedDate = new Date(viewYear, viewMonth, num);
                selectedTime = null;
                renderCalendar();
                showSlots();
            });
        }
        return btn;
    }

    // ---- Show time slot panel ----
    function showSlots() {
        slotsEmpty.style.display   = 'none';
        slotsBody.style.display    = 'flex';
        confirmedEl.style.display  = 'none';

        var d = selectedDate;
        dateLabel.textContent = DAY_NAMES[d.getDay()] + ', ' +
            MONTH_NAMES[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();

        slotsGrid.innerHTML = '';
        ALL_SLOTS.forEach(function (t) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = t;
            btn.className = 'bac-slot';

            if (BOOKED.indexOf(t) !== -1) {
                btn.classList.add('bac-slot--disabled');
            } else {
                btn.addEventListener('click', function () {
                    document.querySelectorAll('.bac-slot--selected')
                        .forEach(function (s) { s.classList.remove('bac-slot--selected'); });
                    btn.classList.add('bac-slot--selected');
                    selectedTime = t;
                    confirmBtn.disabled = false;
                });
            }
            slotsGrid.appendChild(btn);
        });

        confirmBtn.disabled = true;
    }

    // ---- Confirm ----
    confirmBtn.addEventListener('click', function () {
        if (!selectedDate || !selectedTime) return;
        var d = selectedDate;
        confirmedTx.textContent = DAY_NAMES[d.getDay()] + ', ' +
            MONTH_NAMES[d.getMonth()] + ' ' + d.getDate() + ' at ' + selectedTime;
        slotsBody.style.display    = 'none';
        confirmedEl.style.display  = 'flex';
    });

    // ---- Reset ----
    resetBtn.addEventListener('click', function () {
        selectedDate = null;
        selectedTime = null;
        confirmedEl.style.display = 'none';
        slotsEmpty.style.display  = 'flex';
        slotsBody.style.display   = 'none';
        renderCalendar();
    });

    // ---- Month navigation ----
    prevBtn.addEventListener('click', function () {
        if (viewMonth === 0) { viewMonth = 11; viewYear--; } else { viewMonth--; }
        renderCalendar();
    });
    nextBtn.addEventListener('click', function () {
        if (viewMonth === 11) { viewMonth = 0; viewYear++; } else { viewMonth++; }
        renderCalendar();
    });

    renderCalendar();
})();
