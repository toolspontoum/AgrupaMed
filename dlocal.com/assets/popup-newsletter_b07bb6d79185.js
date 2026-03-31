/* ***** FUNCIONES ***** */

const $otherPopups = document.querySelectorAll('.js-popup');
const $popup = document.querySelector('.js-popup-newsletter');
const $pageBody = document.querySelector('body');
const $btnOpenPopupNewsletter = document.querySelectorAll('.js-showNewsletterForm');
const popupFormId = $popup.getAttribute('data-form');
const popupFormTarget = $popup.getAttribute('data-target');

const $newsletterNotice = document.querySelector('.js-newsletter-notice');
const $newsletterNoticeHolder = $newsletterNotice.querySelector('.js-newsletter-notice-holder');

$btnOpenPopupNewsletter.forEach(($btn) => {

    $btn.addEventListener('click', (event) => {
        event.preventDefault();
        const btnPopupClass = $btn.getAttribute('data-popup');
        newsletterPopupInit(btnPopupClass, $btn);
        
        // ! TRACK GA4: Popup is closed
        dataLayer.push({
            'event': 'trigger_newsletter_btn_click',
            'text': $btn.innerText
        })
    });

});

function initNewsletterForm() {

    hbspt.forms.create({
        region: "na1",
        portalId: "9068770",
        formId: popupFormId,
        target: popupFormTarget,
        onFormReady: function( $form ){
            
            // ! TRACK GA4: Form is rendered
            dataLayer.push({
                'event': 'trigger_newsletter_form_render'
            })
            
        },
        onFormSubmitted: function () {
            document.querySelector('.js-newsletter-form-ty').classList.add("is-active");
            localStorage.setItem('subscribed-newsletter', 'true');
            
            hideNewsletterNotice($newsletterNotice, $newsletterNoticeHolder);
            newsletterNoticeScrollTriggerInstance.kill();
            
            // ! TRACK GA4: Form is submitted
            dataLayer.push({
                'event': 'trigger_newsletter_form_submission'
            })
        }

    });

}

function newsletterPopupInit($btn) {
    const $popupClose = $popup.querySelectorAll('.js-popup-close');
    const $popupOverlay = $popup.querySelectorAll('.js-popup__overlay')[0];

    showPopup($popup, $btn);


    $popupClose.forEach(($btnClose) => {

        $btnClose.onclick = () => {
            hidePopup($popup, $popupOverlay);
        };

    });

    $popupOverlay.onclick = () => {
        hidePopup($popup, $popupOverlay);
    };

    initNewsletterForm(popupFormId);

}


function showPopup($popup) {

    //Hide all popups
    $otherPopups.forEach(($prevPopup) => {

        if ($prevPopup.classList.contains('is-open')) {
            hidePopup($prevPopup);
        }

    });

    $pageBody.classList.add('u-block-scroll');
    $popup.classList.add('is-active', 'is-visible');


}

function hidePopup($popup, $popupOverlay) {

    $popup.classList.add('is-closing');

    $popupOverlay.addEventListener('animationend', function (e) {
        if (e.target === $popupOverlay && $popup.classList.contains('is-active') && $popup.classList.contains('is-closing')) {
            $popup.classList.remove('is-active', 'is-visible', 'is-closing');
            $pageBody.classList.remove('u-block-scroll');

        }
    });
}
