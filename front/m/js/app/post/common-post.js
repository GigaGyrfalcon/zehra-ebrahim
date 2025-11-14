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

// Products filters toggle
const productsFilterTrigger = document.querySelector('.products-list-fitler-trigger');
const productsFilters = document.querySelector('.products-filters');
const productsFiltersClose = document.querySelector('.products-filters-close');

if (productsFilterTrigger && productsFilters) {
    productsFilterTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        productsFilters.classList.toggle('active');
        document.body.classList.add('noscroll');
    });
}

if (productsFiltersClose && productsFilters) {
    productsFiltersClose.addEventListener('click', function(e) {
        e.preventDefault();
        productsFilters.classList.remove('active');
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

// Mega-menu toggle functionality
const hasDropdownItems = document.querySelectorAll('.has-dropdown.main-nav-item');
const megaMenu = document.querySelector('.mega-menu');
const megaMenuContent = document.querySelector('.mega-menu-content');

hasDropdownItems.forEach(function(item) {
    const menuLink = item.querySelector('.main-nav-link');
    
    if (menuLink && megaMenu) {
        menuLink.addEventListener('click', function(e) {
            e.preventDefault();
            megaMenu.classList.toggle('open');
        });
    }
});

// Close mega-menu when clicking outside (only on desktop ≥1200px)
if (megaMenu && megaMenuContent) {
    document.addEventListener('click', function(e) {
        // Only apply on screens 1200px and above
        if (window.innerWidth >= 1200) {
            // Check if mega-menu is open
            if (megaMenu.classList.contains('open')) {
                // Check if click is outside mega-menu-content
                if (!megaMenuContent.contains(e.target)) {
                    // Also check if the click is not on the menu link that opens it
                    let clickedOnMenuLink = false;
                    hasDropdownItems.forEach(function(item) {
                        const menuLink = item.querySelector('.main-nav-link');
                        if (menuLink && menuLink.contains(e.target)) {
                            clickedOnMenuLink = true;
                        }
                    });
                    
                    if (!clickedOnMenuLink) {
                        megaMenu.classList.remove('open');
                    }
                }
            }
        }
    });
}

// Mega-menu back button - closes mega-menu
const megaMenuBack = document.querySelector('.mega-menu-back');

if (megaMenuBack && megaMenu) {
    megaMenuBack.addEventListener('click', function(e) {
        e.preventDefault();
        megaMenu.classList.remove('open');
    });
}

// Mega-menu close button - closes both mega-menu and main navigation
const megaMenuClose = document.querySelector('.mega-menu-close');

if (megaMenuClose && megaMenu && mainNav) {
    megaMenuClose.addEventListener('click', function(e) {
        e.preventDefault();
        megaMenu.classList.remove('open');
        mainNav.classList.remove('active');
        document.body.classList.remove('noscroll');
    });
}

// Search overlay toggle functionality
const searchTrigger = document.querySelector('.js-search-trigger');
const searchOverlay = document.querySelector('.search-overlay');
const searchContent = document.querySelector('.search-content');

if (searchTrigger && searchOverlay) {
    searchTrigger.addEventListener('click', function(e) {
        e.preventDefault();
        searchOverlay.classList.toggle('open');
    });
}

// Close search overlay when clicking outside (only on desktop ≥1200px)
if (searchOverlay && searchContent) {
    document.addEventListener('click', function(e) {
        // Only apply on screens 1200px and above
        if (window.innerWidth >= 1200) {
            // Check if search overlay is open
            if (searchOverlay.classList.contains('open')) {
                // Check if click is outside search-content
                if (!searchContent.contains(e.target)) {
                    // Also check if the click is not on the search trigger
                    if (searchTrigger && !searchTrigger.contains(e.target)) {
                        searchOverlay.classList.remove('open');
                    }
                }
            }
        }
    });
}

// Search overlay close button
const searchClose = document.querySelector('.search-close');

if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', function(e) {
        e.preventDefault();
        searchOverlay.classList.remove('open');
    });
}

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