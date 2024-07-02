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

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.main-menu .menu a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'active' class from all menu items
            menuItems.forEach(link => link.classList.remove('active'));

            // Add 'active' class to the clicked menu item
            this.classList.add('active');
        });
    });

    const pageTitle = document.getElementById('lucid-charsets');
    let isLowercase = false;

    pageTitle.addEventListener('click', function() {
        isLowercase = !isLowercase; // Переключаем состояние

        if (isLowercase) {
            pageTitle.style.textTransform = 'lowercase';
        } else {
            pageTitle.style.textTransform = 'uppercase';
        }
    });

    function scrollToDiv(destinationId) {
        const destinationDiv = document.getElementById(destinationId);
        if (destinationDiv) {
          const destinationOffset = destinationDiv.offsetTop;
          const scrollOptions = {
            top: destinationOffset,
            behavior: 'smooth'
          };
          window.scrollTo(scrollOptions);
        }
    }
      
    document.getElementById('home-link').addEventListener('click', function(event) {
        event.preventDefault();
        const destinationId = 'home-block-content'; 
        scrollToDiv(destinationId);
    });

    document.getElementById('feature-link').addEventListener('click', function(event) {
        event.preventDefault();
        const destinationId = 'features-block-content'; 
        scrollToDiv(destinationId);
    });

    document.getElementById('about-link').addEventListener('click', function(event) {
        event.preventDefault();
        const destinationId = 'about-block-content'; 
        scrollToDiv(destinationId);
    });

    document.getElementById('tests-link').addEventListener('click', function(event) {
        event.preventDefault();
        const destinationId = 'tests-block-content'; 
        scrollToDiv(destinationId);
    });

    document.getElementById('price-link').addEventListener('click', function(event) {
        event.preventDefault();
        const destinationId = 'pricing-block-content'; 
        scrollToDiv(destinationId);
    });

    document.getElementById('contact-link').addEventListener('click', function(event) {
        event.preventDefault();
        const destinationId = 'contacts-block-content'; 
        scrollToDiv(destinationId);
    });

    const viewfeatures = document.querySelectorAll('#view-features');

    viewfeatures.forEach(viewfeatures => {
        viewfeatures.addEventListener('click', function() {
            const destinationId = 'features-block-content';
            scrollToDiv(destinationId);
        });
    });

    document.getElementById('back-home-link').addEventListener('click', function(event) {
        event.preventDefault();
        const destinationId = 'main-menu-block-content'; 
        scrollToDiv(destinationId);

        const Items = document.querySelectorAll('.main-menu .menu a');
        Items.forEach(link => link.classList.remove('active'));
        const homemenuItemsed = document.querySelector('#home-link');
        homemenuItemsed.classList.add('active');
    });

    
    const downloadnow1 = document.querySelector('#download-now-first');
    const downloadnow2 = document.querySelector('#download-now-second');

    downloadnow1.addEventListener('click', function() {
        window.open('https://www.google.com/search?q=собачки', '_blank');
    });

    downloadnow2.addEventListener('click', function() {
        window.open('https://www.google.com/search?q=котики', '_blank');
});
});

document.querySelector('.send-message-by-link').addEventListener('click', function() {
    const query1 = document.getElementById('search-message-input-1').value;
    const query2 = document.getElementById('search-message-input-2').value;
    const query3 = document.getElementById('search-message-input-3').value;
    const query4 = document.getElementById('search-message-input-4').value;
    if (query1 || query2 || query3 || query4) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query1)}%20${encodeURIComponent(query2)}%20${encodeURIComponent(query3)}%20${encodeURIComponent(query4)}`;
        window.open(url, '_blank');
    }
});