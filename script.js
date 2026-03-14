// Remove loading class immediately
document.body.classList.remove('loading');

// Particles configuration
const particlesConfig = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#2563eb"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#2563eb",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

// Theme icon update function
function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-toggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Particles color update function
function updateParticlesColor(theme) {
    const color = theme === 'dark' ? '#3b82f6' : '#2563eb';
    if (window.particlesJS) {
        window.particlesJS('particles-js', {
            ...particlesConfig,
            particles: {
                ...particlesConfig.particles,
                color: { value: color },
                line_linked: {
                    ...particlesConfig.particles.line_linked,
                    color: color
                }
            }
        });
    }
}

// Mobile Menu with error handling
function initializeMobileMenu() {
    try {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });

            // Close menu when clicking a nav link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    } catch (error) {
        console.error('Error in mobile menu:', error);
    }
}

// Initialize functionality after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles if available
    if (typeof particlesJS !== 'undefined') {
        try {
            particlesJS('particles-js', particlesConfig);
        } catch (error) {
            console.error('Error loading particles:', error);
        }
    }

    // Initialize grid animation
    const rows = document.querySelectorAll('.small.justified.row');
    rows.forEach(row => {
        const squares = row.querySelectorAll('.square');
        squares.forEach(square => {
            const delay = Math.random();
            const duration = 1 + Math.random();
            square.style.cssText = `
                animation-delay: ${delay}s;
                animation-duration: ${duration}s;
            `;
        });
    });

    // Initialize theme
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', savedTheme);
    
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }

        // Add click event listener for theme toggle
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Update theme
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update icon
            updateThemeIcon(newTheme);
            
            // Update particles color
            updateParticlesColor(newTheme);
        });
    }

    // Initialize mobile menu
    initializeMobileMenu();

    // Initialize all animations and functionality
    const preloader = document.querySelector('.preloader');
    const gridContainer = document.querySelector('.grid-container');
    const navbar = document.querySelector('.navbar');

    // Throttled scroll handler for better performance
    let lastScrollY = window.scrollY;
    let ticking = false;
    let rafId = null;

    const handleScroll = () => {
        lastScrollY = window.scrollY;
        
        if (!ticking) {
            rafId = requestAnimationFrame(() => {
                // Only update grid position if it's visible
                if (window.innerHeight > gridContainer.getBoundingClientRect().top) {
                    gridContainer.style.transform = `translateY(${lastScrollY * 0.1}px)`;
                }
                
                // Navbar shadow on scroll
                navbar.classList.toggle('scrolled', lastScrollY > 50);
                
                // Active navigation highlighting
                highlightActiveNavigation();
                
                ticking = true;
            });
            ticking = true;
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Enhanced Scroll to Top functionality
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        let lastScrollTop = 0;
        let isScrollingDown = false;

        // Show/hide button based on scroll position and direction
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            isScrollingDown = scrollTop > lastScrollTop;
            lastScrollTop = scrollTop;

            if (scrollTop > 300) {
                scrollTopBtn.classList.add('visible');
                if (isScrollingDown) {
                    scrollTopBtn.style.transform = 'translateY(0)';
                } else {
                    scrollTopBtn.style.transform = 'translateY(-3px)';
                }
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        // Smooth scroll to top with animation
        scrollTopBtn.addEventListener('click', () => {
            anime({
                targets: document.documentElement,
                scrollTop: 0,
                duration: 1000,
                easing: 'easeInOutQuad'
            });

            // Animate button
            anime({
                targets: scrollTopBtn,
                rotate: [0, 360],
                duration: 500,
                easing: 'easeInOutQuad'
            });
        });
    }

    // Initialize animations only when needed
    const initializeAnimations = () => {
        try {
            initializeHeroAnimations();
            initializeScrollAnimations();
            initializeFormAnimations();
        } catch (error) {
            console.error('Error initializing animations:', error);
        }
    };

    // Simple function to hide preloader
    function hidePreloader() {
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            preloader.style.display = 'none';
            document.body.classList.remove('loading');
        }
    }

    // Try to load particles.js
    if (typeof particlesJS !== 'undefined') {
        try {
            particlesJS('particles-js', particlesConfig, function() {
                setTimeout(hidePreloader, 1000);
            });
        } catch (error) {
            console.error('Error loading particles:', error);
            setTimeout(hidePreloader, 1000);
        }
    } else {
        setTimeout(hidePreloader, 1000);
    }

    // Force hide after 3 seconds regardless
    setTimeout(hidePreloader, 3000);

    // Cleanup function
    return () => {
        console.log('Cleaning up');
        window.removeEventListener('scroll', handleScroll);
        if (rafId) {
            cancelAnimationFrame(rafId);
        }
    };

    // Contact Form Handling
    const contactForm = document.querySelector('.contact-form');
    const submitStatus = document.querySelector('.submit-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            const formInputs = contactForm.querySelectorAll('input:not([type="hidden"]), textarea');
            
            // Show sending state
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            formInputs.forEach(input => input.disabled = true);
            submitStatus.textContent = 'Sending message...';
            submitStatus.className = 'submit-status';
            submitStatus.style.display = 'block';

            try {
                const formData = new FormData(this);
                
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                console.log('Form submission response:', data);

                if (data.success) {
                    submitStatus.textContent = '✓ Message sent successfully!';
                    submitStatus.className = 'submit-status success';
                    this.reset();
                } else {
                    throw new Error(data.message || 'Something went wrong!');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                submitStatus.textContent = '✗ ' + error.message;
                submitStatus.className = 'submit-status error';
            }

            // Reset form state
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
            formInputs.forEach(input => input.disabled = false);

            // Hide status after 3 seconds
            setTimeout(() => {
                submitStatus.style.display = 'none';
            }, 3000);
        });
    }
});

// Hero Section Animations with optimized timing
function initializeHeroAnimations() {
    try {
const heroElements = {
    title: document.querySelector('.hero h1'),
    subtitle: document.querySelector('.hero h2'),
    description: document.querySelector('.hero p'),
    button: document.querySelector('.cta-button')
};

        const timeline = anime.timeline({
            easing: 'easeOutExpo'
        });

        timeline
            .add({
    targets: heroElements.title,
    translateY: [20, 0],
    opacity: [0, 1],
                duration: 600
            })
            .add({
    targets: heroElements.subtitle,
    translateY: [20, 0],
    opacity: [0, 1],
                duration: 600
            }, '-=400')
            .add({
    targets: heroElements.description,
    translateY: [20, 0],
    opacity: [0, 1],
                duration: 600
            }, '-=400')
            .add({
    targets: heroElements.button,
    translateY: [20, 0],
    opacity: [0, 1],
                duration: 600
            }, '-=400');
            
        // Initialize typing animation
        initializeTypingAnimation();
    } catch (error) {
        console.error('Error in hero animations:', error);
    }
}

// Typing Animation
function initializeTypingAnimation() {
    try {
        const typingText = document.querySelector('.typing-text');
        if (!typingText) return;
        
        const phrases = [
            'Full Stack Developer',
            'Cybersecurity Enthusiast',
            'Problem Solver',
            'BCA Student',
            'Web Developer'
        ];
        
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function type() {
            const currentPhrase = phrases[phraseIndex];
            
            if (isDeleting) {
                typingText.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentPhrase.length) {
                typingSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 500;
            }
            
            setTimeout(type, typingSpeed);
        }
        
        setTimeout(type, 1000);
    } catch (error) {
        console.error('Error in typing animation:', error);
    }
}

// Skill Proficiency Animation
function animateProficiencyBars() {
    try {
        const skillCards = document.querySelectorAll('.skill-card[data-proficiency]');
        
        skillCards.forEach(card => {
            const proficiency = parseInt(card.getAttribute('data-proficiency'));
            const proficiencyFill = card.querySelector('.proficiency-fill');
            
            if (proficiencyFill) {
                setTimeout(() => {
                    proficiencyFill.style.width = `${proficiency}%`;
                }, 300);
            }
        });
    } catch (error) {
        console.error('Error animating proficiency bars:', error);
    }
}

// Scroll Animations with Intersection Observer
function initializeScrollAnimations() {
    try {
const sections = document.querySelectorAll('section');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const section = entry.target;
            const title = section.querySelector('.section-title');
            
            if (title) {
                anime({
                    targets: title,
                    translateY: [20, 0],
                    opacity: [0, 1],
                            duration: 600,
                    easing: 'easeOutExpo'
                });
            }

            if (section.id === 'projects') {
                    anime({
                            targets: '.project-card',
                        translateY: [20, 0],
                        opacity: [0, 1],
                            duration: 500,
                            delay: anime.stagger(100),
                        easing: 'easeOutExpo'
                });
            }

            if (section.id === 'skills') {
                anime({
                    targets: '.skill-card',
                    translateY: [20, 0],
                    opacity: [0, 1],
                    duration: 500,
                    delay: anime.stagger(50),
                    easing: 'easeOutExpo'
                });
                
                // Animate proficiency bars
                animateProficiencyBars();
            }

                    // Unobserve after animation
                    sectionObserver.unobserve(section);
        }
    });
}, observerOptions);

sections.forEach(section => sectionObserver.observe(section));

        // Optimized smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
        e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition - headerOffset;

                    window.scrollBy({
                        top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
    } catch (error) {
        console.error('Error in scroll animations:', error);
    }
}

// Form Animations with debouncing
function initializeFormAnimations() {
    try {
        const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
        let animationTimeout;

        const animateInput = (input, scale) => {
            if (animationTimeout) {
                clearTimeout(animationTimeout);
            }

            animationTimeout = setTimeout(() => {
                anime({
                    targets: input,
                    scale: scale,
                    duration: 200,
                    easing: 'easeOutExpo'
                });
            }, 100);
        };

        formInputs.forEach(input => {
            input.addEventListener('focus', () => animateInput(input, 1.02));
            input.addEventListener('blur', () => animateInput(input, 1));
        });
    } catch (error) {
        console.error('Error in form animations:', error);
    }
}

// Hide preloader on window load
window.addEventListener('load', function() {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('hide');
    setTimeout(() => preloader.style.display = 'none', 600);
  }
});

// Active Navigation Highlighting
function highlightActiveNavigation() {
    try {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    } catch (error) {
        console.error('Error in navigation highlighting:', error);
    }
}

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // 't' key for theme toggle
    if (e.key === 't' && !e.ctrlKey && !e.altKey && !e.metaKey) {
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.click();
        }
    }
    
    // 'Home' key to scroll to top
    if (e.key === 'Home' && !e.ctrlKey) {
        e.preventDefault();
        anime({
            targets: document.documentElement,
            scrollTop: 0,
            duration: 800,
            easing: 'easeInOutQuad'
        });
    }
    
    // 'End' key to scroll to bottom
    if (e.key === 'End' && !e.ctrlKey) {
        e.preventDefault();
        anime({
            targets: document.documentElement,
            scrollTop: document.documentElement.scrollHeight,
            duration: 800,
            easing: 'easeInOutQuad'
        });
    }
}); 