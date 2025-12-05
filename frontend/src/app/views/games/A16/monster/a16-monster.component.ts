import { Component, inject } from '@angular/core';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a16-monster.component.html',
    selector: 'a16-monster',
    styleUrl: '../a16.scss',
    imports: [...CommonImports]
})
export class A16MonsterComponent extends SingleComponent {
  protected a16service = inject(A16Service);

  changeData() {
    this.gameService(this.a16service, 'monsters');
    return this.a16service.getMonster(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      'Monsters',
      false,
      this.inputSlug ? false : true);
  }
}