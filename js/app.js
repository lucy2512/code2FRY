$(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll >= 50){
            $('.hamburger').addClass('whenscrolled');
            $('nav').addClass('stickyadd');
            $('nav').removeClass('stick');
        }else{
            $('.hamburger').removeClass('whenscrolled');
            $('nav').removeClass('stickyadd');
            $('nav').addClass('stick');
        }
    })

    $('.navbar-nav a[href^="#"]').on('click',function(event){
        event.preventDefault();
        $('html,body').animate({
            scrollTop:$(this.hash).offset().top
         }, 1000);
     });
    
     particlesJS.load("particles-js","js/particlesjs-config.json")

     //Animate on scroll
     AOS.init();

});