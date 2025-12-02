import { Component, inject, ViewEncapsulation } from '@angular/core';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25rw-monster.component.html',
    selector: 'a25rw-monster',
    imports: [...CommonImports],
    encapsulation: ViewEncapsulation.None,
    styleUrl: 'monster.scss'
})
export class A25RWMonsterComponent extends SingleComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)

  star(num) {
    return Math.floor(num/2);
  }
  changeData() {
    this.gameService(this.a25rwservice, 'monsters');
    return this.a25rwservice.getMonster(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.id}.webp`
    this.genericSettings(this.data.name, this.data.desc1,
      this.a25rwservice.monster_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}