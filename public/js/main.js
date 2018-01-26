(function() {
    
    $(document).ready( () => {
        // setProjectCardHeight();
        
        $(".nav-link").click(toggleActiveNavLink);

        $(".contact-link").hover(toggleToolTip);

        // window.onresize(setProjectCardHeight);
    });

    function toggleActiveNavLink(evt) {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    }

    function toggleToolTip(evt) {
        $(this).tooltip('show');
    }

    // function setProjectCardHeight(evt) {
    //     var projectCards = Array.from(document.querySelectorAll(".project-card"));
    //     var width = projectCards[0].offsetWidth; console.log(width);
    //     projectCards.forEach( function(card) {
    //         card.style.height = width;
    //     });
    // }
})();