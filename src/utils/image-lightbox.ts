const dialog = document.querySelector<HTMLDialogElement>('#image-lightbox');
const img = document.querySelector<HTMLImageElement>('#image-lightbox-img');
const closeButton = document.querySelector<HTMLButtonElement>('#image-lightbox-close');

document.querySelectorAll<HTMLImageElement>('.prose img').forEach((el) => {
  el.style.cursor = 'zoom-in';
  el.addEventListener('click', () => {
    if (!img || !dialog) return;
    img.src = el.src;
    img.alt = el.alt;
    dialog.showModal();
  });
});

closeButton?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', (e) => {
  if (e.target === dialog) dialog?.close();
});
