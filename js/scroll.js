/**
 * Scroll-based animations and navigation tracking
 */

const REVEAL_THRESHOLD = 0.15;
const SCROLL_OFFSET = 100;
// Ordered by their vertical position in the DOM so the "last passed" wins.
const SECTIONS = ['servicios', 'demo', 'precios', 'nosotros', 'contacto'];

export function setupReveal() {
  const observerOptions = {
    threshold: REVEAL_THRESHOLD,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });
}

export function setupActiveNavTracking() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';

    for (const sectionId of SECTIONS) {
      const el = document.getElementById(sectionId);
      if (el && el.offsetTop <= window.scrollY + SCROLL_OFFSET) {
        current = sectionId;
      }
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });
}
