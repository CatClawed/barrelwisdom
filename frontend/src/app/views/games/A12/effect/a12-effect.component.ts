import { Component, inject } from '@angular/core';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a12-effect.component.html',
    selector: 'a12-effect',
    imports: [...CommonImports, EffectComponent]
})
export class A12EffectComponent extends SingleComponent {
  protected a12service = inject(A12Service);

  changeData() {
    this.gameService(this.a12service, 'effects');
    return this.a12service.getEffect(this.slug, this.language)
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a12service.effect_translation[this.language],
      false,
      this.inputSlug ? false : true
    );
  }
}