// Simple site JS: nav toggle, set year, form validation
document.addEventListener('DOMContentLoaded', function () {
  // year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // nav toggle (handles multiple toggles on pages)
  const toggles = document.querySelectorAll('#nav-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = document.getElementById('main-nav');
      const ul = nav ? nav.querySelector('ul') : null;
      if (ul) {
        const isOpen = ul.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
      }
    });
  });

  // form validation with simple UI feedback
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      const invalid = [];

      if (!name.value.trim()) invalid.push('name');
      if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) invalid.push('email');
      if (!message.value.trim()) invalid.push('message');

      // show basic browser validation if invalid
      if (invalid.length) {
        e.preventDefault();
        alert('Please fill in your name, a valid email, and a message.');
        const firstInvalid = form.querySelector('#' + invalid[0]);
        if (firstInvalid) firstInvalid.focus();
      } else {
        // allow submit to mailto fallback; you can integrate with Formspree here
      }
    });
  }

  // close mobile nav when clicking a link
  const navLinks = document.querySelectorAll('#main-nav a');
  navLinks.forEach(a => a.addEventListener('click', () => {
    const ul = document.querySelector('#main-nav ul');
    if (ul && ul.classList.contains('open')) ul.classList.remove('open');
    const btn = document.querySelector('#nav-toggle');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }));
});