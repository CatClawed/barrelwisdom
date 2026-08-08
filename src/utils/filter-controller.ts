import { localeIncludes } from '@app/utils/collator';
import { onCompositionSafeInput } from './composition-safe-input';


interface ColorFilter {
  type: 'color';
  keyL: string;
  keyR: string;
}

interface SelectFilter {
  type: 'select';
  key: string;
  elementId: string;
  noneValue?: string;  // sentinel meaning "no filter applied", default '-1'
}
interface ButtonGroupFilter {
  type: 'buttons';
  key: string;
  groupName: string;   // matches data-filter-group on FilterButton
  mode?: 'all' | 'any'; // AND vs OR across active selections, default 'all'
}
type FilterConfig = SelectFilter | ButtonGroupFilter | ColorFilter;

interface ListFilterOptions {
  lang: string;
  listSelector?: string;
  searchInputId?: string;
  searchAttr?: string;   // card's data-{searchAttr}; falls back to h4 text if absent
  filters?: FilterConfig[];
}

export function initListFilters(opts: ListFilterOptions) {
  const {
    listSelector = '#item-list .list-container',
    searchInputId = 'filter',
    searchAttr = 'search',
    filters = [],
  } = opts;

  const lang = document.getElementById('item-list')!.dataset.lang;
  const searchInput = document.getElementById(searchInputId) as HTMLInputElement | null;
  const selectEls = new Map<string, HTMLSelectElement>();
  const activeState = new Map<string, string[]>();
  let activeColorL = '--';
  let activeColorR = '--';

  filters.forEach((f) => {
    if (f.type === 'select') {
      const el = document.getElementById(f.elementId) as HTMLSelectElement | null;
      if (el) {
        selectEls.set(f.key, el);
        el.addEventListener('change', applyFilters);
      }
    } else if (f.type === 'buttons') {
      activeState.set(f.key, []);
      document
        .querySelector<HTMLElement>(`[data-filter-group="${f.groupName}"]`)
        ?.addEventListener('filterchange', (e: any) => {
          activeState.set(f.key, e.detail.active);
          applyFilters();
        });
    } else if (f.type === 'color') {
      // Listen for the custom event from ColorPicker
      document.addEventListener('colorchange', (e: any) => {
        const { side, value } = e.detail;
        if (side === 'l') activeColorL = value;
        if (side === 'r') activeColorR = value;
        applyFilters();
      });
    }
  });

  function applyFilters() {
    const term = searchInput?.value ?? '';

    document.querySelectorAll<HTMLElement>(listSelector).forEach((card) => {
      const text = card.dataset[searchAttr] ?? card.querySelector('h4')?.textContent ?? '';
      let matches = localeIncludes(text, term, lang);

      for (const f of filters) {
        if (!matches) break;
        const cardValues = card.dataset[f.key]?.split(',').filter(Boolean) ?? [];

        if (f.type === 'select') {
          const val = selectEls.get(f.key)?.value;
          const none = f.noneValue ?? '-1';
          if (val && val !== none && !cardValues.includes(val)) matches = false;
        }
        else if (f.type === 'buttons') {
          const totalKeys = document.querySelectorAll(
              `[data-filter-group="${f.groupName}"] .icon-button`
            ).length;
          const active = activeState.get(f.key) ?? [];
          const mode = f.mode ?? 'all';
          const ok = active.length === 0 ||
            (mode === 'all'
              ? (
              cardValues.length !== totalKeys
                ? active.every((v) => cardValues.includes(v))
                : false
              )
              : active.some((v) => cardValues.includes(v)));
          if (!ok) matches = false;
        }
        else if (f.type === 'color') {
          const cardL = card.dataset[f.keyL]?.split(',').filter(Boolean) ?? [];
          const cardR = card.dataset[f.keyR]?.split(',').filter(Boolean) ?? [];
          const noFilter = activeColorL === '--' && activeColorR === '--';
          const ok = noFilter || cardL.some((l, i) => {
            const r = cardR[i];
            const matchL = activeColorL === '--' || l === activeColorL;
            const matchR = activeColorR === '--' || r === activeColorR;
            return matchL && matchR;
          });
          if (!ok) matches = false;
        }
      }

      card.style.display = matches ? '' : 'none';
    });
  }

  onCompositionSafeInput(searchInput as HTMLInputElement, applyFilters);

  // we're hijacking quick search
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      if (e.key === '/') {
        e.preventDefault();
        document.getElementById('filter')?.focus();
      }
    }
  });

  applyFilters();
  return applyFilters;
}
