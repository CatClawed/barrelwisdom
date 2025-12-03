import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25-research.component.html',
    imports: [CommonImports, MatTabsModule, NgTemplateOutlet]
})
export class A25ResearchComponent extends SingleComponent {
  protected a25service = inject(A25Service);
  kind = {
    "en": ['Combat Research', 'Alchemy Research'],
    "ja": ['戦闘研究', '錬金研究'],
    "sc": ['战斗研究', '炼金研究'],
    "tc": ['戰鬥研究', '鍊金研究']
  }

  changeData() {
    this.gameService(this.a25service, 'research');
    this.genericSettings(this.a25service.research_translation[this.language], `All research in ${this.gameTitle}`);
    return this.a25service.getResearch(this.language)
  }
}