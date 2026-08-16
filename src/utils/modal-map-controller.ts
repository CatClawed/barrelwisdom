// is this file a gift to myself later? the world may never know.

interface ModalMapControllerOptions {
  id: string;
  game: string;
  section: string;
  triggerSelector?: string;
}

export async function initModalMapController({
  game,
  section,
  triggerSelector = '.show-map-btn',
}: ModalMapControllerOptions) {
  const list = document.getElementById('item-list')!;
  const lang = list.dataset.lang!;
  const modal = document.getElementById('map-modal') as HTMLDialogElement;
  const modalContent = document.getElementById('modal-content')!;
  const { initMap, destroyMap } = await import(`@components/Games/${game}/map/map_client.ts`);
  const parser = new DOMParser();

  list.addEventListener('click', async (e) => {
    const trigger = (e.target as HTMLElement).closest(triggerSelector);
    if (!trigger) return;

    destroyMap();
    const id = trigger.getAttribute('data-id');
    modalContent.innerHTML = '<p>Loading Map...</p>';
    modal.showModal();

    const response = await fetch(`/${game}/${section}/${id}/${lang}`);
    const doc = parser.parseFromString(await response.text(), 'text/html');
    const mapEl = doc.querySelector('.a26-map[data-points]');

    modalContent.innerHTML = mapEl?.outerHTML ?? '<p>Map unavailable.</p>';
    initMap(modalContent.querySelector('.a26-map[data-points]'));
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      destroyMap();
      modal.close();
    }
  });
}
