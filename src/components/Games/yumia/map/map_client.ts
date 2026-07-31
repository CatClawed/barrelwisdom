import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

let currentMap: L.Map | null = null;

export function initMap(el: HTMLDivElement) {
  if ((el as any)._a26Initialized) return;
  (el as any)._a26Initialized = true;

  const mapId = el.id;
  const tracker = el.dataset.tracker === 'true';
  const bounds = JSON.parse(el.dataset.bounds!);
  const width = Number(el.dataset.width);
  const height = Number(el.dataset.height);
  const data = JSON.parse(el.dataset.points!);

  const countEl = document.getElementById(`${mapId}-count`);
  let count = 0;

  const ig = L.divIcon({ html: `<div></div>`, className: 'circle white-div' });
  const ic = L.divIcon({ html: `<svg class="map-icon"><use href="/media/spritesheets/A26.svg?v=1#chest"></use></svg>`, className: 'white-icon' });
  const iff = L.divIcon({ html: `<svg class="map-icon white-icon"><use href="/media/spritesheets/A26.svg?v=1#fish"></use></svg>`, className: 'dummy' });
  const ib = L.divIcon({ html: `<svg class="map-icon"><use href="/media/spritesheets/A26.svg?v=1#building"></use></svg>`, className: 'dummy' });
  const ics = L.divIcon({ html: `<svg class="map-icon"><use href="/media/spritesheets/A26.svg?v=1#campsite"></use></svg>`, className: 'dummy' });
  const is = L.divIcon({ html: `<svg class="map-icon"><use href="/media/spritesheets/A26.svg?v=1#shop"></use></svg>`, className: 'dummy' });
  const inpc = L.divIcon({ html: `<svg class="map-icon white-icon"><use href="/media/spritesheets/A26.svg?v=1#npc"></use></svg>`, className: 'dummy' });
  const ia = L.divIcon({ html: `<svg class="map-icon"><use href="/media/spritesheets/A26.svg?v=1#animal"></use></svg>`, className: 'dummy' });

  function toggleColor(e: L.LeafletMouseEvent) {
    const icon = (e.target as any)._icon as HTMLElement;
    if (icon.className.indexOf(' yellow-') > -1) {
      icon.className = icon.className.replace(' yellow-', ' white-');
      count -= 1;
    } else {
      icon.className = icon.className.replace(' white-', ' yellow-');
      count += 1;
    }
    if (countEl) countEl.textContent = String(count);
  }

  function marker(d: any) {
    const loc: [number, number] = [-height * d.z, width * d.x];
    if (tracker) {
      const m = new L.Marker(loc, { icon: d.label ? ic : ig });
      m.on('click', toggleColor);
      return m;
    }
    switch (d.label) {
      case 4: case 5: case 6: return new L.Marker(loc, { icon: ic });
      case 8: return new L.Marker(loc, { icon: ib });
      case 9: return new L.Marker(loc, { icon: iff });
      case 10: return new L.Marker(loc, { icon: ics });
      case 13: return new L.Marker(loc, { icon: is });
      case 16: return new L.Marker(loc, { icon: ia });
      case 17: return new L.Marker(loc, { icon: inpc });
      default: return new L.Marker(loc, { icon: ig });
    }
  }

  const map = L.map(mapId, {
    center: [-height / 2, width / 2],
    zoom: 3,
    crs: L.CRS.Simple,
    infinite: false,
    attributionControl: false,
  });
  currentMap = map;

  const tiles = L.tileLayer(`/media/games/yumia/maps/{z}/{x}/{y}.png`, {
    tms: true,
    tileSize: 256,
    maxZoom: 6,
    minZoom: 3,
    bounds,
  });

  map.setMaxBounds(bounds);
  tiles.addTo(map);

  if (data[0]) {
    map.setView([-height * data[0].z, width * data[0].x]);
  }
  data.forEach((d: any) => marker(d).addTo(map));
}

export function destroyMap() {
  if (currentMap) {
    currentMap.remove();
    currentMap = null;
  }
}

document.querySelectorAll<HTMLDivElement>('.a26-map[data-points]').forEach(initMap);
(window as any).initMap = initMap;
(window as any).destroyMap = destroyMap;
