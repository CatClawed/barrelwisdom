import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Update } from '@app/views/games/A25/_services/a25.interface';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { SingleComponent2 } from '@app/views/games/_prototype/single2.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'a25-update.component.html',
  selector: 'a25-update',
  providers: [DestroyService]

})
export class A25UpdateComponent extends SingleComponent2 {
  update: Update;

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service) {
    super(destroy$, route, seoService);
  }

  changeData(): void {
    if (this.showNav) this.colset = "col-md-5 mx-auto ";
    this.a25service.getUpdate(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: update => {
          this.update = update;
          this.gameService(this.a25service, 'update');
          this.genericSEO('Home', `What's new in ${this.gameTitle}?`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }

} 