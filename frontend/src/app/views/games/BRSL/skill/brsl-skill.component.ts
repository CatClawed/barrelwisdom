import { Component, inject } from '@angular/core';
import { BRSLService } from '@app/views/games/BRSL/_services/brsl.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'brsl-skill.component.html',
    imports: [...CommonImports]
})
export class BRSLSkillComponent extends FragmentedComponent {
  protected brslservice = inject(BRSLService);

  changeData() {
    this.gameService(this.brslservice, 'skills');
    this.genericSettings(this.brslservice.skills_translation[this.language],
      `All skills in ${this.gameTitle}.`);
    return this.brslservice.getSkillList(this.language);
  }
}