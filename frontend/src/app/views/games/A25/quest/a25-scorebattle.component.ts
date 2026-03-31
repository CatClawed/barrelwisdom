import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, ViewEncapsulation } from '@angular/core';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a25-scorebattle.component.html',
    styleUrls: ['../resleri.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [...CommonImports, NgTemplateOutlet]
})
export class A25ScoreBattleComponent extends FragmentedComponent {
  protected a25service = inject(A25Service);
  title: string;
  difficulties = {
    1: "Normal",
    2: "Hard",
    3: "Very Hard",
  }

  changeData() {
    this.gameService(this.a25service, 'quests/scorebattles');
    switch(this.language) {
      case "ja": this.title = "スコアバトル"; break;
      case "tc": this.title = "积分战斗蟩"; break;
      case "sc": this.title = "積分戰蟩"; break;
      default: this.title = "Score Battles";
    }
    this.genericSettings(this.title, `All Score Battles in ${this.gameTitle}`);
    return this.a25service.getScoreBattles(this.language);
  }
}