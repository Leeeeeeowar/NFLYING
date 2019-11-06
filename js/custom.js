// templatemo 467 easy profile

// PRELOADER

$(window).load(function() {
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function() {
    jQuery(document).ready(function() {
        $('body').backstretch([
            "img/sky3.jpeg",
            "img/sky2.jpeg",
            "img/sky.jpeg"
        ], { duration: 3200, fade: 1300 });
    });
})