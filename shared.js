// Shared nav and footer for all pages
document.addEventListener('DOMContentLoaded', function() {
  // Insert nav
  const navHTML = `
  <div class="banner">
    Welcome! Stay Tuned — Gracie is Launching Soon! <a href="chat.html">Read more</a>
  </div>
  <nav>
    <a href="index.html" class="nav-logo">
      <span class="nav-logo-text">Anchored by Grace</span>
    </a>
    <button class="nav-toggle" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
    <ul class="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="info-hub.html">Information Hub</a></li>
      <li><a href="chat.html">Chat with Gracie</a></li>
      <li><a href="tools.html">Tools & Worksheets</a></li>
      <li><a href="faq.html">FAQ</a></li>
      <li><a href="privacy.html">Privacy</a></li>
    </ul>
    <div class="nav-social">
      <a href="https://www.linkedin.com/in/rachaelsheers" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      <a href="https://www.instagram.com/anch_oredbygrace" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    </div>
  </nav>`;

  const footerHTML = `
  <footer>
    <div class="footer-grid">
      <div class="footer-brand">
        <h3>Anchored by Grace</h3>
        <p>Trauma and addiction recovery via a virtual support hub. Designed to connect, encourage, and embrace all that you are.</p>
        <div class="footer-social" style="margin-top: 20px;">
          <a href="https://www.linkedin.com/in/rachaelsheers" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/anch_oredbygrace" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="info-hub.html">Information Hub</a></li>
          <li><a href="chat.html">Chat with Gracie</a></li>
          <li><a href="tools.html">Tools & Worksheets</a></li>
          <li><a href="faq.html">FAQ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <ul>
          <li><a href="services.html">Services</a></li>
          <li><a href="resources.html">Resources</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="mailto:rachael@anchoredbygrace.online">rachael@anchoredbygrace.online</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Anchored by Grace. All rights reserved.</span>
      <span>Built with ❤️ for recovery</span>
    </div>
  </footer>`;

  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);
});
