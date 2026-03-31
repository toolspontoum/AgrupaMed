// ! DATALAYER INIT

window.dataLayer = window.dataLayer || []



// ! CONTACT SALES LEVELS

function contactSalesLinksInit(){
    
    // * SET LEVELS 
    
    let contactSalesLinks = []
    let matchingValues = [
        'contact-sales',
        'lets-talk',
        'ventas',
        'vendas',
    ]

    // Nav
    let linkCount = 1;
    const navLinksArray = document.querySelectorAll('header nav a')
    navLinksArray.forEach( ($link) => {
        if ( matchingValues.some(keyword => $link.getAttribute('href').includes(keyword)) ) {
            $link.setAttribute('data-level', `0.${linkCount}: Header`)
            contactSalesLinks.push($link)
            linkCount++
        }
    })

    // Heros
    const heroLinksArray = document.querySelectorAll('.c-hero a')
    heroLinksArray.forEach( ($link) => {
        if ( matchingValues.some(keyword => $link.getAttribute('href').includes(keyword)) ) {
            $link.setAttribute('data-level', `1: Hero`)
            contactSalesLinks.push($link)
        }
    })

    // Main
    linkCount = 1;
    const mainLinksArray = document.querySelectorAll('main a')
    mainLinksArray.forEach( ($link) => {
        if ( matchingValues.some(keyword => $link.getAttribute('href').includes(keyword)) ) {
            $link.setAttribute('data-level', `2.${linkCount}: Main`)
            contactSalesLinks.push($link)
            linkCount++
        }
    })

    // Closing
    const closingLinksArray = document.querySelectorAll('.c-closing a')
    closingLinksArray.forEach( ($link) => {
        if ( matchingValues.some(keyword => $link.getAttribute('href').includes(keyword)) ) {
            contactSalesLinks.push($link)
            $link.setAttribute('data-level', `3. Closing`)
        }
    })

    // Footer
    const footerLinksArray = document.querySelectorAll('.c-footer a')
    footerLinksArray.forEach( ($link) => {
        if ( matchingValues.some(keyword => $link.getAttribute('href').includes(keyword)) ) {
            contactSalesLinks.push($link)
            $link.setAttribute('data-level', `4. Footer`)
        }
    })


    // * SEND EVENT

    contactSalesLinks.forEach( ($link) => {
        $link.onclick = () => {

            dataLayer.push({
                'event': 'trigger_contact_sales_click',
                'contact_sales_link_level': $link.getAttribute('data-level')
            })

        }
    })
    
} // contactSalesLinksInit
contactSalesLinksInit()



// ! REDIRECT EVENTS

function redirectEventsInit(){
    
    if( window.location.href.indexOf('redirect=') === -1 ) return

    // Get redirect Param
    const urlParams = new URLSearchParams(window.location.search)
    let redirectValue = urlParams.get('redirect')
    
    if( redirectValue === '' ) return;
    
    let redirect = {}
    redirect.category = redirectValue.split('[')[0]
    
    if(redirectValue.indexOf('[') !== -1) {
        redirect.value = redirectValue.split('[')[1].split(']')[0]
    } else {
        redirect.value = 'N/a'
    }

    dataLayer.push({
        'event': 'trigger_redirection',
        'redirect_category': redirect.category,
        'redirect_value': redirect.value
    })

//    console.log('%cRedirect value:', 'color:blue;')
//    console.log(`Category: ${redirect.category}`)
//    console.log(`Value: ${redirect.value}`)
    
} // redirectEventsInit
redirectEventsInit()



// ! DEVELOPERS NAV

function developersNavTrackInit(){

    const $devLinks = document.querySelectorAll('.js-track-devlink')

    // * SEND EVENT

    $devLinks.forEach( $link => {
        $link.onclick = () => {

            dataLayer.push({
                'event': 'trigger_devs_nav_click',
                'url': $link.getAttribute('href'),
                'text': $link.getAttribute('data-link-title')
            })

        } // onclick
    }) // foreach $devLinks
    
} // developersNavTrackInit
developersNavTrackInit()



// ! HANDBOOK CTA

function handbookCtaTrackInit(){

    const $links = document.querySelectorAll('.js-track-cta-handbook')

    // * SEND EVENT

    $links.forEach( $link => {
        $link.onclick = () => {

            dataLayer.push({
                'event': 'trigger_handbook_cta_click',
                'url': $link.getAttribute('href'),
                'text': $link.getAttribute('data-cta-title')
            })

        } // onclick
    }) // foreach $links
    
} // handbookCtaTrackInit
handbookCtaTrackInit()