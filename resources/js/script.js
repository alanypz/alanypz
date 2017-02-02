$(document).ready(function() {
    /* Designed and written by Alan Yepez. Wanna chat? alanypz(at)gmail(dot)com */
    
    /* Sticky Navigation */
    /* Sticky nav appears at section-bio */
    $('.js--section-bio').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '9%'
    });
    
    /* Navigation Scroll */
    /* Click on element with href="#name" to scroll to element with id="name" */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 60 /* Offset to compensate for sticky nav */
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    /* Contact Row Animation */
    /* Icon row in section-contact enters from bottom of screen  */
    $('.js--wp-contact').waypoint(function(direction) {
        $('.js--wp-contact-row').addClass('animated fadeInUp');
    }, {
      offset: '80%'
    });
    
    /* Site Logo Animation */
    /* Pulse on hover  */
    $('.js--logo-animation').hover(
        function(){ $(this).addClass('animated pulse') },
        function(){ $(this).removeClass('animated pulse') }
    )
    
    /* Site Logo Animation */
    /* Pulse on hover  */
    $('.js--hex-animation').hover(
        function(){ $(this).addClass('animated pulse') },
        function(){ $(this).removeClass('animated pulse') }
    )
    
    /* Mobile Navigation */
    /* Show/hide section links and toggle nav open/close icons */
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    $('.js--nav-icon, .js--main-nav a').click(function(element){
        var clicked = element.target.className;
        if ($(window).width() < 768) {
            nav.slideToggle(100);
        }
        
        if (icon.hasClass('ion-navicon')) {
            icon.removeClass('ion-navicon');
            icon.addClass('ion-close');
        } else {
            
            icon.addClass('ion-navicon');
            icon.removeClass('ion-close');
        }
    });
    
    /* Window Resize Navigation Handling */
    /* Resets navigation elements on window resize */
    $(window).resize(function(){
        if ($(window).width() > 767){
            nav.css('display', 'block');
            icon.addClass('ion-navicon');
            icon.removeClass('ion-close');
        } else {
            nav.css('display', 'none');
            icon.addClass('ion-navicon');
            icon.removeClass('ion-close');
        }
    });
    
});
