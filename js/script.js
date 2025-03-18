// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const header = document.querySelector('header');
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰';
    header.appendChild(mobileMenuToggle);

    mobileMenuToggle.addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active');
    });

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // Image loading animation
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';
        
        img.addEventListener('load', function() {
            img.style.opacity = '1';
        });
    });
});
