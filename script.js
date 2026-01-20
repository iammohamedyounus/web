// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close mobile menu after click
    document.querySelector('.nav-links').classList.remove('active');
  });
});