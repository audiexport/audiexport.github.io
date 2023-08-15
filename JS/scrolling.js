$(document).ready(function() {
    $('#toCon, #toCon2').bind('click',function(event){
        var $anchor = $(this);  
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });
    
    $('#bar').animate({ width: '100%' },2500,'swing');
    $('#preload').delay(3000).animate({ top: '-150%' },500,'swing');
});