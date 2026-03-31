// ! HELLO BAR

function helloBarInit() {
    
    if (!document.querySelector('.js-hello-bar')) return
    
    // ! HIDE HELLO BAR IF CLOSED

    // Get Hellobar id
    let hbId = document.querySelector('.js-hello-bar').getAttribute('data-id')
    // Get hidden Hellobar id from LS
    let hideHbLS = localStorage.getItem('hidden-hellobar');
    // If LS hidden Hellobar DOESNT match actual ID: Add Hellobar
    if( hideHbLS !== hbId ){
        document.querySelector('body').setAttribute('data-hello','true')
        
        // ! TRACK GA4 HELLOBAR
        
        window.dataLayer = window.dataLayer || []

        let $bar = document.querySelector('.js-hello-bar');
        let helloId = $bar.getAttribute('data-id');
        let helloText = $bar.getAttribute('data-text');
        let helloLink = $bar.querySelector('.c-hello-bar__link').getAttribute('href');

        // Hello bar is shown
        dataLayer.push({
            'event': 'trigger_hellobar_show',
            'id': helloId,
            'url': helloLink,
            'text': helloText
        })

        // Hello bar is clicked
        document.querySelector('.c-hello-bar__link').onclick = () => {

            dataLayer.push({
                'event': 'trigger_hellobar_click',
                'id': helloId,
                'url': helloLink,
                'text': helloText
            })

        }
        
        // Hide
        
        document.querySelector('.js-hello-bar__close').onclick = () => {

            document.querySelector('body').removeAttribute('data-hello');
            // Save Hellobar ID to LS
            localStorage.setItem('hidden-hellobar', hbId)

            // Track close event
            dataLayer.push({
                'event': 'trigger_hellobar_hide',
                'id': helloId,
                'url': helloLink,
                'text': helloText
            })

        }
    } // Add Hell bar
    
    
    

} // helloBarInit

helloBarInit();