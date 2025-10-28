// CONSOLIDATED JAVASCRIPT FOR ALL PAGES

document.addEventListener('DOMContentLoaded', function() {
    
    // RESPONSIVE NAVBAR TOGGLE
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle && navLinks) {
        console.log('✅ Navbar elements found successfully');
        
        menuToggle.addEventListener('click', function() {
            console.log('🔘 Menu toggle clicked');
            navLinks.classList.toggle('show-links');
            console.log('📱 Menu state:', navLinks.classList.contains('show-links') ? 'OPEN' : 'CLOSED');
        });
    } else {
        console.error('❌ Navbar elements not found:', { menuToggle, navLinks });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navLinks && menuToggle) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('show-links')) {
                navLinks.classList.remove('show-links');
                console.log('📱 Menu closed (outside click)');
            }
        }
    });

    // ===========================================
    // PRICING PAGE - BILLING TOGGLE
    // ===========================================
    const billingToggle = document.getElementById('billingToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            if (this.checked) {
                monthlyPrices.forEach(price => price.style.display = 'none');
                annualPrices.forEach(price => price.style.display = 'inline');
            } else {
                monthlyPrices.forEach(price => price.style.display = 'inline');
                annualPrices.forEach(price => price.style.display = 'none');
            }
        });
    }

    // ===========================================
    // FAQ ACCORDION
    // ===========================================
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');
                
                // Close all FAQ items
                faqItems.forEach(faq => faq.classList.remove('active'));
                
                // If the clicked item wasn't active, open it
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // ===========================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });


    // SCROLL ANIMATIONS
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe pricing cards
    const pricingCards = document.querySelectorAll('.pricing-card-main');
    pricingCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe addon cards
    const addonCards = document.querySelectorAll('.addon-card');
    addonCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe service feature cards
    const serviceCards = document.querySelectorAll('.service-feature-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        const staggerDelay = (index % 4) * 0.1;
        card.style.transition = `opacity 0.6s ease ${staggerDelay}s, transform 0.6s ease ${staggerDelay}s`;
        
        observer.observe(card);
    });

    // Observe why choose cards
    const whyChooseCards = document.querySelectorAll('.why-choose-card');
    whyChooseCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // ===========================================
    // SERVICE NUMBERS ANIMATIONS
    // ===========================================
    const serviceNumbers = document.querySelectorAll('.service-number');
    
    serviceNumbers.forEach(number => {
        number.style.opacity = '0';
        number.style.transform = 'scale(0.5)';
        number.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        const numberObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.5 });
        
        numberObserver.observe(number);
    });

    // BENEFIT TAGS ANIMATIONS
    const benefitsTags = document.querySelectorAll('.benefit-tag');
    benefitsTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
        
        const tagObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.5 });
        
        tagObserver.observe(tag);
    });

    // SECTION HEADERS ANIMATIONS
    const sectionHeaders = document.querySelectorAll('.service-header-new');
    sectionHeaders.forEach(header => {
        const h2 = header.querySelector('h2');
        const tagline = header.querySelector('.service-tagline');
        
        if (h2) {
            h2.style.opacity = '0';
            h2.style.transform = 'translateY(20px)';
            h2.style.transition = 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s';
        }
        
        if (tagline) {
            tagline.style.opacity = '0';
            tagline.style.transform = 'translateY(20px)';
            tagline.style.transition = 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s';
        }
        
        const headerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (h2) {
                        h2.style.opacity = '1';
                        h2.style.transform = 'translateY(0)';
                    }
                    if (tagline) {
                        tagline.style.opacity = '1';
                        tagline.style.transform = 'translateY(0)';
                    }
                }
            });
        }, { threshold: 0.3 });
        
        headerObserver.observe(header);
    });

    // PARALLAX EFFECT FOR SERVICE NUMBERS
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                serviceNumbers.forEach(number => {
                    const rect = number.getBoundingClientRect();
                    const centerY = rect.top + rect.height / 2;
                    const windowCenter = window.innerHeight / 2;
                    const distance = centerY - windowCenter;
                    
                    if (Math.abs(distance) < window.innerHeight / 2) {
                        const parallax = distance * 0.05;
                        number.style.transform = `translateY(${parallax}px) scale(1)`;
                    }
                });
                
                ticking = false;
            });
            
            ticking = true;
        }
    });

    // CARD HOVER ANIMATIONS
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.card-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // FEATURED BADGE PULSE ANIMATION
    const featuredBadge = document.querySelector('.featured-badge');
    if (featuredBadge) {
        setInterval(function() {
            featuredBadge.style.transform = 'scale(1.05)';
            setTimeout(function() {
                featuredBadge.style.transform = 'scale(1)';
            }, 200);
        }, 3000);
        
        featuredBadge.style.transition = 'transform 0.2s ease';
    }

    // ===========================================
    // COUNTER ANIMATION FOR SERVICE NUMBERS
    // ===========================================
    serviceNumbers.forEach(number => {
        const targetNumber = parseInt(number.textContent);
        let currentNumber = 0;
        let hasAnimated = false;
        
        const numberObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    const duration = 1000;
                    const increment = targetNumber / (duration / 16);
                    
                    const counter = setInterval(function() {
                        currentNumber += increment;
                        if (currentNumber >= targetNumber) {
                            currentNumber = targetNumber;
                            clearInterval(counter);
                        }
                        number.textContent = Math.floor(currentNumber).toString().padStart(2, '0');
                    }, 16);
                }
            });
        }, { threshold: 0.5 });
        
        numberObserver.observe(number);
    });

    console.log('✅ All page scripts initialized successfully');
});














// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById('name').value.trim(),
                email: document.getElementById('email').value.trim(),
                phone: document.getElementById('phone').value.trim(),
                company: document.getElementById('company').value.trim(),
                service: document.getElementById('service').value,
                message: document.getElementById('message').value.trim()
            };

            // Validate required fields
            if (!formData.name || !formData.email || !formData.phone || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }

            // Format message for WhatsApp
            let whatsappMessage = `🔔 *New Contact Form Submission*\n\n`;
            whatsappMessage += `*Name:* ${formData.name}\n`;
            whatsappMessage += `*Email:* ${formData.email}\n`;
            whatsappMessage += `*Phone:* ${formData.phone}\n`;
            
            if (formData.company) {
                whatsappMessage += `*Company:* ${formData.company}\n`;
            }
            
            if (formData.service) {
                whatsappMessage += `*Service Interest:* ${formData.service}\n`;
            }
            
            whatsappMessage += `\n*Message:*\n${formData.message}`;

            // Encode message for WhatsApp URL
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // WhatsApp number (without + or spaces)
            const whatsappNumber = '447884756793';
            
            // Create WhatsApp URL
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Also prepare email link as fallback
            const emailSubject = encodeURIComponent('Contact Form Submission from ' + formData.name);
            let emailBody = `Name: ${formData.name}%0D%0A`;
            emailBody += `Email: ${formData.email}%0D%0A`;
            emailBody += `Phone: ${formData.phone}%0D%0A`;
            
            if (formData.company) {
                emailBody += `Company: ${formData.company}%0D%0A`;
            }
            
            if (formData.service) {
                emailBody += `Service Interest: ${formData.service}%0D%0A`;
            }
            
            emailBody += `%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
            
            const emailURL = `mailto:info@calienviromentsupportservices.com?subject=${emailSubject}&body=${emailBody}`;

            // Show success message
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';

            // Open WhatsApp in a new tab
            setTimeout(() => {
                window.open(whatsappURL, '_blank');
            }, 500);

            // Also trigger email client (optional - you can remove this if you only want WhatsApp)
            setTimeout(() => {
                window.location.href = emailURL;
            }, 1500);

            // Reset form after 3 seconds
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.display = 'flex';
                successMessage.style.display = 'none';
            }, 5000);
        });
    }

    // Phone number formatting (optional)
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            // Allow only numbers, spaces, +, and -
            let value = e.target.value.replace(/[^\d\s\+\-]/g, '');
            e.target.value = value;
        });
    }

    // Email validation (optional)
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function(e) {
            const email = e.target.value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailPattern.test(email)) {
                e.target.style.borderColor = '#e74c3c';
                // You can add an error message here if needed
            } else {
                e.target.style.borderColor = '';
            }
        });
    }
});