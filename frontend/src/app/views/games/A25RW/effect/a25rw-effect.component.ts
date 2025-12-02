import { Component, inject } from '@angular/core';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25rw-effect.component.html',
    selector: 'a25rw-effect',
    imports: [...CommonImports, EffectComponent]
})
export class A25RWEffectComponent extends SingleComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)

  changeData() {
    this.gameService(this.a25rwservice, 'effects');
    return this.a25rwservice.getEffect(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      this.a25rwservice.effect_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}