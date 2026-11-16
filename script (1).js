// Mobile navigation works on every page
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('show');
    const isOpen = navLinks.classList.contains('show');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.textContent = '☰';
    });
  });
}

// Display the current year in the footer on every page
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Contact form validation (the form is only on contact.html)
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  const feedback = document.getElementById('formFeedback');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Remove previous error messages before validating again
    document.querySelectorAll('.error-message').forEach(function (error) {
      error.textContent = '';
    });
    feedback.textContent = '';
    feedback.className = 'form-feedback';

    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (fullName.length < 2) {
      document.getElementById('nameError').textContent = 'Please enter your full name.';
      isValid = false;
    }
    if (!emailPattern.test(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }
    if (subject.length < 3) {
      document.getElementById('subjectError').textContent = 'Please enter a subject.';
      isValid = false;
    }
    if (message.length < 10) {
      document.getElementById('messageError').textContent = 'Your message should be at least 10 characters.';
      isValid = false;
    }

    if (!isValid) {
      feedback.textContent = 'Please correct the fields marked above.';
      feedback.classList.add('error');
      return;
    }

    feedback.textContent = 'Your details look good! This demo form is not connected to a message service.';
    feedback.classList.add('success');
    contactForm.reset();
  });
}
