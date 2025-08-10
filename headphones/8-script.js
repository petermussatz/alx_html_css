// 8-script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select the hamburger menu button and the navigation menu
    const menuIcon = document.querySelector('.menu-icon');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    // Add a click event listener to the menu icon
    menuIcon.addEventListener('click', () => {
        // Toggle the 'open' class on the menu icon and the navigation menu
        menuIcon.classList.toggle('open');
        mainNav.classList.toggle('open');
        
        // Toggle the 'aria-expanded' attribute for accessibility
        const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true' || false;
        menuIcon.setAttribute('aria-expanded', !isExpanded);
    });

    // Close the menu when a nav link is clicked (for better mobile UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('open');
            mainNav.classList.remove('open');
            menuIcon.setAttribute('aria-expanded', 'false');
        });
    });
});
