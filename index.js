
// Skill transitioin
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.cardCus');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});

// JavaScript (Vanilla)

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(event) {
            // Remove active class from all nav links
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add active class to the clicked nav link
            this.classList.add("active");
        });
    });
});

// jQuery



document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarLinks = document.querySelectorAll('.navbar-nav li a');
    var navbarCollapse = document.getElementById('navbarSupportedContent');

    navbarLinks.forEach(function(navbarLink) {
        navbarLink.addEventListener('click', function () {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                var collapse = new bootstrap.Collapse(navbarCollapse);
                collapse.hide();
            }
        });
    });
});






