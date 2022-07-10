
import { Location, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Skill } from '@app/views/games/BR1/_services/br1.interface';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { first, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: 'br1-skilllist.component.html',
  providers: [DestroyService]
})
export class BR1SkilllistComponent extends SingleComponent implements OnInit {
  skills: Skill[];

  constructor(
    protected route: ActivatedRoute,
    private readonly destroy$: DestroyService,
    private loc: Location,
    private br1service: BR1Service,
    protected seoService: SeoService,
    private viewportScroller: ViewportScroller) {
    super(route, seoService);
    this.gameService(this.br1service, 'skills');
  }
  ngOnInit(): void {
    this.genericSEO(`Skills`, `The full skill list in ${this.gameTitle}.`);
    this.br1service.getSkillList(this.language)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: skill => {
          this.error = ``;
          this.skills = skill;
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