import { Component, inject, Input } from '@angular/core';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a22-effect.component.html',
    selector: 'a22-effect',
    imports: [...CommonImports, Popover, EffectComponent]
})
export class A22EffectComponent extends SingleComponent {
  protected a22service = inject(A22Service);
  @Input() efftype: string;

  changeData() {
    this.gameService(this.a22service, 'effects');
    return this.a22service.getEffect(this.slug, this.language);
  }
  override afterAssignment(): void {
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
              [[this.gameTitle, `/${this.gameURL}`], [this.a22service.effect_translation[this.language], `/${this.gameURL}/effects/${this.language}`]],
              this.data.name
            );
            this.efftype = 'Normal';
            break;
          }
          case 'EV': {
            this.breadcrumbService.setBreadcrumbs(
              [[this.gameTitle, `/${this.gameURL}`], [this.a22service.eveffect_translation[this.language], `/${this.gameURL}/ev-effects/${this.language}`]],
              this.data.name
            );
            this.efftype = 'EV';
            break;
          }
          default: {
            this.breadcrumbService.setBreadcrumbs(
              [[this.gameTitle, `/${this.gameURL}`], [this.a22service.forgeeffect_translation[this.language],`/${this.gameURL}/forge-effects/${this.language}`]],
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