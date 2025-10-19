// ===================================
// GIFTORITY WEBSITE - MAIN JAVASCRIPT
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    // Form validation
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            let valid = true;
            this.querySelectorAll('input[required], textarea[required]').forEach(input => {
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = '#ff0000';
                } else input.style.borderColor = '#E0E0E0';
            });
            if (!valid) {
                e.preventDefault();
                alert('Please fill in all required fields');
            }
        });
    });
    // Animate on scroll
    const animateOnScroll = () => {
        document.querySelectorAll('.service-card, .feature, .testimonial-card, .product-card').forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };
    document.querySelectorAll('.service-card, .feature, .testimonial-card, .product-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
    });
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    console.log('Giftority site loaded successfully!');
});

