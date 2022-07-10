import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemFull } from '@app/views/games/A15/_services/a15.interface';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a15-item.component.html',
  selector: 'a15-item',
})
export class A15ItemComponent extends SingleComponent implements OnInit {
  item: ItemFull;
  fire = false;
  water = false;
  wind = false;
  earth = false;

  constructor(
    protected route: ActivatedRoute,
    private a15service: A15Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a15service, 'items');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a15service.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slugname}.webp`
          this.genericSEO(this.item.name, this.item.desc);

          if (this.item.effectline_set) {
            for (let eff of this.item.effectline_set) {
              switch (eff.elem) {
                case "fire":
                  this.fire = true;
                  break;
                case "water":
                  this.water = true;
                  break;
                case "wind":
                  this.wind = true;
                  break;
                case "earth":
                  this.earth = true;
                  break;
              }
            }
          }
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 