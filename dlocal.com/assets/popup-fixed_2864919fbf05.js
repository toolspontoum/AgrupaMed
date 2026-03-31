/* ***** FUNCIONES ***** */

(function() {

const $allPopups = document.querySelectorAll('.js-popup-fixed');
const $body = document.querySelector('body');
const $btnOpenPopup = document.querySelectorAll('.js-showPopupFixed');

$btnOpenPopup.forEach(($btn) => {

    $btn.addEventListener('click', (event) => {
        event.preventDefault();
        const btnPopupClass = $btn.getAttribute('data-popup');
        popupInit(btnPopupClass, $btn);
    });

});

function popupInit(popupClass, $btn) {
    const $popup = document.querySelectorAll('.' + popupClass)[0];
    const $popupClose = $popup.querySelectorAll('.js-popup-close');
    const $popupOverlay = $popup.querySelectorAll('.js-popup__overlay')[0];

    showPopup($popup, $btn);


    $popupClose.forEach(($btnClose) => {

        $btnClose.onclick = () => {
            hidePopup($popup, $popupOverlay);
        };

    });

    if($popupOverlay){
        $popupOverlay.onclick = () => {
        hidePopup($popup, $popupOverlay);
    };
    }


}


function showPopup($popup, $btn) {

    
    //Hide all popups
    $allPopups.forEach(($prevPopup) => {

        if ($prevPopup.classList.contains('is-open')) {
            hidePopup($prevPopup);
        }

    });

    $body.classList.add('u-block-scroll');
    $popup.classList.add('is-active', 'is-visible');

}

function hidePopup($popup, $popupOverlay) {

    $popup.classList.add('is-closing');

    $popupOverlay.addEventListener('animationend', function (e) {
        if (e.target === $popupOverlay && $popup.classList.contains('is-active') && $popup.classList.contains('is-closing')) {
            $popup.classList.remove('is-active', 'is-visible', 'is-closing');
            $body.classList.remove('u-block-scroll');

        }
    });
}

})();
