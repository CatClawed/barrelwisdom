import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a23-majorgather.component.html',
    styleUrl: '../a23.scss',
    imports: [...CommonImports, NgTemplateOutlet]
})

export class A23MajorGatherComponent extends FragmentedComponent {
  protected a23service = inject(A23Service);

  changeData() {
    this.gameService(this.a23service, 'major-gathering');
    this.genericSettings(this.a23service.majorgathering_translation[this.language], `All major gathering items in ${this.gameTitle}.`);
    return this.a23service.getMajorGather(this.language)
  }
}