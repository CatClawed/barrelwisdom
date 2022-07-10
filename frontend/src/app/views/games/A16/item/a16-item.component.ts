import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/A16/_services/a16.interface';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a16-item.component.html',
  selector: 'a16-item',
})
export class A16ItemComponent extends SingleComponent implements OnInit {
  item: ItemFull;

  constructor(
    protected route: ActivatedRoute,
    private a16service: A16Service,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.a16service, 'items');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a16service.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slugname}.webp`
          this.genericSEO(this.item.name, this.item.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 