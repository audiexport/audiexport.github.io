jQuery(document).ready(function($){
    $('#nav-firma, #nav-servicios, #nav-sistemas, #nav-auditorias, #nav-impuestos, #nav-outsourcing, #nav-consultorias').hide();
    
    $('#link-firma').mouseover(function(){
        $('#nav-firma').show();
        $('#nav-servicios, #nav-sistemas').hide();
    });
    
    $('#link-sistemas').mouseover(function(){
        $('#nav-sistemas').show();
        $('#nav-firma, #nav-servicios').hide();
    });
    
    $('#link-servicios').mouseover(function(){
        $('#nav-servicios').show();
        $('#nav-firma, #nav-sistemas').hide();
    });
    
    $('.link-sin-submenu, #banner, #row-migas-de-pan, #main-2020').mouseover(function(){
        $('#nav-firma, #nav-servicios, #nav-sistemas').hide();
    });
    
    
    
    $('#link-auditorias').mouseover(function(){
        $('#nav-auditorias, #nav-servicios').show();
        $('#nav-firma, #nav-sistemas, #nav-impuestos, #nav-outsourcing, #nav-consultorias').hide();
    });
    
    $('#link-impuestos').mouseover(function(){
        $('#nav-impuestos, #nav-servicios').show();
        $('#nav-firma, #nav-sistemas, #nav-auditorias, #nav-outsourcing, #nav-consultorias').hide();
    });
    
    $('#link-outsourcing').mouseover(function(){
        $('#nav-outsourcing, #nav-servicios').show();
        $('#nav-firma, #nav-sistemas, #nav-auditorias, #nav-impuestos, #nav-consultorias').hide();
    });
    
    $('#link-consultorias').mouseover(function(){
        $('#nav-consultorias, #nav-servicios').show();
        $('#nav-firma, #nav-sistemas, #nav-auditorias, #nav-impuestos, #nav-outsourcing').hide();
    });
    
    $('.submenu-sin-submenu').mouseover(function(){
        $('#nav-auditorias, #nav-impuestos, #nav-outsourcing, #nav-consultorias').hide();
    });
    
    $('#box-logo, #nav-firma, #nav-sistemas, #nav-auditorias, #nav-impuestos, #nav-outsourcing, #nav-consultorias').mouseleave(function(){
        $('#nav-firma, #nav-servicios, #nav-sistemas, #nav-auditorias, #nav-impuestos, #nav-outsourcing, #nav-consultorias').hide();
    });
    
    
    
    $('#to-contactenos, #to-contactenos-mobile').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });
    
    
    
    $('#mobile-menu').css('left','-100%');
    $('#a-mobile-close').hide();
    
    $('#a-mobile').click(function(){
        $('#mobile-menu').animate({
            left: 0
        },500,'easeOutExpo');
        $('#a-mobile').hide();
        $('#a-mobile-close').show();
        event.preventDefault();
    });
    
    $('#a-mobile-close, to-contactenos-mobile').click(function(){
        $('#mobile-menu').animate({
            left: '-100%'
        },500,'easeOutExpo');
        $('#a-mobile').show();
        $('#a-mobile-close').hide();
        event.preventDefault();
    });
    
    
    
    $('#svg-01').css('opacity','0');
    $('#precarga').delay(1000).animate({ opacity: 0 },300,'easeInExpo');
    $('#precarga').animate({ top: '-100%' },100,'easeInExpo');
    $('#svg-01').delay(200).animate({ opacity: 1 },300,'easeInExpo');

    $('#link-servicios').click(function(){
        $('.mission-section').hide();
        $('section#row-servicios article').show();
        $('#banner').hide();
        $('#footer').hide();
        $('#link-servicios').addClass('link-sin-submenu link-activo');
        $('#home').removeClass('link-activo link-sin-submenu');
        $('#home').addClass('link-sin-submenu');
        $('#link-firma').removeClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
        $('.mission-section').hide();
        $('.profile-container').hide();
        $('#manual').hide();
        $('#video').hide();
        $('#Layer_2').hide();
    })

    $('#home').click(function(){
        $('section#row-servicios article').hide();
        $('#banner').show()
        $('#footer').hide();
        $('.mission-section').hide();
        $('.profile-container').hide();
        $('#home').addClass('link-sin-submenu link-activo');
        $('#link-servicios').removeClass('link-activo link-sin-submenu');
        $('#link-servicios').addClass('link-sin-submenu');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
        $('#link-firma').removeClass('link-activo');
        $('#manual').hide();
        $('#video').hide();
 
        $('.slick').slickNext();

        
        

 

    })

    $('#to-contactenos').click(function(){
        $('.news-section').hide()
        $('section#row-servicios article').hide();
        $('#banner').hide();
        $('#footer').show();
        $('#link-firma').removeClass('link-activo');
        $('#home').removeClass('link-sin-submenu link-activo');
        $('#link-servicios').removeClass('link-activo link-sin-submenu');
        $('#to-contactenos').addClass('link-sin-submenu link-activo');
        $('.mission-section').hide();
        $('.profile-container').hide();
        $('#manual').hide();
        $('#video').hide();
        $('#Layer_2').hide();
        
    })



    $('#banner a').click(function(){
        text=$('#banner a').text()
        if (text.includes('Ver +')){
            $('#banner a').text('Ver -')
            $('.news-section').show()
            $('.profile-container').hide();
        }else{
            $('#banner a').text('Ver +')

            $('.news-section').hide()
            $('.profile-container').hide();
        }
   
        news_number=$('.slick').slickCurrentSlide();
        
        for(var i=0;i<=4;i++){
            news_number_1=i+1
            noticia_ocultar_mostrar='.news-item:nth-child('+news_number_1+')'
            if (i==news_number){
                $(noticia_ocultar_mostrar).show();
            }else{
            
            
            $(noticia_ocultar_mostrar).hide();}
        }
        
        $('html, body').animate({
            scrollTop: $('.news-container').offset().top
          }, 1000); // 1000 es la duración del desplazamiento en milisegundos
        
    })

    $('.slick-next').click(function(){
        $('#banner a').text('Ver +')
        
    })

    $('.slick-prev').click(function(){
        $('#banner a').text('Ver +')
    })

    $('#description').click(function(){
        $('section#row-servicios article').hide();
        $('.mission-section').hide();
        $('#description_section').show();
        $('.profile-container').hide();
        $('#Layer_2').hide();
        $('#home').removeClass('link-sin-submenu link-activo');
        $('#link-servicios').removeClass('link-activo link-sin-submenu');
        $('#link-firma').addClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
    })

    $('#mision_1').click(function(){
        $('section#row-servicios article').hide();
        $('.mission-section').hide();
        $('#mision').show();
        $('.profile-container').hide();
        $('#Layer_2').hide();
        $('#home').removeClass('link-sin-submenu link-activo');
        $('#link-servicios').removeClass('link-activo link-sin-submenu');
        $('#link-firma').addClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
    })

    $('#vision_1').click(function(){
        $('section#row-servicios article').hide();
        $('.mission-section').hide();
        $('#vision').show();
        $('.profile-container').hide();
        $('#Layer_2').hide();
        $('#home').removeClass('link-sin-submenu link-activo');
        $('#link-servicios').removeClass('link-activo link-sin-submenu');
        $('#link-firma').addClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
    })

    $('#manual_1').click(function(){
        $('#Layer_2').hide();
        $('section#row-servicios article').hide();
        $('#footer').hide();
        $('news-section').hide();
        $('.mission-section').hide();
        $('#manual').show();
        $('#svg').show();
        $('.profile-container').hide();

        $('#home').removeClass('link-sin-submenu link-activo');
        $('#link-servicios').removeClass('link-activo link-sin-submenu');
        $('#link-firma').addClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
    })
    
    $('#video_1').click(function(){
        $('section#row-servicios article').hide();
       $('.profile-container').hide();
        $('.mission-section').hide();
        $('#video').show();
        $('#Layer_2').hide();

        $('#home').removeClass('link-sin-submenu link-activo');
        $('#link-servicios').removeClass('link-activo link-sin-submenu');
        $('#link-firma').addClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
    })

    $('#perfiles').click(function(){
        $('section#row-servicios article').hide();
       $('#manual').hide();
       $('#video').hide();
        $('.profile-container').show();
        $('#Layer_2').hide();

        $('#home').removeClass('link-sin-submenu link-activo');
        $('#link-servicios').removeClass('link-activo link-sin-submenu');
        $('#link-firma').addClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
    })
    

    $('#servicio_1_1').mouseover(function(){
        $('.servicio_1').show();
    })

    $('#servicio_2_2').mouseover(function(){
        $('.servicio_2').show();
    })

    $('#servicio_3_3').mouseover(function(){
        $('.servicio_3').show();
    })

    $('#servicio_4_4').mouseover(function(){
        $('.servicio_4').show();
    })

    $('#servicio_5_5').mouseover(function(){
        $('.servicio_5').show();
    })

    $('#servicio_1_1').mouseout(function(){
        $('.servicio_1').hide();
    })

    $('#servicio_2_2').mouseout(function(){
        $('.servicio_2').hide();
    })

    $('#servicio_3_3').mouseout(function(){
        $('.servicio_3').hide();
    })

    $('#servicio_4_4').mouseout(function(){
        $('.servicio_4').hide();
    })

    $('#servicio_5_5').mouseout(function(){
        $('.servicio_5').hide();
    })

    $('#aplicativo').click(function(){
        $('.Aplicativo1').show();
        $('.news-section').hide()
        $('.mission-section').hide();
        $('#Layer_2').hide();
        $('#banner').hide();
        $('#footer').hide();
        $('#link-servicios').addClass('link-sin-submenu link-activo');
        $('#home').removeClass('link-activo link-sin-submenu');
        $('#home').addClass('link-sin-submenu');
        $('#link-firma').removeClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
        $('.mission-section').hide();
        $('.profile-container').hide();
        $('#manual').hide();
        $('#video').hide();

    })

    $('#portafolio').click(function(){
        $('.Aplicativo1').hide();
        $('.news-section').hide()
        $('.mission-section').hide();
        $('#Layer_2').show();
        $('#banner').hide();
        $('#footer').hide();
        $('#link-servicios').addClass('link-sin-submenu link-activo');
        $('#home').removeClass('link-activo link-sin-submenu');
        $('#home').addClass('link-sin-submenu');
        $('#link-firma').removeClass('link-activo');
        $('#to-contactenos').removeClass('link-sin-submenu link-activo');
        $('.mission-section').hide();
        $('.profile-container').hide();
        $('#manual').hide();
        $('#video').hide();

    })

});

