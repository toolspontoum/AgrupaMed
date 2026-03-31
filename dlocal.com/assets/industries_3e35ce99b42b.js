function industriesNavInit() {
    const $subSubmenuLink = document.querySelectorAll('.js-sub-submenu-link');

    if ($subSubmenuLink.length > 0) {
        $subSubmenuLink.forEach(($link) => {
            $link.addEventListener('mouseenter', () => {
                document.querySelectorAll(".js-sub-submenu-link.is-active").forEach(itemLink => itemLink.classList.remove('is-active'));
                document.querySelectorAll(".js-sub-submenu-content.is-visible").forEach(itemContent => itemContent.classList.remove('is-visible'));

                const $subSubmenuContentId = $link.getAttribute('data-submenu');
                const $subSubmenuContent = document.getElementById($subSubmenuContentId);

                if ($subSubmenuContent) {
                    $subSubmenuContent.classList.add('is-visible');
                    $link.classList.add('is-active');
                }
            });
        });
    }
}
industriesNavInit();