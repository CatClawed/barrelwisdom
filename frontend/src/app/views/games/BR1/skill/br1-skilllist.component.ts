
import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'br1-skilllist.component.html',
  providers: [DestroyService]
})
export class BR1SkilllistComponent extends FragmentedComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected loc: Location,
    private br1service: BR1Service,
    protected seoService: SeoService,
    protected viewportScroller: ViewportScroller) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }
  changeData() {
    this.gameService(this.br1service, 'skills');
    this.genericSEO(`Skills`, `The full skill list in ${this.gameTitle}.`);
    return this.br1service.getSkillList(this.language);
  }
} 