
// TABPANELS

const tabsClasses = {
    panel: '.js-tab-group__panel',
    tab: '.js-tab-group__tab',
    nav: '.js-tab-group__nav',
    navHeading: '.js-tab-group__nav-heading',
    navList: '.js-tab-group__nav-list',
}
const tabGroupsAr = document.querySelectorAll('.js-tab-group')
let tabGroupId = 'dy-tabgroup-';
let count = 0;

function tabsInit() {

    tabGroupsAr.forEach(($group) => {

        // ! A11Y

        // Ids
        let navId = tabGroupId + count;
        let headingId = `${navId}__heading`;
        let $nav = $group.querySelector(tabsClasses.nav)

        // Nav
        $nav.setAttribute('id', navId);
        $nav.setAttribute('aria-describedby', headingId)

        // Heading
        $nav.querySelector(tabsClasses.navHeading)?.setAttribute('aria-describedby', headingId)

        // List
        $nav.querySelector(tabsClasses.navList)?.setAttribute('role', 'tablist')

        // Btns
        let $btns = $nav.querySelectorAll(tabsClasses.tab)
        $btns.forEach(($btn, i) => {

            // Ids
            let btnId = `${navId}__tab-${i}`
            let panelId = $btn.getAttribute('href').split('#')[1]

            // Btn Attributes
            $btn.setAttribute('id', btnId)
            $btn.setAttribute('role', 'tab')
            $btn.setAttribute('aria-controls', $btn.getAttribute('href').split('#')[1])
            $btn.setAttribute('aria-selected', 'false')
            if ($btn.classList.contains('is-active')) $btn.setAttribute('aria-selected', 'true')

            // Tabpanel
            let $panel = document.getElementById(panelId)
            $panel?.setAttribute('role', 'tabpanel')
            $panel?.setAttribute('aria-labelledby', btnId)

        })

        // Increase count
        count++



        // ! TAB INTERACTION

        let tabsAr = $group.querySelectorAll(tabsClasses.tab)

        tabsAr.forEach(($btn) => {

            $btn.onclick = (e) => {
                e.preventDefault()
                if ($btn.classList.contains('is-active')) return

                // Btn
                $group.querySelector(`${tabsClasses.tab}.is-active`)?.classList.remove('is-active')
                $group.querySelector(`${tabsClasses.panel}.is-active`)?.classList.remove('is-active')

                // Tab panel
                $btn.classList.add('is-active')
                document.getElementById($btn.getAttribute('href').split('#')[1]).classList.add('is-active')

                // Nav
                let $nav = $group.querySelector(tabsClasses.navList)
                if ($nav) $nav.scrollLeft = $btn.offsetLeft;

                // COVERAGE NAV
                if ($btn.classList.contains('js-coverage-nav__btn')) switchCoverageImage($btn)
                    
                const countryIso = $btn.getAttribute('data-country-iso');
                if (countryIso) {
                    const activeMap = document.querySelector('.js-region-map.is-visible');
                    if (activeMap) {
                        const activePaths = activeMap.querySelectorAll('path.is-active');
                        activePaths.forEach(path => path.classList.remove('is-active'));

                        const countryPath = activeMap.querySelector(`path[data-country="${countryIso}"]`);
                        if (countryPath) {
                            countryPath.classList.add('is-active');
                        }
                    }
                }

            } // onclick

        }) // foreach Tab btns

    }) // foreach tabGroups

} // tabsInit

tabsInit();
