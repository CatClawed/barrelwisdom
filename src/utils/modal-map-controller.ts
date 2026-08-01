// is this file a gift to myself later? the world may never know.

interface ModalMapControllerOptions {
  game: string;
  section: string;
  triggerSelector?: string;
}

export async function initModalMapController({
  triggerSelector = '.show-map-btn',
}: ModalMapControllerOptions) {
  const list = document.getElementById('item-list')!;
  const lang = list.dataset.lang!;
  const game = list.dataset.game!;
  const section = list.dataset.section!;
  const modal = document.getElementById('map-modal') as HTMLDialogElement;
  const modalContent = document.getElementById('modal-content')!;

  const { initMap, destroyMap } = await import(`@components/Games/${game}/map/map_client.ts`);

  list.addEventListener('click', async (e) => {
    const trigger = (e.target as HTMLElement).closest(triggerSelector);
    if (!trigger) return;

    destroyMap();
    const id = trigger.getAttribute('data-id');
    modalContent.innerHTML = '<p>Loading Map...</p>';
    modal.showModal();

    const response = await fetch(`/${game}/${section}/${id}/fragment/${lang}`);
    const html = await response.text();
    modalContent.innerHTML = html;
    initMap(modalContent.querySelector('.a26-map[data-points]'));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      destroyMap();
      modal.close();
    }
  });
}
