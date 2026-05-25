/* ============================================================
   PORTFOLIO — main.js
   ============================================================ */

/* ── 1. Scroll-triggered fade-in animations ── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));


/* ── 2. Contact form — basic validation + submit handler ── */
const sendBtn = document.getElementById('send-btn');

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    /*
      TO WIRE UP REAL EMAIL DELIVERY:
      Option A — Netlify Forms: add  data-netlify="true"  to a <form> wrapper in index.html.
      Option B — EmailJS: https://www.emailjs.com (free tier, no backend needed).
      Option C — Formspree: replace the alert below with a fetch() to your Formspree endpoint.

      Example (Formspree):
      ───────────────────────────────────────────────────────
      const response = await fetch('https://formspree.io/f/YOUR_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (response.ok) { ... } else { ... }
      ───────────────────────────────────────────────────────
    */

    alert(`Thanks ${name}! Your message has been received. I'll get back to you within 24 hours.`);

    // Clear fields after submission
    document.getElementById('name').value    = '';
    document.getElementById('email').value   = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
  });
}


/* ── 3. Active nav link highlight on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = '';                   // reset all
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--blue-bright)'; // highlight current
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => navObserver.observe(section));
