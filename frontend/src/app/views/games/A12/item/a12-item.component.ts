import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/A12/_services/a12.interface';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a12-item.component.html',
  selector: 'a12-item',
})
export class A12ItemComponent extends SingleComponent implements OnInit {
  item: ItemFull;
  itemone: boolean = false;
  itemtwo: boolean = false;
  itemthree: boolean = false;

  constructor(
    protected route: ActivatedRoute,
    private a12service: A12Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a12service, 'items');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a12service.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          if (this.item.effectline_set) {
            for (let effline of this.item.effectline_set) {
              if (effline.itemnum == 1) { this.itemone = true; }
              if (effline.itemnum == 2) { this.itemtwo = true; }
              if (effline.itemnum == 3) { this.itemthree = true; }
            }
          }
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slugname}.webp`
          this.genericSEO(this.item.name, this.item.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 