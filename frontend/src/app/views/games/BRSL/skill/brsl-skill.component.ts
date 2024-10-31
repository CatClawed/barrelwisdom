import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
  templateUrl: 'brsl-skill.component.html',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class BRSLSkillComponent extends FragmentedComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private brslservice: BRSLService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected viewportScroller: ViewportScroller,
    protected loc: Location) {
    super(destroy$, route, seoService, breadcrumbService, viewportScroller, loc);
  }
  changeData() {
    this.gameService(this.brslservice, 'skills');
    this.genericSettings(`Skills`, `All skills in ${this.gameTitle}.`);
    return this.brslservice.getSkillList(this.language);
  }
} 