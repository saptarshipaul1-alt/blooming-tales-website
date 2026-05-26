/* ============================================================
   BLOOMING TALES — MAIN JAVASCRIPT
   Mobile nav toggle + smooth interactions
   ============================================================ */

(function () {
  'use strict';

  /* ─── Mobile navigation toggle ─────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen.toString());
    });

    // Close nav when a link is clicked (mobile UX)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close nav when clicking outside
    document.addEventListener('click', function (event) {
      if (
        navLinks.classList.contains('open') &&
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Keyboard accessibility: close on Escape
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.focus();
      }
    });
  }

  /* ─── Contact form: client-side validation & UX ─────────── */
  const contactForm  = document.getElementById('contactForm');
  const formSuccess  = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      const requiredFields = contactForm.querySelectorAll('[required]');
      let isValid = true;

      // Clear previous error states
      requiredFields.forEach(function (field) {
        field.style.borderColor = '';
      });

      // Validate required fields
      requiredFields.forEach(function (field) {
        const value = field.value.trim();

        if (!value) {
          field.style.borderColor = '#C8553D';
          if (isValid) { field.focus(); }
          isValid = false;
        }

        // Basic email format check
        if (field.type === 'email' && value) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(value)) {
            field.style.borderColor = '#C8553D';
            if (isValid) { field.focus(); }
            isValid = false;
          }
        }
      });

      if (!isValid) {
        event.preventDefault();
        return;
      }

      /*
        When deployed to Netlify, the form submits natively and
        Netlify handles the POST. The success div below is shown
        for development previews only (not on Netlify where the
        page redirects). To customize Netlify's redirect, add:
          action="/thank-you.html"
        to the <form> element in contact.html.
      */
    });

    // Show success message if URL has ?submitted=true (dev testing)
    if (window.location.search.includes('submitted=true') && formSuccess) {
      contactForm.style.display = 'none';
      formSuccess.style.display  = 'block';
    }
  }

  /* ─── Scroll-triggered fade-in for cards ────────────────── */
  if ('IntersectionObserver' in window) {
    const fadeTargets = document.querySelectorAll(
      '.service-card, .why-card, .service-block, .approach-card'
    );

    // Set initial opacity to 0 for animation targets
    fadeTargets.forEach(function (el) {
      el.style.opacity    = '0';
      el.style.transform  = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity   = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeTargets.forEach(function (el) { observer.observe(el); });
  }

  /* ─── Active nav link highlight ─────────────────────────── */
  (function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-links a:not(.nav-cta)');

    navItems.forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.style.color = 'var(--color-green)';
      }
    });
  }());

}());
