var newsletterNoticeScrollTriggerInstance = null;

window.dataLayer = window.dataLayer || []

function newsletterNoticeInit() {

    // ! SCROLL TRIGGER

    const $newsletterNotice = document.querySelector('.js-newsletter-notice');

    if (!$newsletterNotice) return


    const $newsletterNoticeHolder = $newsletterNotice.querySelector('.js-newsletter-notice-holder');
    const $hideNewsletterNotice = document.querySelectorAll('.js-hide-newsletter-notice');
    const $newsletterNoticeCta = $newsletterNotice.querySelector('.js-newsletter-notice-cta');
    
    const noticeName = $newsletterNotice.getAttribute('data-notice-name');

    //LS
    const newsletterNoticeStatus = 'true';
    let closedNoticeIdLS = localStorage.getItem('closed-newsletter-popup');
    let userSubscriptionStatus = localStorage.getItem('subscribed-newsletter');
    let newsletterNoticeExpiration = localStorage.getItem('newsletter-popup-expiration');


    if (newsletterNoticeExpiration) {
        let lastDateSaved = new Date(newsletterNoticeExpiration);
        let currentDate = new Date();
        let timeDifference = currentDate.getTime() - lastDateSaved.getTime();
        let daysPassed = timeDifference / (1000 * 3600 * 24);

        if (daysPassed >= 7) {

            closedNoticeIdLS = 'false';
        }
    }


    if (closedNoticeIdLS !== newsletterNoticeStatus && !userSubscriptionStatus) {

        newsletterNoticeScrollTriggerInstance = ScrollTrigger.create({
            trigger: document.body,
            start: `top top`,
            end: `bottom bottom-=${window.innerHeight}px`,
            onEnter: () => {
                if (!$newsletterNotice.classList.contains('is-visible')) {
                    $newsletterNotice.classList.add('is-visible');

                    // ! TRACK GA4: Popup is shown
                    dataLayer.push({
                        'event': 'trigger_newsletter_popup_show',
                        'text': noticeName
                    })


                }
            }
        });

        //LS

        $hideNewsletterNotice.forEach(($hideBtn) => {

            $hideBtn.onclick = () => {
                hideNewsletterNotice($newsletterNotice, $newsletterNoticeHolder);
                newsletterNoticeScrollTriggerInstance.kill();
                localStorage.setItem('closed-newsletter-popup', newsletterNoticeStatus);
                // SAVE DATE
                localStorage.setItem('newsletter-popup-expiration', new Date().toISOString());

                // ! TRACK GA4: Popup is closed
                dataLayer.push({
                    'event': 'trigger_newsletter_popup_hide',
                    'text': noticeName
                })
            };
        });
    }

    // CTA Click

    $newsletterNoticeCta.onclick = () => {

        // ! TRACK GA4: CTA is clicked
        dataLayer.push({
            'event': 'trigger_newsletter_popup_cta_click',
            'text': noticeName
        })
        
        console.log(window.dataLayer)

    };

}

function hideNewsletterNotice($newsletterNotice, $newsletterNoticeHolder) {
    if ($newsletterNotice.classList.contains('is-visible')) {
        $newsletterNotice.classList.add('is-closing');

        $newsletterNoticeHolder.addEventListener('animationend', function (e) {
            if (e.target === $newsletterNoticeHolder && $newsletterNotice.classList.contains('is-visible') && $newsletterNotice.classList.contains('is-closing')) {
                $newsletterNotice.classList.remove('is-visible', 'is-closing');
            }
        });
    }
}

newsletterNoticeInit();
