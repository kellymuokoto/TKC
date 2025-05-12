<section class="hero">
  <h2>Welcome to My World</h2>
  <p>Discover more about me and my passion for web development.</p>
  <button id="learn-more">Learn More</button>
</section>

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href').replace('.html', '');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      event.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form validation
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      event.preventDefault();
      alert('Please fill out all fields before submitting.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      event.preventDefault();
      alert('Please enter a valid email address.');
    }
  });
}

// Dynamic year in footer
const footer = document.querySelector('footer p');
if (footer) {
  const currentYear = new Date().getFullYear();
  footer.textContent = `© ${currentYear} The Khaya Company`;
}

// Back-to-top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑ Back to Top';
backToTopButton.id = 'back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.backgroundColor = '#007bff';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Highlight active navigation link
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let currentSection = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 50;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('class');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(currentSection)) {
      link.classList.add('active');
    }
  });
});
