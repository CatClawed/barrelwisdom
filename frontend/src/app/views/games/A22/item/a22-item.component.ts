import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-item.component.html',
  selector: 'a22-item',
})
export class A22ItemComponent extends SingleComponent implements OnInit {
  item: ItemFull;
  default: any[] = [];
  eff1: any[] = [];
  eff2: any[] = [];
  eff3: any[] = [];
  eff4: any[] = [];

  constructor(
    protected route: ActivatedRoute,
    private a22service: A22Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a22service, 'items');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a22service.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slug}.webp`;
          this.genericSEO(this.item.name, this.item.desc);

          if (this.item.effectline_set) {
            if (this.item.effectline_set.length > 1) {
              let line = 0;
              for (let e of this.item.effectline_set) {
                if (e.number == 0) {
                  this.default.push([e.name, e.slug]);
                  line = line + 1;
                }
                if (line < e.line) {
                  line = line + 1;
                  this.default.push([]);
                }
                if (e.number > 0) {
                  if (e.line == 1) { this.eff1.push([e.name, e.slug]); }
                  if (e.line == 2) { this.eff2.push([e.name, e.slug]); }
                  if (e.line == 3) { this.eff3.push([e.name, e.slug]); }
                  if (e.line == 4) { this.eff4.push([e.name, e.slug]); }
                }
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