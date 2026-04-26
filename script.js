document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Nav Links
    const navLinks = document.querySelectorAll('nav ul li a, .btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Intersection Observer for Fade-In Animations
    const fadeElems = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElems.forEach(elem => {
        appearOnScroll.observe(elem);
    });

    // 3. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    
    // Check for saved user preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        
        let theme = 'dark-theme';
        if (document.body.classList.contains('light-theme')) {
            theme = 'light-theme';
        }
        localStorage.setItem('theme', theme);
    });
});
