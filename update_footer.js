const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

const newFooter = `<footer class="site-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand-col">
          <a href="index.html" class="brand-logo footer-logo">
            <img src="assets/logo.png" alt="Power-Up Talent Logo" class="footer-logo-img" />
          </a>
          <p class="footer-tagline">
            The UK's #1 Headhunters and recruitment specialists for the electrical industry — spanning manufacturing, distribution, design, and installation.
          </p>
        </div>

        <div class="footer-links-col">
          <h4><span class="dash">—</span> SERVICES</h4>
          <ul>
            <li><a href="talent.html">Headhunting</a></li>
            <li><a href="coaching.html">Coaching</a></li>
            <li><a href="platform.html">Intelligence</a></li>
            <li><a href="about.html">About Us</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4><span class="dash">—</span> SPECIALISMS</h4>
          <ul>
            <li><a href="about.html">Construction</a></li>
            <li><a href="about.html">Engineering</a></li>
            <li><a href="about.html">Electrical</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4><span class="dash">—</span> COMPANY</h4>
          <ul>
            <li><a href="about.html">About Us</a></li>
            <li><a href="info.html">Information</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="contact.html">Register Your CV</a></li>
          </ul>
        </div>

        <div class="footer-links-col">
          <h4><span class="dash">—</span> GET IN TOUCH</h4>
          <ul class="footer-contact-list">
            <li>
              <a href="mailto:info@power-uptalent.co.uk" style="display: flex; align-items: center; gap: 0.5rem;">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="color: var(--accent-gold); flex-shrink: 0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@power-uptalent.co.uk
              </a>
            </li>
            <li style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.875rem; margin-top: 0.75rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="color: var(--accent-gold); flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              Response inside 24h
            </li>
            <li style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-muted); font-size: 0.875rem; margin-top: 0.75rem;">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16" style="color: var(--accent-gold); flex-shrink: 0;"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
              Nationwide UK Coverage
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom" style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; margin-top: 2.5rem; font-size: 0.85rem; color: var(--text-muted);">
        <div>&copy; 2026 Power-Up Talent. All rights reserved.</div>
        <div style="display: flex; gap: 1rem;">
          <a href="info.html" style="color: var(--text-muted); text-decoration: none;">Privacy Policy</a> | 
          <a href="info.html" style="color: var(--text-muted); text-decoration: none;">Terms & Conditions</a> | 
          <a href="info.html" style="color: var(--text-muted); text-decoration: none;">Cookies Policy</a>
        </div>
      </div>
    </div>
  </footer>`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<footer class="site-footer">[\s\S]*?<\/footer>/, newFooter);
  fs.writeFileSync(file, content);
});
console.log('Footer updated in all files.');
