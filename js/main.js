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
window.onscroll = () => {
    const nav = document.querySelector('#navbar');
    if(this.scrollY > 300) {
        $('.NavigationButton').addClass('menu_black');
        $('.NavigationButton').removeClass('menu_white');
    }
    else {
        $('.NavigationButton').removeClass('menu_black');
        $('.NavigationButton').addClass('menu_white');
    }
};

// Tambah Identitas
function tambahIdentitas() {
    document.getElementById('tambahIdentitas').style.display = "block";
    document.getElementById('buttonIdentitas').style.display = "none";
}

// Tutup Tambah Identitas
function tutupTambahIdentitas() {
    document.getElementById('tambahIdentitas').style.display = "none";
    document.getElementById('buttonIdentitas').style.display = "block";
}