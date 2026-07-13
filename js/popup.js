/**
 * Attention popup ("demo gratis")
 * Mirrors the cookie banner pattern: delayed appearance + localStorage memory.
 */

const STORAGE_KEY = 'clinicaweb-promo-cerrado';
const POPUP_DELAY = 6000; // milliseconds

export function setupPromoPopup() {
  const popup = document.getElementById('promoPopup');
  if (!popup) return;

  // Don't show again if the user already dismissed/acted on it
  if (localStorage.getItem(STORAGE_KEY)) return;

  // Show after a delay to grab attention once the visitor is engaged
  const timer = setTimeout(() => {
    popup.classList.add('open');
  }, POPUP_DELAY);

  // Any button with data-promo-action closes the popup and remembers it
  document.querySelectorAll('[data-promo-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      clearTimeout(timer);
      localStorage.setItem(STORAGE_KEY, 'true');
      popup.classList.remove('open');
    });
  });
}
