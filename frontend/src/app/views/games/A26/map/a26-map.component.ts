import { AfterViewInit, Component, Input, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { Coord } from '@app/views/games/A26/_services/a26.interface';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import * as L from 'leaflet';

@Component({
    selector: 'a26-map',
    styles: `
    .a26-map {
        height: max(50vh, 600px);
        width: 100%;
        margin-top: 1em;
        border-radius: 10px;
    }

    .map-icon {
        height: 2rem;
        width: 2rem;
        margin-top: 6px;
        margin-left: 6px;
        transform: translate(-50%, -50%)
    }
    .white-icon {
        fill: white;
    }
    `,
    template: `
        <div id="leafletmap" class="a26-map"></div>
    `,
    standalone: true,
    encapsulation: ViewEncapsulation.None
})
export class A26MapComponent implements AfterViewInit {
    private map;
    width: number = 136; // 8704 / 128 * 2
    height: number = 56; // -3584/8704 * 136
    bounds = [[-this.height, 0], [0, this.width]]

    @Input()
    data: Coord[];

    constructor(protected a26service: A26Service) {
    }

    ic = L.divIcon({
        html: `<svg class="map-icon white-icon"><use href="${this.a26service.imgURL}spritesheet.svg?v=2#chest"></use></svg>`,
        className: 'dummy'
    })

    if = L.divIcon({
        html: `<svg class="map-icon white-icon"><use href="${this.a26service.imgURL}spritesheet.svg?v=2#fish"></use></svg>`,
        className: 'dummy'
    })

    ib = L.divIcon({
        html: `<svg class="map-icon"><use href="${this.a26service.imgURL}spritesheet.svg?v=2#building"></use></svg>`,
        className: 'dummy'
    })
    ics = L.divIcon({
        html: `<svg class="map-icon"><use href="${this.a26service.imgURL}spritesheet.svg?v=2#campsite"></use></svg>`,
        className: 'dummy'
    })
    is = L.divIcon({
        html: `<svg class="map-icon"><use href="${this.a26service.imgURL}spritesheet.svg?v=2#shop"></use></svg>`,
        className: 'dummy'
    })

    marker(d) {
        const loc = [-this.height * d.z, this.width * d.x]
        switch (d.label) {
            case 4:  return new L.Marker(loc, { icon: this.ic });
            case 5:  return new L.Marker(loc, { icon: this.ic });
            case 6:  return new L.Marker(loc, { icon: this.ic });
            case 8:  return new L.Marker(loc, { icon: this.ib });
            case 9:  return new L.Marker(loc, { icon: this.if });
            case 10: return new L.Marker(loc, { icon: this.ics });
            case 13: return new L.Marker(loc, { icon: this.is });
        }
        return new L.CircleMarker(loc, { radius: 7, color: 'black', fillColor: 'white', fillOpacity: 1 })
    }

    ngAfterViewInit(): void {
        AppComponent.isBrowser
            .subscribe(isBrowser => {
                if (isBrowser) {
                    setTimeout(() => {
                        this.map = L.map('leafletmap', {
                            center: [-this.height / 2, this.width / 2],
                            zoom: 3,
                            crs: L.CRS.Simple,
                            infinite: false,
                            attributionControl: false,
                        })

                        const tiles = L.tileLayer(this.a26service.imgURL + 'maps/{z}/{x}/{y}.png', {
                            tms: true,
                            tileSize: 256,
                            maxZoom: 6,
                            minZoom: 3,
                            bounds: this.bounds,
                            infinite: false,

                        });

                        this.map.setMaxBounds(this.bounds)
                        tiles.addTo(this.map);

                        this.map.setView([-this.height * this.data[0].z, this.width * this.data[0].x])

                        for (let d of this.data) {
                            this.marker(d).addTo(this.map)
                        }
                    })
                }
            });

    }
}