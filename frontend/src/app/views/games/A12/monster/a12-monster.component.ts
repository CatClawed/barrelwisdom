import { Component, inject } from '@angular/core';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a12-monster.component.html',
    selector: 'a12-monster',
    imports: [...CommonImports]
})
export class A12MonsterComponent extends SingleComponent {
  protected a12service = inject(A12Service);
  changeData() {
    this.gameService(this.a12service, 'monsters');
    return this.a12service.getMonster(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      'Monsters',
      false,
      this.inputSlug ? false : true
    );
  }
}