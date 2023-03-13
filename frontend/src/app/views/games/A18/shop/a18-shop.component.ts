import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { first, takeUntil } from 'rxjs/operators';
import { ListComponent } from '@app/views/games/_prototype/list.component';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a18-shop.component.html',
  providers: [DestroyService]
})

export class A18ShopComponent extends SingleComponent implements OnInit {
  shops: Shop[];

  constructor(
    protected readonly destroy$: DestroyService,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private a18service: A18Service,
    private viewportScroller: ViewportScroller,
  ) {
    super(route, seoService);
    this.gameService(this.a18service, 'shops');
  }

  ngOnInit(): void {
    this.genericSEO(`Shops`, `The list of shops in ${this.gameTitle}.`);
    this.getShops();
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(), takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
  scroll(id: string) {
    this.location.replaceState(`${this.gameURL}/${this.section}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }

  getShops() {
    this.a18service.getShopList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: shops => {
          this.error =``;
          this.shops = shops;
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
  identify(index, item) {
    return item.slug;
}
}