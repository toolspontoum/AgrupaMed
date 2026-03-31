// ! DEBOUNCE

function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
} // debounce



// ! SCROLL TRIGGER

gsap.registerPlugin(ScrollTrigger);



// ! HEADER

const headerSel = '.js-header';
const $header = document.querySelector(headerSel);

function headerInit() {

    if ( !$header ) return;

    // ! FIXED

    // let debugDownScrolling = true;

    ScrollTrigger.create({
        trigger: headerSel,
        start: `center top`,
        end: `center top`,
        // markers: debugDownScrolling ? true : false,
        onEnter: () => {
            // if(debugDownScrolling) console.log('%cDown | conEnter', 'color:limegreen')
            $header.classList.add('is-fixed')
        },
        onEnterBack: () => {
            // if(debugDownScrolling) console.log('%cDown | onEnterBack', 'color:orange')
            $header.classList.remove('is-fixed')
        }
    });

} // headerInit

if (!$header.classList.contains('is-fixed')){
    headerInit();
}   




// ! LANG SWITCH

function langSwitchInit() {

    const availableLangs = [
        'en',
        'zh',
        'pt',
        'es'
    ]
    const $lang = document.querySelectorAll('.js-lang-switch');
    if (!$lang) return

    $lang.forEach(($langSelect) => {
        let $langConteiner = $langSelect.closest('.js-lang');
        
        $langSelect.onchange = () => {
            
            let urlValue = $langSelect.value
            let nextLang = 'en'
            
            for( i=0; i < availableLangs.length; i++ ) {
                if ( urlValue.indexOf(`/${availableLangs[i]}/`) !== -1 ) {
                    nextLang = availableLangs[i]
                }
            }
            
            // Send Analytics event
            dataLayer.push({
                'event': 'trigger_language_switch',
                'id': $langSelect.getAttribute('data-lang-position'),
                'text': nextLang
            })
            
            // Change location
            $langConteiner.classList.add('is-loading');
            window.location.href = urlValue
            
            
        }
    })

} // langSwitchInit

langSwitchInit();




// ! IP Detection

function setCountryData(country, saveLs){

    // Set data with country code
    document.querySelector('body').setAttribute('data-geoip-country', country)
    
    // If no need to save LS, return
    if( !saveLs ) return

    // Save country to LS
    localStorage.setItem('geoip-country', country)
    localStorage.setItem('geoip-country-updated', Date.now())

}

function getUserLocation() {
    
    // Get country from LS
    let LSCountry = localStorage.getItem('geoip-country');
    // If LS is saved, don't request ipinfo
    if( LSCountry && LSCountry !== 'undefined' ) return setCountryData(LSCountry, false);
    // If no LS, request ipinfo
    fetch('//ipinfo.io/json?token=6f5d3395ff785f')
        .then(res => res.json())
        .then(data => setCountryData(data.country, true))

} // getUserLocation

getUserLocation()