import { Component, inject } from '@angular/core';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a23-effect.component.html',
    selector: 'a23-effect',
    imports: [...CommonImports, EffectComponent]
})
export class A23EffectComponent extends SingleComponent {
protected a23service = inject(A23Service);

  changeData() {
    this.gameService(this.a23service, 'effects');
    return this.a23service.getEffect(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a23service.effect_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}