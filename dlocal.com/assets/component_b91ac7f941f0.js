// ! LOGO MARQUEE

function animatedMarqueeInit() {
    
    let marqueeArray = document.querySelectorAll('.js-animated-marquee')

    marqueeArray.forEach( ($marquee, i) => {

        let $list = $marquee.querySelector('.c-marquee__list')
        let $marqueeEl = $marquee.querySelector('.c-marquee__marquee')

        // Clone list
        let $cloneNext = document.createElement('div');
        $cloneNext.classList.add('c-marquee__clone','c-marquee__clone--next');
        $marquee.querySelector('.c-marquee__marquee').appendChild($cloneNext)
        $cloneNext.appendChild($list.cloneNode(true))
        $cloneNext.appendChild($list.cloneNode(true))
        
        let $clonePrev = document.createElement('div');
        $clonePrev.classList.add('c-marquee__clone','c-marquee__clone--prev');
        $marquee.querySelector('.c-marquee__marquee').appendChild($clonePrev)
        $clonePrev.appendChild($list.cloneNode(true))

        // Activate initialization
        $marquee.classList.add('c-marquee--animation')


    })

} // animatedMarqueeInit
animatedMarqueeInit();
