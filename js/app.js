//Slick slider
$(document).ready(function(){
    $('.banner__container').slick({
        autoplay: true,
        arrows: false,
        dots: true,       
        zIndex: -1, 
        appendDots: '.banner-dots',
        dotsClass: 'banner-dots__styling',
        slidesToShow: 1,

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

// STicky header

let previousPosition = 0;
let scrollPosition = () => window.pageYOffset;
// console.log(scrollPosition());
let header = document.querySelector('.header');
let isItSticky = () => header.classList.contains('sticky');

document.addEventListener('scroll', () => {
    if (scrollPosition() < previousPosition && !isItSticky()) {
        header.classList.add('sticky');
        // console.log('up');
    }
    else if (scrollPosition() > previousPosition && isItSticky()){
        header.classList.remove('sticky');
        // console.log('down');
    }
    previousPosition = scrollPosition();
})


//Cookie storage

const cookieStorage = {
    getItem: (item) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[item];
    },
    setItem: (item, value) => {
        document.cookie = `${item}=${value}`;
    }
};

const storageType = cookieStorage;
const acceptedName = 'netmatters_name';

const showModal = () => !storageType.getItem(acceptedName);
const savedValue = () => storageType.setItem(acceptedName, 'NewName');


    const bodyWindow = document.querySelector('body');

window.onload = () => {
    console.log('loaded');

    const cookieWindow = document.querySelector('.cookies');
    const cookieAgree = document.querySelector('.cookies__button--accept');
    const cookieChange = document.querySelector('.cookies__button--change');

    if (showModal(storageType)) {
        bodyWindow.classList.add('body-cookies');
        cookieWindow.classList.remove('is-hidden');
    }
    
    cookieAgree.addEventListener('click', () => {

        // savedValue(storageType);
        // storageType.setItem(acceptedName, 'NewName');

        savedValue(storageType);
        console.log('click');
        cookieWindow.classList.add('is-hidden');
        bodyWindow.classList.remove('body-cookies');
    });
    cookieChange.addEventListener('click', () => {
        
        cookieWindow.classList.add('is-hidden');
        bodyWindow.classList.remove('body-cookies');
    })
}