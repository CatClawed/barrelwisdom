
import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BR1Service } from '@app/views/games/BR1/_services/br1.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'br1-skilllist.component.html',
    imports: [...CommonImports, NgTemplateOutlet]
})
export class BR1SkilllistComponent extends FragmentedComponent {
  protected br1service = inject(BR1Service);

  changeData() {
    this.gameService(this.br1service, 'skills');
    this.genericSettings(`Skills`, `The full skill list in ${this.gameTitle}.`);
    return this.br1service.getSkillList(this.language);
  }
}