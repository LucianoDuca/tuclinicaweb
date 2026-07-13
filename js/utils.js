/**
 * Utility functions
 */

export function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

export function encodeWhatsAppMessage(name, city) {
  return encodeURIComponent(
    `Hola, soy de la clínica "${name || '—'}" en ${city || '—'}. Me gustaría ver una demo de mi web.`
  );
}

export function openWhatsAppChat(phone, message) {
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, '_blank');
}

export function logError(message, error) {
  console.error(`[ClinicaWeb] ${message}:`, error);
}

export function logInfo(message) {
  console.log(`[ClinicaWeb] ${message}`);
}
