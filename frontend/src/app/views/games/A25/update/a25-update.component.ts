import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a25-update.component.html',
  selector: 'a25-update',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, DatePipe]
})
export class A25UpdateComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected a25service: A25Service) {
    super(destroy$, route, seoService);
  }
  changeData() {
    this.gameService(this.a25service, 'home');
    this.genericSEO('Home', `What's new in ${this.gameTitle}?`);
    return this.a25service.getUpdate(this.language)
  }
} 