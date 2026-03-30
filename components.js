/* Shared nav + footer injected on every page */
(function () {
  /* Detect if we're in the pages/ subdirectory */
  const isSubpage = window.location.pathname.includes('/pages/');
  const base = isSubpage ? '..' : '.';

  /* ---- Theme toggle ---- */
  const root = document.documentElement;
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);

  function sunIcon() { return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'; }
  function moonIcon() { return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'; }

  /* ---- Nav HTML ---- */
  const logoSVG = `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Yard Signs by AJC logo">
    <rect width="44" height="44" rx="10" fill="var(--color-primary)"/>
    <path d="M8 10 L22 6 L36 10 L36 32 L22 38 L8 32 Z" fill="none" stroke="white" stroke-width="2"/>
    <path d="M22 14 L22 30 M16 19 L22 14 L28 19" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="22" cy="32" r="2" fill="white"/>
  </svg>`;

  const navHTML = `
<header class="site-header" id="site-header">
  <div class="container">
    <nav class="nav-inner" aria-label="Main navigation">
      <a href="${base}/index.html" class="logo-link" aria-label="Yard Signs by AJC — Home">
        ${logoSVG}
        <span class="logo-text">
          <span class="logo-name">Yard Signs by AJC</span>
          <span class="logo-tagline">Polk County, Oregon</span>
        </span>
      </a>

      <ul class="nav-links" role="list">
        <li><a href="${base}/index.html" data-page="home">Home</a></li>
        <li><a href="${base}/pages/book-now.html" data-page="book">Book Now</a></li>
        <li><a href="${base}/pages/gallery.html" data-page="gallery">Gallery</a></li>
        <li><a href="${base}/pages/pricing.html" data-page="pricing">Pricing</a></li>
        <li class="nav-dropdown">
          <a href="#" data-page="seasonal">Seasonal</a>
          <ul class="dropdown-menu" role="list">
            <li><a href="${base}/pages/grad-keepsakes.html">Grad Keepsakes</a></li>
            <li><a href="${base}/pages/sport-keepsakes.html">Sport Keepsakes</a></li>
            <li><a href="${base}/pages/new-products.html">Banners</a></li>
            <li><a href="${base}/pages/boo-greetings.html">Boo Greetings 🎃</a></li>
            <li><a href="${base}/pages/elf-hunt.html">Elf Hunt 🧝</a></li>
            <li><a href="${base}/pages/christmas.html">All Things Christmas 🎄</a></li>
            <li><a href="${base}/pages/egg-hunt.html">Egg Hunt 🐣</a></li>
            <li><a href="${base}/pages/fundraisers.html">Fundraisers</a></li>
          </ul>
        </li>
        <li><a href="${base}/pages/terms.html" data-page="terms">Terms</a></li>
      </ul>

      <div class="nav-actions">
        <button class="theme-toggle" data-theme-toggle aria-label="Toggle dark mode">${moonIcon()}</button>
        <a href="${base}/pages/book-now.html" class="btn btn-primary btn-sm">Book Now</a>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
      </div>
    </nav>
  </div>
</header>

<!-- Mobile Nav -->
<div class="mobile-nav" id="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <div class="mobile-nav-header">
    <a href="${base}/index.html" class="logo-link">
      ${logoSVG}
      <span class="logo-text">
        <span class="logo-name">Yard Signs by AJC</span>
      </span>
    </a>
    <button id="nav-close" aria-label="Close menu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
  </div>
  <a href="${base}/index.html">Home</a>
  <a href="${base}/pages/book-now.html">Book Now</a>
  <a href="${base}/pages/gallery.html">Gallery</a>
  <a href="${base}/pages/pricing.html">Pricing</a>
  <span class="mobile-sub-label">Seasonal & Products</span>
  <div class="mobile-sub">
    <a href="${base}/pages/grad-keepsakes.html">Grad Keepsakes</a>
    <a href="${base}/pages/sport-keepsakes.html">Sport Keepsakes</a>
    <a href="${base}/pages/new-products.html">Banners</a>
    <a href="${base}/pages/boo-greetings.html">Boo Greetings</a>
    <a href="${base}/pages/elf-hunt.html">Elf Hunt</a>
    <a href="${base}/pages/christmas.html">All Things Christmas</a>
    <a href="${base}/pages/egg-hunt.html">Egg Hunt</a>
    <a href="${base}/pages/fundraisers.html">Fundraisers</a>
  </div>
  <a href="${base}/pages/terms.html">Terms & Conditions</a>
  <div class="mobile-cta">
    <a href="${base}/pages/book-now.html" class="btn btn-primary" style="width:100%;justify-content:center;">Book Your Yard Sign</a>
  </div>
</div>`;

  /* ---- Footer HTML ---- */
  const footerHTML = `
<footer class="site-footer" itemscope itemtype="https://schema.org/LocalBusiness">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="${base}/index.html" class="logo-link" style="text-decoration:none;">
          ${logoSVG}
          <span class="logo-text">
            <span class="logo-name">Yard Signs by AJC</span>
            <span class="logo-tagline">Polk County, Oregon</span>
          </span>
        </a>
        <p class="footer-desc">Family-owned yard sign rental business proudly serving Polk County and surrounding cities since 2020. Every celebration deserves a yard sign!</p>
        <div class="footer-social">
          <a href="https://www.facebook.com/100749864985452" class="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.instagram.com/yard_signs_by_ajc" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          </a>
          <a href="https://g.page/yard-love-by-ajc/review?gm" class="social-link" aria-label="Leave a Google Review" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9V8h2v9zm4 0h-2V8h2v9z" opacity=".3"/><path d="M12 20c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zM9 8h2v9H9zm4 0h2v9h-2z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Services</h4>
        <ul class="footer-links" role="list">
          <li><a href="${base}/pages/book-now.html">Book a Yard Sign</a></li>
          <li><a href="${base}/pages/grad-keepsakes.html">Graduation Keepsakes</a></li>
          <li><a href="${base}/pages/sport-keepsakes.html">Sport Keepsakes</a></li>
          <li><a href="${base}/pages/new-products.html">Custom Banners</a></li>
          <li><a href="${base}/pages/boo-greetings.html">Boo Greetings</a></li>
          <li><a href="${base}/pages/elf-hunt.html">Elf Hunt</a></li>
          <li><a href="${base}/pages/christmas.html">Christmas Keepsakes</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Information</h4>
        <ul class="footer-links" role="list">
          <li><a href="${base}/pages/gallery.html">Photo Gallery</a></li>
          <li><a href="${base}/pages/pricing.html">Pricing</a></li>
          <li><a href="${base}/pages/fundraisers.html">Fundraisers</a></li>
          <li><a href="${base}/pages/terms.html">Terms & Conditions</a></li>
          <li><a href="https://g.page/yard-love-by-ajc/review?gm" target="_blank" rel="noopener noreferrer">Leave a Review</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contact</h4>
        <div class="footer-contact-item" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span itemprop="addressLocality">Polk County</span>, <span itemprop="addressRegion">OR</span>&nbsp;97338
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <a href="tel:+15039171034" itemprop="telephone">503-917-1034</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <a href="mailto:yardsignsbyajc@gmail.com" itemprop="email">yardsignsbyajc@gmail.com</a>
        </div>
        <div class="footer-contact-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
          <span>Payment: CashApp $yardsignsbyajc · Venmo</span>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; <span id="footer-year"></span> Yard Signs by AJC · Polk County, Oregon · All rights reserved</p>
      <a href="${base}/pages/terms.html">Terms & Conditions</a>
    </div>
  </div>
</footer>`;

  /* ---- Inject ---- */
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  /* ---- Year ---- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Theme toggle logic ---- */
  const toggleBtn = document.querySelector('[data-theme-toggle]');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'dark' ? sunIcon() : moonIcon();
    toggleBtn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    toggleBtn.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggleBtn.innerHTML = theme === 'dark' ? sunIcon() : moonIcon();
      toggleBtn.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    });
  }

  /* ---- Mobile nav ---- */
  const toggle = document.getElementById('nav-toggle');
  const closeBtn = document.getElementById('nav-close');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => { mobileNav.classList.add('open'); toggle.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; });
    closeBtn && closeBtn.addEventListener('click', () => { mobileNav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; });
  }

  /* ---- Sticky header shadow ---- */
  const header = document.getElementById('site-header');
  if (header) {
    const obs = new IntersectionObserver(([e]) => header.classList.toggle('scrolled', !e.isIntersecting), { threshold: 1, rootMargin: '-1px 0px 0px 0px' });
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:68px;height:1px;width:100%;';
    document.body.prepend(sentinel);
    obs.observe(sentinel);
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => revObs.observe(el));
  }

  /* ---- Active nav link ---- */
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-links a, .dropdown-menu a').forEach(a => {
    if (a.href && a.href.includes(currentPath) && currentPath !== '/' && currentPath !== '/index.html') {
      a.classList.add('active');
    }
  });

  /* ---- Form submission (demo) ---- */
  document.querySelectorAll('form[data-demo]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.nextElementSibling;
      if (success && success.classList.contains('form-success')) {
        success.style.display = 'block';
        form.style.display = 'none';
      }
    });
  });
})();
