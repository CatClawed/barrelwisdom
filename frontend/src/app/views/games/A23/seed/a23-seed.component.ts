import { Component, inject } from '@angular/core';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a23-seed.component.html',
    imports: [...CommonImports]
})
export class A23SeedComponent extends SingleComponent {
  protected a23service = inject(A23Service);

  changeData() {
    this.gameService(this.a23service, 'seeds');
    this.genericSettings(this.a23service.seed_translation[this.language], `About growing seeds, and the list of items you can get.`);
    return this.a23service.getSeeds(this.language);
  }
}