import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25-update.component.html',
    selector: 'a25-update',
    imports: [...CommonImports, DatePipe]
})
export class A25UpdateComponent extends SingleComponent {
  protected a25service = inject(A25Service);

  changeData() {
    this.gameService(this.a25service, 'home');
    this.genericSettings('Home', `What's new in ${this.gameTitle}?`);
    return this.a25service.getUpdate(this.language)
  }
}