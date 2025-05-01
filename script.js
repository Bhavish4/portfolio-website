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
                
                ticking = false;
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
    const form = document.getElementById('form');
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitStatus = form.querySelector('.submit-status');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        submitStatus.style.display = "block";
        submitStatus.textContent = "Sending message...";
        submitStatus.className = "submit-status";
        
        // Create form data with all required fields
        const formData = new FormData(form);
        formData.append('redirect', 'false'); // Prevent automatic redirect
        formData.append('redirect_url', ''); // No redirect URL needed
        
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData)
            });
            
            const data = await res.json();
            
            if (data.success) {
                submitStatus.textContent = "Message sent successfully!";
                submitStatus.className = "submit-status success";
                form.reset();
                
                // Reset form fields to their initial state
                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.classList.remove('filled');
                    const label = input.nextElementSibling;
                    if (label && label.tagName === 'LABEL') {
                        label.style.transform = 'none';
                        label.style.top = '1rem';
                    }
                });
                
                // Log success for debugging
                console.log('Form submitted successfully:', data);
            } else {
                throw new Error(data.message || 'Failed to send message');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            submitStatus.textContent = "Failed to send message. Please try again.";
            submitStatus.className = "submit-status error";
        }
        
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        setTimeout(() => {
            submitStatus.style.display = "none";
        }, 3000);
    });
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
    } catch (error) {
        console.error('Error in hero animations:', error);
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