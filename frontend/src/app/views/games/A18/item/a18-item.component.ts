import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoryService } from '@app/services/history.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-item.component.html',
  selector: 'a18-item',
})
export class A18ItemComponent extends SingleComponent implements OnInit {

  item: Item;
  colors = {
    "white":  [`regular fa-circle`, `black`],
    "yellow": [`solid fa-circle`, `#edc200`],
    "violet": [`solid fa-circle`, `#ac07bb`],
    "red":    [`solid fa-circle`, `#ae4641`],
    "blue":   [`solid fa-circle`, `#445e7b`],
    "green":  [`solid fa-circle`, `#42b600`],
  }

  constructor(
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a18service: A18Service,
    public historyService: HistoryService) {
    super(route, seoService);
    this.gameService(this.a18service, 'items');
  }
  ngOnInit(): void {
    if (this.showNav) this.colset = "col-md-9 mx-auto ";
    this.a18service.getItem(this.slug, this.language)
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          let name = (this.language === 'en') ? this.item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, "") : this.item.name;
          this.seoImage = `${this.imgURL}${this.section}/${this.item.slug}.webp`
          this.genericSEO(name, this.item.desc[0]);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 