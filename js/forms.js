/**
 * Form handling
 */

import { encodeWhatsAppMessage, openWhatsAppChat } from './utils.js';
import { closeModal } from './modals.js';

const WHATSAPP_PHONE = '5492617776907';

export function setupPresupuestoForm() {
  const form = document.getElementById('presupuestoForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('clinicName');
    const cityInput = document.getElementById('clinicCity');

    if (!nameInput || !cityInput) return;

    const name = nameInput.value;
    const city = cityInput.value;
    const message = encodeWhatsAppMessage(name, city);

    openWhatsAppChat(WHATSAPP_PHONE, message);

    // Clear form and close modal
    form.reset();
    closeModal('presupuestoModal');
  });
}
