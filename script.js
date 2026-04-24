document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navActions = document.querySelector('.nav-actions');
    
    if (mobileMenuBtn && navActions) {
        mobileMenuBtn.addEventListener('click', () => {
            navActions.style.display = navActions.style.display === 'flex' ? 'none' : 'flex';
            if(navActions.style.display === 'flex') {
                navActions.style.flexDirection = 'column';
                navActions.style.position = 'absolute';
                navActions.style.top = '100%';
                navActions.style.left = '0';
                navActions.style.width = '100%';
                navActions.style.background = 'rgba(2, 6, 23, 0.95)';
                navActions.style.padding = '2rem';
            }
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation styles initially
    document.querySelectorAll('.glass-card, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Code Window Typing Effect
    const codeElement = document.querySelector('.code-content code');
    if (codeElement) {
        const htmlContent = codeElement.innerHTML.trim();
        codeElement.innerHTML = '';
        let i = 0;
        let currentHTML = '';

        function typeWriter() {
            if (i < htmlContent.length) {
                let char = htmlContent.charAt(i);
                currentHTML += char;
                i++;

                if (char === '<') {
                    while (i < htmlContent.length && htmlContent.charAt(i - 1) !== '>') {
                        currentHTML += htmlContent.charAt(i);
                        i++;
                    }
                }

                codeElement.innerHTML = currentHTML + '<span class="typing-cursor">|</span>';
                setTimeout(typeWriter, Math.random() * 30 + 10);
            } else {
                codeElement.innerHTML = currentHTML + '<span class="typing-cursor">|</span>'; // Keep cursor blinking
            }
        }

        setTimeout(typeWriter, 1000);
    }
});
