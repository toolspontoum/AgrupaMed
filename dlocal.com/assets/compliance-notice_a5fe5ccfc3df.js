var complianceNoticeScrollTriggerInstance = null;

window.dataLayer = window.dataLayer || []

function complianceNoticeInit() {

    const $complianceNotice = document.querySelector('.js-compliance-notice');

    if (!$complianceNotice) return


    const $complianceNoticeHolder = $complianceNotice.querySelector('.js-compliance-notice-holder');
    const $hideComplianceNotice = document.querySelectorAll('.js-hide-compliance-notice');
    

    //LS
    const complianceNoticeStatus = 'true';
    let closedNoticeIdLS = localStorage.getItem('closed-compliance-popup');
    let complianceNoticeExpiration = localStorage.getItem('compliance-popup-expiration');


    if (complianceNoticeExpiration) {
        let lastDateSaved = new Date(complianceNoticeExpiration);
        let currentDate = new Date();
        let timeDifference = currentDate.getTime() - lastDateSaved.getTime();
        let daysPassed = timeDifference / (1000 * 3600 * 24);

        if (daysPassed >= 7) {

            closedNoticeIdLS = 'false';
        }
    }
    

    if (closedNoticeIdLS !== complianceNoticeStatus) {

        $complianceNotice.classList.add('is-visible');

        //LS

        $hideComplianceNotice.forEach(($hideBtn) => {

            $hideBtn.onclick = () => {
                hideComplianceNotice($complianceNotice, $complianceNoticeHolder);
                localStorage.setItem('closed-compliance-popup', complianceNoticeStatus);
                // SAVE DATE                
                localStorage.setItem('compliance-popup-expiration', new Date().toISOString());
            };
        });
    }

}

function hideComplianceNotice($complianceNotice, $complianceNoticeHolder) {
    if ($complianceNotice.classList.contains('is-visible')) {
        $complianceNotice.classList.add('is-closing');

        $complianceNoticeHolder.addEventListener('animationend', function (e) {
            if (e.target === $complianceNoticeHolder && $complianceNotice.classList.contains('is-visible') && $complianceNotice.classList.contains('is-closing')) {
                $complianceNotice.classList.remove('is-visible', 'is-closing');
            }
        });
    }
}

complianceNoticeInit();
