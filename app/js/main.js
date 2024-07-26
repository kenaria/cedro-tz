$(function BurgerMenu(){
    $('.menu-burger').on('click', function(){
      $('.menu-burger').toggleClass('active-burger');
      $('.header__menu-content').toggleClass('menu-opened');
      $('.wrapper').toggleClass('lock');
    });
});

$(function Like(){
    $('.trendy__favorite').on('click', function(){
      $('.trendy__slide').toggleClass('favorite-active');
    });
});

$(function productsSlide(){
    var swiper = new Swiper('.trendy__slider' ,{
        slidesPerGroup: 1,
        slidesPerView: 1,
        speed: 1000,
        grabCursor: true,
        spaceBetween: 8,
        loop:false,
        breakpoints:{ 
            370:  {
                slidesPerView: 1.5,
                spaceBetween: 16,
            },  
            470:  {
                slidesPerView: 2,
                spaceBetween: 16,
            }, 
            768:  {
                slidesPerView: 2,
                spaceBetween: 32,
            },  
            992:{
                slidesPerView: 3,
                spaceBetween: 32,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
      
            1920: {
                slidesPerView: 4,
                spaceBetween: 32,
            },
        },   
    });
});