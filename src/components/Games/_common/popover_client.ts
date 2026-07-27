function enhance(root: HTMLElement) {
  if (root.dataset.enhanced === 'true') return;
  root.dataset.enhanced = 'true';

  const trigger = root.querySelector<HTMLAnchorElement>('.popover-trigger')!;
  const panel = root.querySelector<HTMLDivElement>('.popover-panel')!;

  function open() {
    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    document.addEventListener('click', onOutsideClick, { capture: true });
    document.addEventListener('keydown', onKeydown);
  }

  function close() {
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    document.removeEventListener('click', onOutsideClick, { capture: true });
    document.removeEventListener('keydown', onKeydown);
  }

  function onOutsideClick(e: MouseEvent) {
    if (!root.contains(e.target as Node)) close();
  }

  function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    panel.hidden ? open() : close();
  });
}

export function initPopovers(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('.popover-wrapper').forEach(enhance);
}

initPopovers();
(window as any).initPopovers = initPopovers;
