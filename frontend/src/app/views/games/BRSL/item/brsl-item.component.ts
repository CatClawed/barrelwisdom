import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '@app/services/seo.service';
import { ItemFull } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'brsl-item.component.html',
  selector: 'brsl-item',
})
export class BRSLItemComponent extends SingleComponent implements OnInit {
  item: ItemFull;
  expand = false;

  constructor(
    protected route: ActivatedRoute,
    private brslservice: BRSLService,
    protected seoService: SeoService) {
    super(route, seoService);
    this.gameService(this.brslservice, 'items');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.brslservice.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slug}.webp`;
          this.genericSEO(this.item.name, this.item.desc);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 