// Slick slider
$(document).ready(function(){
    $('.banner').slick({
        autoplay: true,
        arrows: false,
        dots: true,       
        zIndex: -1, 
    });
    $('.partners').slick({
        autoplay: true,
        arrows: false,
        dots: false,    
        slidesToShow: 5,    
    });
  });

 $('#menu-brg').click( function () {
    
    $('#menu-brg').toggleClass('animation-brg');    
    $('body').toggleClass('body-flex');
    $('.body-wrapper').toggleClass('wrapper-small');

    if ($('html').width()<992) {  
    $('body').prepend($('#bottom-header'));
    $('#bottom-header').toggle();

    }
    else {
        $('body').append($('#side-menu'));
        $('#side-menu').toggle(); 
        $('.side-menu__submenu--hidden').toggle(); 
    }
 });

//  $('body').click(function() {
//     if ($('html').width()<992) {  
//         console.log('click');
//         // $('#bottom-header').close();
// } else {
    
//     $('#side-menu').toggle(); 
//     $('.side-menu__submenu--hidden').toggle(); 
// }
//  })

// $(window).scroll(function() {
// if ($(document).scroll() > 100) {
//     $('.header').toggleClass('sticky');
// }
// });