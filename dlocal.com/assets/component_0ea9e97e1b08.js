
/* ***** FUNCIONES ***** */

function paymentsCarouselInit(){

    const paymentsCarouselClass = 'js-payments-carousel';
    const paymentsCarouselAr = document.querySelectorAll(`.${paymentsCarouselClass}`)
    const paymentsCarouselSliders = []

    paymentsCarouselAr.forEach( ($el, i) => {

        let carouselId = null

        if( !$el.getAttribute('id') ) {
            carouselId = `${paymentsCarouselClass}-${i}`;
            $el.setAttribute('id', carouselId)
        } else {
            carouselId = $el.getAttribute('id')
        }

        const $carousel = document.getElementById(carouselId);

        paymentsCarouselSliders[i] = tns({
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
            controlsText: ['',''],
            nav: true,
            mouseDrag: true,
            responsive: {
                '600': {
                    items: 1.8,
                    slideBy: 2,
                },
                '768': {
                    items: 1.8,
                    edgePadding: 40,
                },
                '980': {
                    items: 2.2,
                    slideBy: 2,
                    edgePadding: 64,
                },
                '1200': {
                    items: 3,
                    edgePadding: 80,
                    gutter: 24
                },
                '1360': {
                    edgePadding: 85,
                },
                '1400': {
                    edgePadding: 90,
                },
                '1680': {
                    items: 3.3,
                    edgePadding: 104,
                },
                '1800': {
                edgePadding: 170
                },
                '1900': {
                    edgePadding: 220
                },
                '2048': {
                    edgePadding: 290
                },
                '2300': {
                    edgePadding: 420
                }

            },
            onInit: function(){
                $carousel.classList.remove('js-carousel__notInit');
                $carousel.querySelector('.tns-nav').tabIndex = -1;
            }
        });


    }) // foreach paymentsCarouselAr


} // paymentsCarouselInit
paymentsCarouselInit()