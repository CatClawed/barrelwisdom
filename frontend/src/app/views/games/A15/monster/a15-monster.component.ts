import { Component, inject } from '@angular/core';
import { A15Service } from '@app/views/games/A15/_services/a15.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a15-monster.component.html',
    selector: 'a15-monster',
    styleUrl: '../a15.scss',
    imports: [...CommonImports]
})
export class A15MonsterComponent extends SingleComponent {
  protected a15service = inject(A15Service);

  changeData() {
    this.gameService(this.a15service, 'monsters');
    return this.a15service.getMonster(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      this.a15service.monster_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}