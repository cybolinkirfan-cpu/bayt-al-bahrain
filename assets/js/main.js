/**
 * Bayt Al Bahrain - Premium Marketplace
 * Core Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    
    // Header Scroll Effect
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case page starts scrolled
    handleScroll();

    // Mobile Menu Toggle (Placeholder for future expansion)
    // const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    // ...
});

console.log('Bayt Al Bahrain - Premium Experience Initialized');
