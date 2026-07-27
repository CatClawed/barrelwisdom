function enhance(root: HTMLElement) {
  if (root.dataset.enhanced === 'true') return;
  root.dataset.enhanced = 'true';

  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('.icon-button'));

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isSingle = btn.dataset.single === 'true';
      const wasActive = btn.classList.contains('active');

      if (isSingle) {
        buttons.forEach((b) => b.classList.remove('active'));
        if (!wasActive) btn.classList.add('active');
      }
      else {
        btn.classList.toggle('active');
      }

      emitChange(root);
    });
  });
}

function emitChange(root: HTMLElement) {
  const active = Array.from(root.querySelectorAll<HTMLButtonElement>('.icon-button.active')).map(
    (b) => b.dataset.filterKey!
  );
  root.dispatchEvent(new CustomEvent('filterchange', { detail: { active }, bubbles: true }));
}

export function initFilterButtons(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('.filter-buttons-grid').forEach(enhance);
}

initFilterButtons();
(window as any).initFilterButtons = initFilterButtons;
