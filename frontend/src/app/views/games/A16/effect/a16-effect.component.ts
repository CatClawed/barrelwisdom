import { Component, inject } from '@angular/core';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a16-effect.component.html',
    selector: 'a16-effect',
    imports: [...CommonImports, EffectComponent]
})
export class A16EffectComponent extends SingleComponent {
  protected a16service = inject(A16Service);

  changeData() {
    this.gameService(this.a16service, 'effects');
    return this.a16service.getEffect(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a16service.effect_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}