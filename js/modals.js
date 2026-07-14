/**
 * Modal management
 */

export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

export function setupModalEventListeners() {
  // Modal triggers (buttons with data-modal attribute)
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modal + 'Modal';
      const modal = document.getElementById(modalId);
      // Record which CTA position opened the modal so the WhatsApp deep link
      // can carry it as utm_campaign (measures which position converts).
      if (modal) modal.dataset.source = btn.dataset.analytics || 'sin-posicion';
      openModal(modalId);
    });
  });

  // Modal backdrop close
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        const modal = backdrop.closest('.modal');
        if (modal) {
          closeModal(modal.id);
        }
      }
    });
  });

  // Escape key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal.open').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });

  // Close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) {
        closeModal(modal.id);
      }
    });
  });
}
