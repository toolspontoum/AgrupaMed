
// NAV

function navInit() {

    const $body = document.querySelector('body')
    const $navToggle = document.getElementById('nav-toggle')
    const $nav = document.getElementById('main-nav')
    const $submenuHolder = $nav.querySelector('.c-submenus')
    const $navList = $nav.querySelector('.c-nav__list')
    let submenuHoverTimeout = null;
    let submenuHoverTimeoutDelay = 250;

    
    // ! MOBILE NAV: Start

    function hideNav() {

        if( $navToggle.checked ) $navToggle.checked = false
        
        $nav.classList.add('is-closing');
        $body.classList.remove('nav-open');
        $header.classList.remove('open-submenu--xs','closing-submenu')
        document.querySelector('.c-submenu.is-active--xs')?.classList.remove('is-active--xs');
        document.querySelector('.c-submenu.is-active--xl')?.classList.remove('is-active--xl');

    } // hideNav

    $navToggle.onchange = () => {
        $navToggle.checked ? $body.classList.add('nav-open') : hideNav()
    }
    $nav.addEventListener('animationend', () => {
        if ($nav.classList.contains('is-closing')) 
            $nav.classList.remove('is-closing');
    });



    // ! SUBMENU: Start

    const submenusAr = document.querySelectorAll('.c-submenu')
    const navLinksAr = document.querySelectorAll('.c-nav__link')
    const submenuTriggersAr = document.querySelectorAll('.c-nav__link--submenu')

    // ! Show Mobile

    submenuTriggersAr.forEach( ($btn) => {
        $btn.onclick = (e) => {
            e.preventDefault()


            // DESKTOP: // If hovered, close submenu
            if( window.matchMedia('(min-width: 61.25rem)').matches) 
                return $btn.classList.contains('is-hovered') ? hideSubmenuDesktop( $btn.getAttribute('href').split('#')[1] ) :  showSubmenuDesktop( $btn.getAttribute('href').split('#')[1] )

            // Mobile
            $header.classList.add('open-submenu--xs')
            document.getElementById( $btn.getAttribute('href').split('#')[1] ).classList.add('is-active--xs')


        } // $btn.onclick
    })


    // ! DESKTOP

    function showSubmenuDesktop(id) {
        
        clearTimeout(submenuHoverTimeout)
        submenuHoverTimeout = null;

        let $submenu = document.getElementById( id );
        $submenuHolder.style.setProperty("--submenu-height", `${ $submenu.querySelector('.c-submenu__wrapper').offsetHeight / 10}rem`);

        $header.classList.add('open-submenu--xl')
        document.querySelector(`.c-nav__link[href="#${id}"]`).classList.add('is-hovered')
        $submenu.classList.add('is-active--xl')

        // ! Focus fix
        $submenu.querySelectorAll('a').forEach( ($link) => {
            $link.tabIndex = 0;
        })
        

    } // showSubmenuDesktop

    function hideSubmenuDesktop(id) {

        let $submenu = document.getElementById( id )

        $header.classList.remove('open-submenu--xl')
        document.querySelector(`.c-nav__link[href="#${id}"]`).classList.remove('is-hovered')
        $submenu.classList.remove('is-active--xl')
        
        $submenu.addEventListener('animationend', () => {
            $submenu.scrollTop = 0;
        }, {once: true})

        // ! Focus fix
        $submenu.querySelectorAll('a').forEach( ($link) => {
            $link.tabIndex = -1;
        })

    } // hideSubmenuDesktop
    
    function switchSubmenuDesktop(id) {

        clearTimeout(submenuHoverTimeout)
        submenuHoverTimeout = null;

        let $submenu = document.getElementById( id );
        $submenuHolder.style.setProperty("--submenu-height", `${ $submenu.querySelector('.c-submenu__wrapper').offsetHeight / 10}rem`);

        // Prev
        let $prevSubmenu = document.querySelector('.c-submenu.is-active--xl');
        document.querySelector('.c-nav__link.is-hovered').classList.remove('is-hovered')
        $prevSubmenu.classList.remove('is-active--xl')
        $prevSubmenu.addEventListener('animationend', () => {
            $prevSubmenu.scrollTop = 0;
        }, {once: true})
        
        // Next
        document.querySelector(`.c-nav__link[href="#${id}"]`).classList.add('is-hovered')
        document.getElementById( id ).classList.add('is-active--xl')

        // ! Focus fix
        $prevSubmenu.querySelectorAll('a').forEach( ($link) => {
            $link.tabIndex = -1;
        })

    } // switchSubmenuDesktop

    // ! Show Desktop

    navLinksAr.forEach( ($btn) => {

        // ! Desktop hover

        $btn.onmouseover = () => {
            
            if( ! $btn.classList.contains('c-nav__link--submenu') || ! window.matchMedia('(min-width: 61.25rem)').matches ) return

            if( document.querySelector('.c-submenu.is-active--xl') ) {
                switchSubmenuDesktop( $btn.getAttribute('href').split('#')[1] )
            } else {
                showSubmenuDesktop( $btn.getAttribute('href').split('#')[1] )
            }
        } // $btn.onmouseover

        $btn.onmouseleave = () => {
            
            if( ! $btn.classList.contains('c-nav__link--submenu') || ! window.matchMedia('(min-width: 61.25rem)').matches ) return
            
            submenuHoverTimeout = setTimeout(()=>{
                hideSubmenuDesktop( $btn.getAttribute('href').split('#')[1] )
            }, submenuHoverTimeoutDelay);
            
        } // $btn.onmouseover

    })

    // ! Hide

    submenusAr.forEach( ($submenu) => {

        // ! Focus fix
        $submenu.querySelectorAll('a').forEach( ($link) => {
            $link.tabIndex = -1;
        })

        // ! Mobile Click

        $submenu.querySelector('.c-submenu__back').onclick = () => {
            
            $header.classList.add('closing-submenu')

            $submenu.addEventListener('animationend', () => {
                $submenu.classList.remove('is-active--xs')
            }, {once: true})

            $navList.addEventListener('animationend', () => {
                if ( !$header.classList.contains('closing-submenu') ) return
                $header.classList.remove('open-submenu--xs','closing-submenu')
            }, {once: true})

        } // $submenu click

        // ! Desktop Hover Out

        $submenu.onmouseover = () => {
            
            if( ! window.matchMedia('(min-width: 61.25rem)').matches ) return
            showSubmenuDesktop( $submenu.getAttribute('id') )
            
        } // $btn.onmouseover

        $submenu.onmouseleave = () => {

            if( ! window.matchMedia('(min-width: 61.25rem)').matches ) return

            submenuHoverTimeout = setTimeout(()=>{
                hideSubmenuDesktop( $submenu.getAttribute('id') )
            }, submenuHoverTimeoutDelay);
            
        } // $btn.onmouseover
        
    })

}// navInit

navInit();