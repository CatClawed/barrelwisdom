import { Component, inject } from '@angular/core';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A26MapComponent } from '../map/a26-map.component';

@Component({
    templateUrl: 'a26-monster.component.html',
    selector: 'a26-monster',
    styleUrls: ['../yumia.scss'],
    imports: [...CommonImports, A26MapComponent]
})
export class A26MonsterComponent extends SingleComponent {
  protected a26service = inject(A26Service);
  chart = {
    "resist": `<svg><use href="/media/spritesheets/main.svg?v=1#fa-caret-up"></use></svg>`,
    "weak":   `<svg><use href="/media/spritesheets/main.svg?v=1#fa-caret-down"></use></svg>`,
  }

  changeData() {
    this.gameService(this.a26service, 'monsters');
    return this.a26service.getMonster(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.id}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      this.a26service.monster_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}