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
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller,
    private loc: Location) {
    super(route, seoService);
    this.gameService(this.brslservice, 'skills');
  }
  ngOnInit(): void {
    this.brslservice.getSkillList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: skill => {
          this.error = ``;
          this.skills = skill;
          this.genericSEO(`Skills`, `All skills in ${this.gameTitle}.`);
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
    this.loc.replaceState(`${this.gameURL}/${this.section}/${this.language}#${id}`);
    this.viewportScroller.scrollToAnchor(id);
  }
} 