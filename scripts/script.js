/* ==========================================
   PORTFOLIO WEBSITE - SCRIPT.JS
   All Interactive Functionality
   ========================================== */

// ========== GLOBAL VARIABLES ==========
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const modal = document.getElementById('project-modal');
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');

// ========== PROJECT DATA ==========
const projectsData = {
    foodiecorner: {
        title: 'FoodieCorner',
        image: 'assets/images/foodiecorner.png',
        description: 'FoodieCorner is a premium restaurant website designed to provide an exceptional online dining experience. The platform features an elegant menu showcase, online ordering system, table reservation functionality, and a beautiful gallery of culinary creations.',
        features: [
            'Responsive menu with categories and filters',
            'Online ordering system with cart functionality',
            'Table reservation with date/time picker',
            'Image gallery with lightbox effect',
            'Customer testimonials and reviews',
            'Contact form with location map'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        website: 'https://mhishaambinsaghir-tech.github.io/FoodieCorner/',
        code: 'https://github.com/mhishaambinsaghir-tech/FoodieCorner'
    },
    salonlux: {
        title: 'SalonLux',
        image: 'assets/images/salonlux.png',
        description: 'SalonLux is an elegant spa and salon website that embodies luxury and relaxation. The platform showcases beauty services, allows online appointment booking, features team member profiles, and includes a stunning gallery of transformations.',
        features: [
            'Service catalog with detailed descriptions',
            'Online booking system with calendar',
            'Team member profiles with specialties',
            'Before/after gallery showcase',
            'Customer testimonials slider',
            'Newsletter subscription integration'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX Design'],
        website: 'https://mhishaambinsaghir-tech.github.io/SalonLux/',
        code: 'https://github.com/mhishaambinsaghir-tech/SalonLux'
    },
    gympro: {
        title: 'GymPro',
        image: 'assets/images/gympro.png',
        description: 'GymPro is a modern fitness center website built with an energetic dark theme. It includes class schedules, membership plans, trainer profiles, workout programs, and a motivational blog section to inspire fitness enthusiasts.',
        features: [
            'Interactive class schedule with filters',
            'Membership plans comparison',
            'Trainer profiles with certifications',
            'BMI calculator and fitness tools',
            'Success stories and transformations',
            'Mobile-first responsive design'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Dark Theme'],
        website: 'https://mhishaambinsaghir-tech.github.io/GymPro/',
        code: 'https://github.com/mhishaambinsaghir-tech/GymPro'
    },
    lenscraft: {
        title: 'LensCraft',
        image: 'assets/images/lenscraft.png',
        description: 'LensCraft is a professional photography portfolio website featuring a stunning bento-style gallery layout. The platform includes portfolio categories, client testimonials, service packages, and an integrated booking system for photo sessions.',
        features: [
            'Bento-style responsive gallery',
            'Portfolio categories (Wedding, Portrait, Event)',
            'Image lightbox with navigation',
            'Service packages with pricing',
            'Online session booking',
            'SEO optimized structure'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Portfolio Design'],
        website: 'https://mhishaambinsaghir-tech.github.io/LensCraft/',
        code: 'https://github.com/mhishaambinsaghir-tech/LensCraft'
    },
    taleemi: {
        title: 'Taleemi Markaz',
        image: 'assets/images/taleemi.png',
        description: 'Taleemi Markaz is an Urdu education platform website with full RTL (right-to-left) support. The site features course listings, teacher profiles, student registration, testimonials, and an image gallery showcasing the learning environment.',
        features: [
            'Complete RTL layout support',
            'Course catalog with filtering',
            'Teacher profiles with qualifications',
            'Student registration form',
            'Urdu typography optimization',
            'Contact form via Formspree integration'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'RTL', 'Urdu'],
        website: 'https://mhishaambinsaghir-tech.github.io/Taaleemi-Markaz/',
        code: 'https://github.com/mhishaambinsaghir-tech/Taaleemi-Markaz'
    },
    wanderbound: {
        title: 'WanderBound',
        image: 'assets/images/wanderbound.png',
        description: 'WanderBound is an adventure travel agency website with vibrant visuals and exciting outdoor imagery. The platform features destination guides, tour packages, customer testimonials, an image gallery, and an integrated booking system.',
        features: [
            'Destination carousel with parallax',
            'Tour packages grid with filters',
            'Customer testimonials slider',
            'Adventure photo gallery',
            'Booking form with validation',
            'Responsive mobile-first design'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Travel'],
        website: 'https://mhishaambinsaghir-tech.github.io/WanderBound/',
        code: 'https://github.com/mhishaambinsaghir-tech/WanderBound'
    },
    doctorconnect: {
        title: 'DoctorConnect',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&fit=crop',
        description: 'DoctorConnect is a medical appointment booking platform designed with a clean healthcare theme. The website features doctor profiles, specialty-based search, appointment scheduling, patient testimonials, and health resources.',
        features: [
            'Doctor profiles with specializations',
            'Appointment booking system',
            'Specialty-based search and filters',
            'Patient testimonials and ratings',
            'Health tips and blog section',
            'Urdu language support with RTL'
        ],
        tags: ['HTML', 'CSS', 'JavaScript', 'Healthcare', 'Urdu'],
        website: '#',
        code: '#'
    }
};

// ========== MOBILE NAVIGATION TOGGLE ==========
function toggleMobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ========== SMOOTH SCROLLING ==========
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== ACTIVE SECTION HIGHLIGHTING ==========
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// ========== NAVBAR SCROLL EFFECT ==========
function navbarScrollEffect() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
}

window.addEventListener('scroll', navbarScrollEffect);

// ========== SCROLL ANIMATIONS (AOS-LIKE) ==========
function revealOnScroll() {
    const fadeElements = document.querySelectorAll('.fade-in');

    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Trigger on page load

// ========== PROJECT MODAL FUNCTIONALITY ==========
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        const project = projectsData[projectId];

        if (project) {
            openModal(project);
        }
    });
});

function openModal(project) {
    // Populate modal content
    document.getElementById('modal-project-image').src = project.image;
    document.getElementById('modal-project-title').textContent = project.title;
    document.getElementById('modal-project-description').textContent = project.description;

    // Populate features list
    const featuresList = document.getElementById('modal-features-list');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });

    // Populate tags
    const modalTags = document.getElementById('modal-tags');
    modalTags.innerHTML = '';
    project.tags.forEach(tag => {
        const span = document.createElement('span');
        span.className = 'tag';
        span.textContent = tag;
        modalTags.appendChild(span);
    });

    // Set button links
    document.getElementById('modal-visit-btn').href = project.website;
    document.getElementById('modal-code-btn').href = project.code;

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal events
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ========== TESTIMONIALS SLIDER ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');

function showSlide(index) {
    // Handle wraparound
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === currentSlide) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Event listeners for testimonial navigation
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Dots navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
    });
});

// Auto-advance testimonials every 5 seconds
setInterval(nextSlide, 5000);

// ========== CONTACT FORM VALIDATION ==========
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Success message (since no backend)
    alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`);

    // Reset form
    contactForm.reset();
});

// ========== INITIALIZE ON PAGE LOAD ==========
document.addEventListener('DOMContentLoaded', function () {
    // Trigger initial scroll animations
    revealOnScroll();

    // Initialize Hero Animations
    initHeroAnimations();

    // Set initial active nav link
    highlightActiveSection();

    // Show first testimonial
    showSlide(0);

    console.log('Portfolio website loaded successfully! 🚀');
});

// ========== HERO ANIMATIONS ==========
function initHeroAnimations() {
    // 1. Typing Animation
    const words = ["Frontend Developer", "UI/UX Designer", "Web Creator", "Problem Solver"];
    let i = 0;
    let timer;
    const typingEffect = document.querySelector('.typing-text');

    if (typingEffect) {
        function typeingLoop() {
            let currentWord = words[i];
            let currentChar = currentWord.split('');
            let loopTyping = function () {
                if (currentChar.length > 0) {
                    typingEffect.textContent += currentChar.shift();
                } else {
                    setTimeout(deletingLoop, 2000); // Wait before deleting
                    return;
                }
                timer = setTimeout(loopTyping, 100);
            };
            typingEffect.textContent = "";
            loopTyping();
        }

        function deletingLoop() {
            let word = typingEffect.textContent;
            let loopDeleting = function () {
                if (word.length > 0) {
                    word = word.substring(0, word.length - 1);
                    typingEffect.textContent = word;
                } else {
                    i = (i + 1) % words.length; // Move to next word
                    typeingLoop();
                    return;
                }
                timer = setTimeout(loopDeleting, 50);
            };
            loopDeleting();
        }

        typeingLoop();
    }

    // 2. Stats Counter Animation
    const statsContainer = document.querySelector('.hero-stats');
    if (statsContainer) {
        const observerOptions = {
            root: null,
            threshold: 0.5
        };

        const statsObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = document.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-count');
                        const speed = 200; // The lower the slower

                        const updateCount = () => {
                            const count = +counter.innerText;
                            const inc = target / speed;

                            if (count < target) {
                                counter.innerText = Math.ceil(count + inc);
                                setTimeout(updateCount, 40);
                            } else {
                                counter.innerText = target + "+";
                            }
                        };

                        updateCount();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        statsObserver.observe(statsContainer);
    }
}



