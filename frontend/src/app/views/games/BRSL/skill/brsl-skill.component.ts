import { Location, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Skill } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-skill.component.html',
  providers: [DestroyService]
})
export class BRSLSkillComponent extends FragmentedComponent {
  skills: Skill[];

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    private brslservice: BRSLService,
    protected seoService: SeoService,
    protected viewportScroller: ViewportScroller,
    protected loc: Location) {
    super(destroy$, route, seoService, viewportScroller, loc);
  }
  changeData(): void {
    this.brslservice.getSkillList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: skill => {
          this.error = ``;
          this.skills = skill;
          this.hasData = true;
          this.gameService(this.brslservice, 'skills');
          this.genericSEO(`Skills`, `All skills in ${this.gameTitle}.`);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
} 