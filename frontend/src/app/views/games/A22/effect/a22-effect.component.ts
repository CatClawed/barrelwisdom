import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from '@app/services/breadcrumb.service';
import { DestroyService } from '@app/services/destroy.service';
import { SeoService } from '@app/services/seo.service';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { Tooltip } from '@app/views/_components/tooltip/tooltip.component';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
  templateUrl: 'a22-effect.component.html',
  selector: 'a22-effect',
  providers: [DestroyService],
  standalone: true,
  imports: [...CommonImports, Tooltip, EffectComponent]
})
export class A22EffectComponent extends SingleComponent {
  constructor(
    protected route: ActivatedRoute,
    protected readonly destroy$: DestroyService,
    protected seoService: SeoService,
    protected breadcrumbService: BreadcrumbService,
    private a22service: A22Service) {
    super(destroy$, route, breadcrumbService, seoService);
  }

  @Input()
  efftype: string;

  small: boolean = false;

  @Output()
  buttonClicked = new EventEmitter<string>();

  changeData() {
    this.gameService(this.a22service, 'effects');
    return this.a22service.getEffect(this.slug, this.language);
  }
  afterAssignment(): void {
    if (this.data.efftype) {
      this.efftype = this.data.efftype;
    }
    if (this.data.efftype === "Hidden" || this.data.efftype === 'unused') {
      this.error = this.breadcrumbService.setStatus(404);
      this.data = undefined;
    }
    else {
      this.genericSEO(this.data.name, this.data.desc ? this.data.desc : `EV Effect in ${this.gameTitle}.`);
      if (!this.inputSlug) {
        switch(this.data.efftype) {
          case 'Normal': {
            this.breadcrumbService.setBreadcrumbs(
              [[this.gameTitle, `/${this.gameURL}`], ['Effects', `/${this.gameURL}/effects/${this.language}`]],
              this.data.name
            );
            this.efftype = 'Normal';
            break;
          }
          case 'EV': {
            this.breadcrumbService.setBreadcrumbs(
              [[this.gameTitle, `/${this.gameURL}`], ['EV Effects', `/${this.gameURL}/ev-effects/${this.language}`]],
              this.data.name
            );
            this.efftype = 'EV';
            break;
          }
          default: {
            this.breadcrumbService.setBreadcrumbs(
              [[this.gameTitle, `/${this.gameURL}`], ['Forge Effects',`/${this.gameURL}/forge-effects/${this.language}`]],
              this.data.name
            );
            this.efftype = 'Forge';
            break;
          }
        }
      }
    }
  }
} 