import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a23-monster.component.html',
  selector: 'a23-monster',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports]
})
export class A23MonsterComponent extends SingleComponent {
  chart = {
    RESIST: `<i class="fas fa-chevron-up"></i>`,
    NOEFFECT: `<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i>`,
    SUPER_RESIST: `<i class="fas fa-chevron-up"></i><i class="fas fa-chevron-up"></i>`,
    WEAK: `<i class="fas fa-chevron-down"></i>`,
    SUPER_WEAK: `<i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i>`,
    GREAT_WEAK: `<i class="fas fa-chevron-down"></i><i class="fas fa-chevron-down"></i>`,
  }

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a23service: A23Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }
  changeData() {
    this.gameService(this.a23service, 'monsters');
    return this.a23service.getMonster(this.slug, this.language);
  }

  afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc1,
      'Monsters',
      false,
      this.inputSlug ? false : true);
  }
} 