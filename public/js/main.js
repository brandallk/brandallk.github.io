(function() {
    $(document).ready( () => {       
        $(".nav-link").click(toggleActiveNavLink);

        $(".contact-link").hover(toggleToolTip);
    });

    function toggleActiveNavLink(evt) {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    }

    function toggleToolTip(evt) {
        $(this).tooltip('show');
    }
})();