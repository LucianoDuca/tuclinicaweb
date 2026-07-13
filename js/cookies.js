/**
 * Cookie consent banner
 */

const STORAGE_KEY = 'clinicaweb-cookies-aceptadas';
const BANNER_DELAY = 600; // milliseconds

export function setupCookieBanner() {
  const banner = document.getElementById('cookieBanner');
  if (!banner) return;

  // Check if user already made a decision
  const decision = localStorage.getItem(STORAGE_KEY);
  if (!decision) {
    // Show banner after delay
    setTimeout(() => {
      banner.classList.add('open');
    }, BANNER_DELAY);
  }

  // Setup button listeners
  document.querySelectorAll('[data-cookie-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.cookieAction;
      localStorage.setItem(STORAGE_KEY, action === 'accept' ? 'true' : 'false');
      banner.classList.remove('open');
    });
  });
}
