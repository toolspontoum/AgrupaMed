
/* ***** FUNCIONES ***** */

function newsCardsCarouselInit(){

    const $news = document.querySelector('.js-news-carousel');

    let newsCarousel = tns({
        container: `.js-news-carousel .js-carousel`,
        items: 1.2,
        edgePadding: 16,
        gutter: 16,
        autoHeight: true,
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
            '768': {
                edgePadding: 42,
                gutter: 42
            },
            '980': {
                items: 1,
                edgePadding: 64,
                gutter: 64,
            },
            '1200': {
                edgePadding: 80,
                gutter: 80
            },
            '1360': {
                edgePadding: 85,
                gutter: 85
            },
            '1400': {
                edgePadding: 100,
                gutter: 100
            },
            '1600': {
                edgePadding: 104,
                gutter: 104
            },
            '1800': {
                edgePadding: 164,
                gutter: 164
            },
            '1920': {
                edgePadding: 224,
                gutter: 224
            },
            '2048': {
                edgePadding: 288,
                gutter: 288
            }
        },
        onInit: function(info){
            $news.classList.remove('js-carousel__notInit');
            $news.querySelector('.tns-nav').tabIndex = -1;
        }
    });


} // newsCardsCarouselInit
newsCardsCarouselInit()