import { Component, inject } from '@angular/core';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'br1-demon.component.html',
    selector: 'br1-demon',
    imports: [...CommonImports]
})
export class BR1DemonComponent extends SingleComponent {
  protected br1service = inject(BR1Service);

  changeData() {
    this.gameService(this.br1service, 'demons');
    return this.br1service.getDemon(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.data.flavor,
      'Demons',
      false,
      this.inputSlug ? false : true);
  }
}