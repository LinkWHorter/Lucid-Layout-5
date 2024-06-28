$(document).ready(function(){
    //Slick-slider functionality
    $('.slider-block').slick({
        infinite: true,
        slidesToShow: 2, //Two slides showing for default
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 540, // If width of window <540-
                settings: {
                    slidesToShow: 1 // Showing further 1 slide;
                }
            }
        ]
    });

    $('.btn').click(function() {
        // Deleting class .active in all .plans
        $('.plans, .btn').removeClass('active');
        // Finding parent-element for .free-plan, .business-plan and other;
        var parentBlock = $(this).closest('.free-plan, .business-plan, .personal-plan, .ultimate-plan');
        // Finding second element in parent-element .plans (price-block);
        var secondPlans = parentBlock.find('.plans:nth-child(2)');
        // Adding class .active for second element .plans in parent block;
        secondPlans.addClass('active');
        // Adding class .active for active-button;
        $(this).addClass('active');
    });
});