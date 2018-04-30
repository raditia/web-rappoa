$(document).ready(function() {
    AOS.init( {
        // uncomment below for on-scroll animations to played only once
        // once: true
    }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// Change navbar text color on certain section
$(document).ready(function(){
    $(window).scroll(function(){
        var light_pos = $('#visimisi').offset().top;
        var light_height = $('#visimisi').height();
        var menu_pos = $('.NavigationButton').offset().top;
        var menu_height = $('.NavigationButton').height();
        var scroll = $(window).scrollTop();
        console.log('light',light_pos);
        console.log('menu',menu_pos);
        console.log('scroll',scroll);

        if(menu_pos > light_pos && menu_pos < (light_pos + light_height)) {
            $('.NavigationButton').addClass('menu_black');
            $('.NavigationButton').removeClass('menu_white');
        }
        else {
            $('.NavigationButton').removeClass('menu_black');
            $('.NavigationButton').addClass('menu_white');
        }

    })
})

