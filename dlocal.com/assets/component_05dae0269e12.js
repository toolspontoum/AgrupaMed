
/* ***** FUNCIONES ***** */

function resourcesCarouselInit(){

    const resourcesCarouselClass = 'js-resources-carousel';
    const resourcesCarouselAr = document.querySelectorAll(`.${resourcesCarouselClass}`)
    const resourcesCarouselSliders = []

    resourcesCarouselAr.forEach( ($el, i) => {

        let carouselId = null

        if( !$el.getAttribute('id') ) {
            carouselId = `${resourcesCarouselClass}-${i}`;
            $el.setAttribute('id', carouselId)
        } else {
            carouselId = $el.getAttribute('id')
        }

        const $carousel = document.getElementById(carouselId);

        resourcesCarouselSliders[i] = tns({
            container: `#${carouselId} .js-carousel`,
            items: 2,
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
                    items: 3,
                    slideBy: 2,
                },
                '768': {
                    edgePadding: 40,
                },
                '980': {
                    edgePadding: 64,
                },
                '1200': {
                    items: 4,
                    slideBy: 3,
                    edgePadding: 80,
                    gutter: 24
                },
                '1360': {
                    edgePadding: 85,
                },
                '1400': {
                    items: 4,
                    slideBy: 4,
                    edgePadding: 90,
                },
                '1600': {
                    edgePadding: 104,
                },
                '1900': {
                    edgePadding: 220,
                },
            },
            onInit: function(){
                $carousel.classList.remove('js-carousel__notInit');
                $carousel.querySelector('.tns-nav').tabIndex = -1;
            }
        });


    }) // foreach resourcesCarouselAr


} // resourcesCarouselInit
resourcesCarouselInit()