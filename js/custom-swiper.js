
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
    slidesPerView: 3,
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
            slidesPerView: 3,
        }
    }
});

if(jQuery('.dataTables_length select').length > 0 ){
			jQuery('.dataTables_length select').selectpicker();
		}

if(jQuery('.dataTables_length select').length > 0 ){
			jQuery('.dataTables_length select').selectpicker();
		}
