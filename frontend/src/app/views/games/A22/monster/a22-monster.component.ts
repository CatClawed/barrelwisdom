import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';
import { A22CategoryComponent } from "../category/a22-category.component";

@Component({
    templateUrl: 'a22-monster.component.html',
    selector: 'a22-monster',
    styleUrl: '../a22.scss',
    imports: [...CommonImports, NgTemplateOutlet, A22CategoryComponent]
})
export class A22MonsterComponent extends SingleComponent {
  protected a22service = inject(A22Service);

  changeData() {
    this.gameService(this.a22service, 'monsters');
    return this.a22service.getMonster(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.seoImage = `${this.imgURL}${this.section}/${this.data.slug}.webp`
    this.genericSettings(this.data.name, this.data.desc,
      this.a22service.monster_translation[this.language],
      false,
      this.inputSlug ? false : true);
  }
}