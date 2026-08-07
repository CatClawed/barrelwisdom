function enhance(root: HTMLElement) {
  if (root.dataset.enhanced === 'true') return;
  root.dataset.enhanced = 'true';

  const trigger = root.querySelector<HTMLAnchorElement>('.popover-trigger')!;
  const panel = root.querySelector<HTMLDivElement>('.popover-panel')!;

  function open() {
    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');

    const triggerRect = trigger.getBoundingClientRect();
    const panelWidth = panel.offsetWidth || parseInt(getComputedStyle(panel).maxWidth);
    const panelHeight = panel.offsetHeight;

    // Default: open below-left of trigger
    let top = triggerRect.bottom + 8;
    let left = triggerRect.left;

    // Flip right → left if not enough space on the right
    const spaceRight = window.innerWidth - triggerRect.left;
    if (spaceRight < panelWidth + 10) {
      left = triggerRect.right - panelWidth;
    }

    // Flip above if not enough space below
    const spaceBelow = window.innerHeight - triggerRect.bottom;
    if (spaceBelow < panelHeight + 8) {
      top = triggerRect.top - panelHeight - 8;
    }

    // Clamp to viewport edges so it never goes off-screen
    left = Math.max(8, Math.min(left, window.innerWidth - panelWidth - 8));
    top  = Math.max(8, Math.min(top,  window.innerHeight - panelHeight - 8));

    panel.style.top  = `${top}px`;
    panel.style.left = `${left}px`;
    panel.classList.remove('popover-panel--left'); // no longer needed for logic, fine to keep as visual hint

    document.addEventListener('click', onOutsideClick, { capture: true });
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('scroll', close, { once: true, capture: true });
  }

  function close() {
    panel.hidden = true;
    panel.style.top  = '';
    panel.style.left = '';
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
