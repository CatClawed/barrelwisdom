import { Component, inject } from '@angular/core';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a15-effect.component.html',
    selector: 'a15-effect',
    imports: [...CommonImports, EffectComponent]
})
export class A15EffectComponent extends SingleComponent {
  protected a15service = inject(A15Service);

  changeData() {
    this.gameService(this.a15service, 'effects');
    return this.a15service.getEffect(this.slug, this.language)
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      'Effects',
      false,
      this.inputSlug ? false : true);
  }
}