import { Component, inject } from '@angular/core';
import { EffectComponent } from '@app/views/_components/effect/effect.component';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a18-effect.component.html',
    selector: 'a18-effect',
    imports: [...CommonImports, EffectComponent]
})
export class A18EffectComponent extends SingleComponent {
  protected a18service = inject(A18Service);

  changeData() {
    this.gameService(this.a18service, 'effects');
    return this.a18service.getEffect(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.desc,
      'Effects',
      false,
      this.inputSlug ? false : true);
  }
}