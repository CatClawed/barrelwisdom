const RESET_VALUE = '-1';

function enhance(root: HTMLElement) {
  if (root.dataset.enhanced === 'true') return;
  root.dataset.enhanced = 'true';
  root.classList.add('is-enhanced');

  const select = root.querySelector<HTMLSelectElement>('.ss-native')!;
  const options = Array.from(select.options).filter((o) => o.value !== '');

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'ss-trigger';
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  root.appendChild(trigger);

  const fieldName = root.dataset.name ?? '';

    function renderTrigger() {
      const opt = select.options[select.selectedIndex];
      const icon = opt?.dataset.icon;
      const isPlaceholder = !opt || opt.value === '';
      const labelText = isPlaceholder
        ? (select.querySelector('option[value=""]')?.textContent ?? '')
        : opt.value === RESET_VALUE
          ? fieldName   // show placeholder value when reset option is selected
          : opt.textContent;

      trigger.innerHTML = `
        ${icon ? `<svg><use href="${icon}"></use></svg>` : ''}
        <span class="ss-label">${labelText}</span>
        <svg class="ss-caret" viewBox="0 0 12 8" width="10" height="8"><path d="M1 1l5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>
      `;
    }
  renderTrigger();

  let listbox: HTMLUListElement | null = null;
  let searchInput: HTMLInputElement | null = null;
  let activeIndex = -1;

  function open() {
    if (listbox) return;
    root.dataset.open = 'true';
    trigger.setAttribute('aria-expanded', 'true');

    searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'ss-search';
    searchInput.placeholder = fieldName;
    searchInput.setAttribute('role', 'combobox');
    searchInput.setAttribute('aria-expanded', 'true');

    listbox = document.createElement('ul');
    listbox.className = 'ss-listbox';
    listbox.setAttribute('role', 'listbox');

    trigger.replaceWith(searchInput);
    root.appendChild(listbox);
    searchInput.focus();

    renderOptions('');

    searchInput.addEventListener('input', () => renderOptions(searchInput!.value));
    searchInput.addEventListener('keydown', onKeydown);
    searchInput.addEventListener('blur', () => {
      setTimeout(() => {
        if (!root.contains(document.activeElement)) finishClose();
      }, 100);
    });
  }

  function finishClose() {
    listbox?.remove();
    searchInput?.replaceWith(trigger);
    listbox = null;
    searchInput = null;
    activeIndex = -1;
    root.dataset.open = 'false';
    trigger.setAttribute('aria-expanded', 'false');
    renderTrigger();
  }

  function renderOptions(term: string) {
    const t = term.toLowerCase();
    const matches = options.filter((o) => o.value === '-1' || o.textContent!.toLowerCase().includes(t));
      activeIndex = -1;

    listbox!.innerHTML = matches.length
       ? matches
           .map((o, i) => `
             <li class="ss-option${i === activeIndex ? ' is-active' : ''}" role="option" aria-selected="${o.value === select.value}" data-value="${o.value}">
               ${o.dataset.icon ? `<svg><use href="${o.dataset.icon}"></use></svg>` : ''}
               <span>${o.textContent}</span>
             </li>`
           )
           .join('')
       : `<li class="ss-empty">No matches</li>`;

     listbox!.querySelectorAll<HTMLLIElement>('.ss-option').forEach((li) => {
       li.addEventListener('mousedown', (e) => {
         e.preventDefault();
         select.value = li.dataset.value!;
         select.dispatchEvent(new Event('change', { bubbles: true }));
         finishClose();
       });
     });
  }

  function onKeydown(e: KeyboardEvent) {
    const items = listbox?.querySelectorAll<HTMLLIElement>('.ss-option') ?? [];
    if (items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = (activeIndex === -1) ? 0 : (activeIndex + 1) % items.length;
        updateActive(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = (activeIndex === -1) ? items.length - 1 : (activeIndex - 1 + items.length) % items.length;
        updateActive(items);
      }  else if (e.key === 'Enter') {
      e.preventDefault();
      items[activeIndex]?.dispatchEvent(new Event('mousedown'));
    } else if (e.key === 'Escape') {
      finishClose();
    }
  }

  function updateActive(items: NodeListOf<HTMLLIElement>) {
    items.forEach((li, i) => li.classList.toggle('is-active', i === activeIndex));
    items[activeIndex]?.scrollIntoView({ block: 'nearest' });
  }

  trigger.addEventListener('click', open);
}

export function initSearchableSelects(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('.searchable-select').forEach(enhance);
}

initSearchableSelects();
(window as any).initSearchableSelects = initSearchableSelects;
