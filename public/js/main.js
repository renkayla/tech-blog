// Example JavaScript code for dynamic styling
document.addEventListener('DOMContentLoaded', () => {
    // Add active class to the current navigation link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
