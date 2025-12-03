import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a25-dungeon.component.html',
    styleUrls: ['../resleri.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [...CommonImports, NgTemplateOutlet]
})
export class A25DungeonComponent extends FragmentedComponent {
  protected a25service = inject(A25Service);
  title: string;

  changeData() {
    this.gameService(this.a25service, 'quests/dungeons');
    switch(this.language) {
      case "ja": this.title = "ダンジョン"; break;
      case "tc": this.title = "迷宫"; break;
      case "sc": this.title = "迷宮"; break;
      default: this.title = "Dungeons";
    }
    this.genericSettings(this.title, `All dungeons in ${this.gameTitle}`);
    return this.a25service.getDungeons(this.language);
  }
}