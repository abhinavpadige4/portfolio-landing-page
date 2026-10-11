// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple form handler (placeholder)
const form = document.querySelector('.contact-section form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for reaching out! (This is a demo form.)');
    form.reset();
  });
}
