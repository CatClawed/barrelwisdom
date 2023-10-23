import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Item } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-item.component.html',
  selector: 'br1-item',
  providers: [DestroyService]
})
export class BR1ItemComponent extends SingleComponent2 {
  item: Item;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    private br1service: BR1Service) {
    super(destroy$, route, seoService);
  }
  changeData(): void {
    this.language = this.route.snapshot.params.language;
    if (this.showNav) this.colset = "col-md-7 mx-auto ";
    this.br1service.getItem(this.slug, this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: item => {
          this.error = ``;
          this.item = item;
          this.gameService(this.br1service, 'items');
          this.genericSEO(this.item.name, this.item.description);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 