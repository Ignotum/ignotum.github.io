$(window).load(function(){
    var windowHeight        = $(window).height(),
        footerHeight        = $('footer').height(),
        heightDocument      = (windowHeight) + ($('.content').height()) + ($('footer').height()) - 20;

    $('#scroll-animate, #scroll-animate-main').css({
        'height' :  heightDocument + 'px'
    });

    $('header').css({
        'height' : windowHeight + 'px',
        'line-height' : windowHeight + 'px'
    });

    $('.wrapper-parallax').css({
        'margin-top' : windowHeight + 'px'
    });

    window.onscroll = function(){
        var scroll = window.scrollY;
      
        if(scroll > windowHeight - 50){
          $('#menu').css('height', '50px');
        } else {
          $('#menu').css('height', '50px');
        }

        $('#scroll-animate-main').css({
            'top' : '-' + scroll + 'px'
        });
      
      

    }
});