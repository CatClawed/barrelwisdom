import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from '../map/a26-map.component';

@Component({
    templateUrl: 'a26-monster.component.html',
    selector: 'a26-monster',
    styleUrls: ['../yumia.scss'],
    providers: [DestroyService],
    imports: [...CommonImports, A26MapComponent]
})
export class A26MonsterComponent extends SingleComponent {
  chart = {
    "resist": `<i class="fa-solid fa-caret-up"></i>`,
    "weak":   `<i class="fa-solid fa-caret-down"></i>`,
  }

  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    protected a26service: A26Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  changeData() {
    this.gameService(this.a26service, 'monsters');
    return this.a26service.getMonster(this.slug, this.language);
  }
  afterAssignment(): void {
    //this.seoImage = `${this.imgURL}${this.section}/${this.data.id}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      this.a26service.monsterString[this.language],
      false,
      this.inputSlug ? false : true);
  }
}