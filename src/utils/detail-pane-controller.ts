import { initSearchableSelects } from '@components/Games/_common/dropdown_client';
import { initPopovers } from '@components/Games/_common/popover_client';

interface PaneControllerOptions {
  game: string;
  section: string;
  withMap?: boolean;
}

export async function initPaneController({ withMap = false }: PaneControllerOptions) {
  const list = document.getElementById('item-list')!;
  const lang = list.dataset.lang!;
  const game = list.dataset.game!;
  const section = list.dataset.section!;
  const pane = document.getElementById('detail-pane')!;

  let destroyMap: (() => void) | undefined;
  let initMap: ((el: Element | null) => void) | undefined;

  if (withMap) {
    ({ destroyMap, initMap } = await import(`@components/Games/${game}/map/map_client.ts`));
  }

  list.addEventListener('click', async (e) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>('.list-container');
    if (!card) return;
    if (e.button === 0 && !e.ctrlKey && !e.metaKey) {
      e.preventDefault();

      if (window.innerWidth <= 760) {
        pane.classList.add('is-open');
        if (!pane.querySelector('.close-btn')) {
          pane.insertAdjacentHTML('afterbegin',
            `<button class="close-btn"><svg><use href="/spritesheets/main.svg?v=1#fa-arrow-left" /></svg></button>`
          );
          pane.querySelector('.close-btn')!.addEventListener('click', () => pane.classList.remove('is-open'));
        }
      }

      pane.classList.add('hide-placeholder');
      destroyMap?.();

      const id = card.getAttribute('data-id');
      pane.querySelector('.content-area')?.remove();

      const response = await fetch(`/${game}/${section}/${id}/fragment/${lang}`);
      const html = await response.text();
      pane.insertAdjacentHTML('beforeend', `<div class="content-area">${html}</div>`);

      initMap?.(pane.querySelector('.a26-map[data-points]'));
      initSearchableSelects(pane);
      initPopovers(pane);
    }
  });
}
