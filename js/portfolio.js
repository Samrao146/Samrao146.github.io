(function($) {
    "use strict";

    // For smooth scrolling - jQuery easing plugin is required
    $('a.scroller[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1250, "easeInOutExpo");
                return false;
            }
        }
    });

    // helps in closing the menu on small devices when menu item is selected
    $('.scroller').click(function() {
        $('.navbar-collapse').collapse('hide');
    });


    $('.progress .progress-bar').css("width",
        function() {
            return $(this).attr("aria-valuenow") + "%";
        }
    );

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // shrink navbar
    navbarCollapse();
    // shrink the navbar on page scrolling 
    $(window).scroll(navbarCollapse);

    // collapse navbar on opening the modal
    $('.portfolio-modal').on('show.bs.modal', function(e) {
        $(".navbar").addClass("d-none");
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
        $(".navbar").removeClass("d-none");
    })

})(jQuery);