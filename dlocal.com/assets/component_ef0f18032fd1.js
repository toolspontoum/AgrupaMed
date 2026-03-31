function industriesFullInit() {

    const industryFull = document.querySelectorAll('.js-industry-full');

    if (industryFull.length > 0) {
        industryFull.forEach((section) => {

            const industryLinks = section.querySelectorAll('.js-industry-link');
            const industryPictures = section.querySelectorAll('.js-industry-pic');
            const industryCard = section.querySelectorAll('.js-industry-card');

            industryLinks.forEach((link, index) => {

                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    section.querySelector('.js-industry-link.is-active').classList.remove('is-active');
                    section.querySelector('.js-industry-pic.is-visible').classList.remove('is-active');
                    section.querySelector('.js-industry-card.is-visible').classList.remove('is-active');



                    if (!link.classList.contains('is-active')) {

                        link.classList.add('is-active');

                    }

                    industryPictures.forEach(picture => picture.classList.remove("is-visible"));
                    if (industryPictures[index]) {
                        industryPictures[index].classList.add("is-visible");
                    }

                    industryCard.forEach(card => card.classList.remove("is-visible"));
                    if (industryCard[index]) {
                        industryCard[index].classList.add("is-visible");
                    }
                });

            });

        });


        const industriesCarouselClass = 'js-industries-carousel';
        const industriesCarouselAr = document.querySelectorAll(`.${industriesCarouselClass}`)
        const industriesCarouselSliders = []

        industriesCarouselAr.forEach(($el, i) => {

            let carouselId = null

            if (!$el.getAttribute('id')) {
                carouselId = `${industriesCarouselClass}-${i}`;
                $el.setAttribute('id', carouselId)
            } else {
                carouselId = $el.getAttribute('id')
            }

            const $carousel = document.getElementById(carouselId);

            industriesCarouselSliders[i] = tns({
                container: `#${carouselId} .js-carousel`,
                items: 1.2,
                edgePadding: 16,
                gutter: 16,
                autoHeight: false,
                loop: false,
                center: false,
                speed: 650,
                autoplay: false,
                autoplayButtonOutput: false,
                controlsPosition: 'bottom',
                controlsText: ['', ''],
                nav: true,
                mouseDrag: true,
                responsive: {
                    '768': {
                        items: 1.2,
                        edgePadding: 0
                    },
                    '980': {
                        gutter: 20,
                        items: 1.8
                    },
                    '1200': {
                        items: 2.1
                    },
                    '1360': {
                    },
                    '1400': {
                        items: 2.3
                    },
                    '1680': {
                    },
                    '1800': {
                        items: 2.6
                    },
                    '1900': {
                    },
                    '2048': {
                    },
                    '2300': {
                    }

                },
                onInit: function () {
                    $carousel.classList.remove('js-carousel__notInit');
                    $carousel.querySelector('.tns-nav').tabIndex = -1;
                }
            });


        }) 

    }

}

industriesFullInit();
