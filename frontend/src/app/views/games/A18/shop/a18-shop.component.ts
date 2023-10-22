import { Location, ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Shop } from '@app/views/games/A18/_services/a18.interface';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a18-shop.component.html',
  providers: [DestroyService]
})

export class A18ShopComponent extends SingleComponent2 implements AfterViewInit {
  shops: Shop[];

  constructor(
    protected readonly destroy$: DestroyService,
    protected route: ActivatedRoute,
    protected location: Location,
    protected seoService: SeoService,
    private a18service: A18Service,
    private viewportScroller: ViewportScroller,
  ) {
    super(destroy$, route, seoService);
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

  changeData() {
    this.a18service.getShopList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: shops => {
          this.error = ``;
          this.shops = shops;
          this.gameService(this.a18service, 'shops');
          this.genericSEO(`Shops`, `The list of shops in ${this.gameTitle}.`);
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