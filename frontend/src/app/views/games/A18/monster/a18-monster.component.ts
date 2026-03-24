import { Component, inject } from '@angular/core';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a18-monster.component.html',
    selector: 'a18-monster',
    styleUrl: '../a18.scss',
    imports: [...CommonImports]
})
export class A18MonsterComponent extends SingleComponent {
  protected a18service = inject(A18Service);
  chart = {
    1: `A18.svg?v=0#fa-x`,
    2: `A18.svg?v=0#fa-minus`,
    3: `main.svg?v=0#fa-caret-up`,
    4: `A18.svg?v=0#fa-circle`,
    5: `A18.svg?v=0#fa-circle-dot`,
    6: `A18.svg?v=0#fa-empty-star`
  }

  changeData() {
    this.gameService(this.a18service, 'monsters');
    return this.a18service.getMonster(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc[0],
      this.a18service.monster_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}