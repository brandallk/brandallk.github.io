(function() {
    
    $(document).ready( function() {
        
        $(".nav-link").click(toggleActiveNavLink);

        $(".skill-icon").on("mouseenter", updateSkillHighlite);
        $(".skill-icon").on("click", updateSkillHighlite);

        // $(".contact-link").hover(toggleToolTip);
    });

    function toggleActiveNavLink(evt) {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
    }

    function updateSkillHighlite(evt) {
        var $name = $(this).attr("data-skillName");
        var $proficiency = $(this).attr("data-skillProficiency");
        $(".highlite-details .percentage").text($proficiency);
        $(".highlite-details .skill-name").text($name);
    }

    // function toggleToolTip(evt) {
    //     $(this).tooltip('show');
    // }
})();