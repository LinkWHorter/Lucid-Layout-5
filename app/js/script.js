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

    $('.btn').click(function() {
        // Удаляем класс .active у всех .plans
        $('.plans, .btn').removeClass('active');
        // Находим родительский элемент .free-plan, .business-plan и т.д.
        var parentBlock = $(this).closest('.free-plan, .business-plan, .personal-plan, .ultimate-plan');
        // Находим внутри родительского элемента второй элемент .plans (цена)
        var secondPlans = parentBlock.find('.plans:nth-child(2)');
        // Добавляем класс .active ко второму элементу .plans внутри найденного родительского блока
        secondPlans.addClass('active');
        $(this).addClass('active');
    });
});