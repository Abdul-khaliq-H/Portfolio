
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

$(document).ready(function() {
    $(".nav-link").on("click", function() {
        // Remove active class from all nav links
        $(".nav-link").removeClass("active");
        
        // Add active class to the clicked nav link
        $(this).addClass("active");
    });

    // Handling the certifications button separately
    $("#certificationsBtn").on("click", function() {
        // Add active class to the button
        $(this).toggleClass("active");
    });
});







