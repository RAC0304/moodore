// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close menu when clicking on a menu item
document.querySelectorAll('.nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const getStartedBtn = document.getElementById('getStartedBtn');

// Create modal elements
function createModal(type) {
    // Create modal container
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = `${type}Modal`;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    
    // Create close button
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-modal');
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    
    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    const heading = document.createElement('h3');
    heading.textContent = type === 'login' ? 'Login to Your Account' : 'Create an Account';
    modalHeader.appendChild(heading);
    
    // Create form
    const form = document.createElement('form');
    form.classList.add(`${type}-form`);
    
    // Email field
    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');
    
    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', `${type}Email`);
    emailLabel.textContent = 'Email';
    
    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = `${type}Email`;
    emailInput.classList.add('form-control');
    emailInput.placeholder = 'Enter your email';
    emailInput.required = true;
    
    emailGroup.appendChild(emailLabel);
    emailGroup.appendChild(emailInput);
    
    // Password field
    const passwordGroup = document.createElement('div');
    passwordGroup.classList.add('form-group');
    
    const passwordLabel = document.createElement('label');
    passwordLabel.setAttribute('for', `${type}Password`);
    passwordLabel.textContent = 'Password';
    
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = `${type}Password`;
    passwordInput.classList.add('form-control');
    passwordInput.placeholder = 'Enter your password';
    passwordInput.required = true;
    
    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);
    
    // Add additional fields for signup
    if (type === 'signup') {
        const nameGroup = document.createElement('div');
        nameGroup.classList.add('form-group');
        
        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'signupName');
        nameLabel.textContent = 'Full Name';
        
        const nameInput = document.createElement('input');
        nameInput.type = 'text';
        nameInput.id = 'signupName';
        nameInput.classList.add('form-control');
        nameInput.placeholder = 'Enter your full name';
        nameInput.required = true;
        
        nameGroup.appendChild(nameLabel);
        nameGroup.appendChild(nameInput);
        
        form.appendChild(nameGroup);
    }
    
    // Submit button
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.classList.add('form-button');
    submitBtn.textContent = type === 'login' ? 'Login' : 'Sign Up';
    
    // Form footer
    const formFooter = document.createElement('div');
    formFooter.classList.add('form-footer');
    
    const footerText = document.createElement('p');
    if (type === 'login') {
        footerText.innerHTML = `Don't have an account? <a href="#" id="switchToSignup">Sign up</a>`;
    } else {
        footerText.innerHTML = `Already have an account? <a href="#" id="switchToLogin">Login</a>`;
    }
    
    formFooter.appendChild(footerText);
    
    // Append elements to form
    form.appendChild(emailGroup);
    form.appendChild(passwordGroup);
    form.appendChild(submitBtn);
    
    // Append everything to modal content
    modalContent.appendChild(closeBtn);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(form);
    modalContent.appendChild(formFooter);
    
    // Append modal content to modal
    modal.appendChild(modalContent);
    
    // Add form submission event
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showToast(`${type === 'login' ? 'Login' : 'Registration'} successful!`, 'success');
        modal.style.display = 'none';
    });
    
    // Add to body
    document.body.appendChild(modal);
    
    // Add event listeners for switching between modals
    if (type === 'login') {
        document.getElementById('switchToSignup').addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'none';
            document.getElementById('signupModal').style.display = 'block';
        });
    } else {
        document.getElementById('switchToLogin').addEventListener('click', function(e) {
            e.preventDefault();
            modal.style.display = 'none';
            document.getElementById('loginModal').style.display = 'block';
        });
    }
    
    return modal;
}

// Create login and signup modals
const loginModal = createModal('login');
const signupModal = createModal('signup');

// Show modals on button click
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'block';
});

getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'block';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Toast notification function
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

function showToast(message, type = 'success') {
    toastMessage.textContent = message;
    toast.className = 'toast show ' + type;
    
    setTimeout(() => {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.closest('.product-card').querySelector('.product-title').textContent;
        showToast(`"${productName}" added to your promotion list!`, 'success');
    });
});

// Back to top button functionality
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Create FAQ accordion
function createFaqSection() {
    const faqData = [
        {
            question: "How do I join the affiliate program?",
            answer: "To join our affiliate program, simply click on the 'Sign Up' button and complete the registration form. Once your application is reviewed and approved (usually within 24 hours), you'll receive access to your affiliate dashboard and promotional materials."
        },
        {
            question: "What commission rates do you offer?",
            answer: "Our commission rates range from 25% to 50% depending on the product category and your performance level. Top affiliates can earn higher commission rates through our tiered commission structure."
        },
        {
            question: "When and how do I get paid?",
            answer: "We process payments twice a month, on the 1st and 15th. You can choose to receive payments via PayPal, direct bank transfer, or cryptocurrency. The minimum payout threshold is $50."
        },
        {
            question: "Do you provide promotional materials?",
            answer: "Yes! We provide a wide range of promotional materials including banners, email templates, product images, review content, and more. All these resources are available in your affiliate dashboard."
        },
        {
            question: "How long is the cookie duration?",
            answer: "We offer a generous 90-day cookie duration, which means you earn commission on any purchase made within 90 days of a visitor clicking on your affiliate link."
        }
    ];

    // Create FAQ section
    const faqSection = document.createElement('section');
    faqSection.classList.add('faq');
    faqSection.id = 'faq';

    const container = document.createElement('div');
    container.classList.add('container');

    const sectionTitle = document.createElement('div');
    sectionTitle.classList.add('section-title');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Frequently Asked Questions';
    
    const subtitle = document.createElement('p');
    subtitle.textContent = 'Find answers to the most common questions about our affiliate program';
    
    sectionTitle.appendChild(heading);
    sectionTitle.appendChild(subtitle);
    
    const accordion = document.createElement('div');
    accordion.classList.add('accordion');
    
    // Create accordion items from faqData
    faqData.forEach((item, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');
        
        const accordionHeader = document.createElement('div');
        accordionHeader.classList.add('accordion-header');
        
        const accordionTitle = document.createElement('h3');
        accordionTitle.textContent = item.question;
        
        const accordionIcon = document.createElement('i');
        accordionIcon.classList.add('fas', 'fa-chevron-down');
        
        accordionHeader.appendChild(accordionTitle);
        accordionHeader.appendChild(accordionIcon);
        
        const accordionContent = document.createElement('div');
        accordionContent.classList.add('accordion-content');
        
        const accordionText = document.createElement('p');
        accordionText.textContent = item.answer;
        
        accordionContent.appendChild(accordionText);
        
        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionContent);
        
        // Add event listener to toggle accordion
        accordionHeader.addEventListener('click', () => {
            accordionItem.classList.toggle('active');
        });
        
        accordion.appendChild(accordionItem);
    });
    
    container.appendChild(sectionTitle);
    container.appendChild(accordion);
    faqSection.appendChild(container);
    
    // Insert FAQ section before the CTA section
    const ctaSection = document.querySelector('.cta');
    document.body.insertBefore(faqSection, ctaSection);
}

// Create FAQ section when the page loads
document.addEventListener('DOMContentLoaded', createFaqSection);

// Handle search form
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchForm.querySelector('.search-input').value.trim();
    if (searchTerm) {
        showToast(`Searching for "${searchTerm}"`, 'success');
        searchForm.reset();
    }
});

// Add animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Set initial styles for animation
document.querySelectorAll('.feature-card, .product-card, .testimonial-card').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Listen for scroll to trigger animations
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);