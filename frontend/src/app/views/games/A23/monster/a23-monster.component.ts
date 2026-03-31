import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A23BookComponent } from "../item/a23-book.component";

@Component({
    templateUrl: 'a23-monster.component.html',
    selector: 'a23-monster',
    styleUrl: '../a23.scss',
    imports: [...CommonImports, A23BookComponent, NgTemplateOutlet]
})
export class A23MonsterComponent extends SingleComponent {
  protected a23service = inject(A23Service);

  changeData() {
    this.gameService(this.a23service, 'monsters');
    return this.a23service.getMonster(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc1,
      this.a23service.monster_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}