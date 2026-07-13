/**
 * Main entry point - Initializes all modules
 */

import { updateYear } from './utils.js';
import { setupModalEventListeners } from './modals.js';
import { setupPresupuestoForm } from './forms.js';
import { setupCookieBanner } from './cookies.js';
import { setupReveal, setupActiveNavTracking } from './scroll.js';

/**
 * Initialize application when DOM is ready
 */
function initialize() {
  updateYear();
  setupModalEventListeners();
  setupPresupuestoForm();
  setupCookieBanner();
  setupReveal();
  setupActiveNavTracking();
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
