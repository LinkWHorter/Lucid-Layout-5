$(document).ready(function(){
    $('.slider-block').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 540, // Если ширина экрана меньше 360px
                settings: {
                    slidesToShow: 1 // Показывать только 1 слайд
                }
            }
        ]
    });
});