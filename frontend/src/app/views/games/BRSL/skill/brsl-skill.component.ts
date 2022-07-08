import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { Skill } from '@app/views/games/BRSL/_services/brsl.interface';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'brsl-skill.component.html',
  providers: [DestroyService]
})
export class BRSLSkillComponent extends SingleComponent implements OnInit {
  skills: Skill[];

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private brslservice: BRSLService,
    private seoService: SeoService,
    private viewportScroller: ViewportScroller,
    private loc: Location) {
    super(route);
    this.gameService(this.brslservice);
  }
  ngOnInit(): void {
    this.brslservice.getSkillList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: skill => {
          this.error = ``;
          this.skills = skill;
          this.seoURL = `${this.gameURL}/skills/${this.language}`;
          this.seoTitle = `Skills - ${this.gameTitle}`;
          this.seoDesc = `All skills in ${this.gameTitle}.`
          this.seoService.SEOSettings(this.seoURL, this.seoTitle, this.seoDesc, this.seoImage);
        },
        error: error => {
          this.error = `${error.status}`;
        }
      });
  }
  ngAfterViewInit(): void {
    this.route.fragment.pipe(
      first(), takeUntil(this.destroy$)
    ).subscribe(fragment => this.viewportScroller.scrollToAnchor(fragment));
  }
  scroll(id: string) {
    this.loc.replaceState(`${this.gameURL}/skills/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 