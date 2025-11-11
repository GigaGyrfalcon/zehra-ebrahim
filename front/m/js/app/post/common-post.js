svg4everybody();

// Mobile navigation toggle
const burgerTrigger = document.querySelector('.burger-trigger');
const mainNav = document.querySelector('.main-nav');
const mainNavClose = document.querySelector('.main-nav-close');

if (burgerTrigger && mainNav) {
    burgerTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        mainNav.classList.toggle('active');
        document.body.classList.add('noscroll');
    });
}

if (mainNavClose && mainNav) {
    mainNavClose.addEventListener('click', function(e) {
        e.preventDefault();
        mainNav.classList.remove('active');
        document.body.classList.remove('noscroll');
    });
}

// Header scroll effect after hero section
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');

if (header && hero) {
    window.addEventListener('scroll', function() {
        const heroHeight = hero.offsetHeight;
        const headerHeight = header.offsetHeight;
        const scrollPosition = window.scrollY || window.pageYOffset;
        const triggerPoint = heroHeight - headerHeight;
        
        if (scrollPosition > triggerPoint) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

$('.js-dropdown-trigger').on('click', function () {
    var _trigger = $(this);
    _trigger.parent().toggleClass('open');
    $('.js-dropdown-trigger').not(_trigger).parent().removeClass('open');
    return false;
});

$('.js-faq-accordion-trigger').on('click', function () {
    var _trigger = $(this);
    _trigger.parent().toggleClass('open');
    $('.js-faq-accordion-trigger').not(_trigger).parent().removeClass('open');
    return false;
});

$('.js-products-filters-trigger').on('click', function () {
    var _trigger = $(this);
    _trigger.parent().toggleClass('open');
    $('.js-products-filters-trigger').not(_trigger).parent().removeClass('open');
    return false;
});

// Section background video loading behavior
const sectionBg = document.querySelector('.section-bg');

if (sectionBg) {
    const sectionBgMedia = sectionBg.querySelector('.section-bg-media');
    const sectionBgVideo = sectionBg.querySelector('.section-bg-video');
    
    // Only execute if both image and video exist
    if (sectionBgMedia && sectionBgVideo) {
        let videoLoaded = false;
        let minDelayPassed = false;
        
        // Check if video is fully loaded
        sectionBgVideo.addEventListener('canplaythrough', function() {
            videoLoaded = true;
            transitionIfReady();
        }, { once: true });
        
        // Enforce minimum 3 second delay
        setTimeout(function() {
            minDelayPassed = true;
            transitionIfReady();
        }, 2000);
        
        // Only transition when both conditions are met
        function transitionIfReady() {
            if (videoLoaded && minDelayPassed) {
                sectionBg.classList.add('video-loaded');
            }
        }
    }
}