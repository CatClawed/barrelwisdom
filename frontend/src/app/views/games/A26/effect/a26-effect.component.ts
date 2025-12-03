import { Component, inject } from '@angular/core';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a26-effect.component.html',
    selector: 'a26-effect',
    imports: [...CommonImports, EffectComponent]
})
export class A26EffectComponent extends SingleComponent {
  protected a26service = inject(A26Service);

  changeData() {
    this.gameService(this.a26service, 'effects');
    return this.a26service.getEffect(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc1,
      this.a26service.effect_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}