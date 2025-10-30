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
}