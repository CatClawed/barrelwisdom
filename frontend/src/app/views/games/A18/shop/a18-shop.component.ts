import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Shop } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-shop.component.html',
  providers: [DestroyService]
})

export class A18ShopComponent extends FragmentedComponent {
  shops: Shop[];

  constructor(
    protected readonly destroy$: DestroyService,
    protected route: ActivatedRoute,
    protected seoService: SeoService,
    private a18service: A18Service,
    protected viewportScroller: ViewportScroller,
    protected loc: Location
  ) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }

  changeData() {
    this.a18service.getShopList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: shops => {
          this.error = ``;
          this.shops = shops;
          console.log('shops')
          this.hasData = true;
          this.gameService(this.a18service, 'shops');
          this.genericSEO(`Shops`, `The list of shops in ${this.gameTitle}.`);
          
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
}