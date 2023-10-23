import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { ShopDevelop } from '@app/views/games/A22/_services/a22.interface';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a22-shopdevelop.component.html',
  providers: [DestroyService]
})
export class A22ShopDevelopComponent extends SingleComponent {
  shopdevelop: ShopDevelop[];

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private a22service: A22Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    this.a22service.getShopDevList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: shopdevelop => {
          this.error = ``;
          this.shopdevelop = shopdevelop;
          this.gameService(this.a22service, 'shopdevelop');
          this.genericSEO(`Shop Development`, `The full shop develop list.`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 