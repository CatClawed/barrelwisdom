import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryComponent } from '@app/views/_components/category/category.component';
import { A16Service } from '@app/views/games/A16/_services/a16.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a16-category.component.html',
    styleUrl: '../a16.scss',
    imports: [...CommonImports, CategoryComponent, NgTemplateOutlet]
})
export class A16CategoryComponent extends SingleComponent {
  protected a16service = inject(A16Service);

  changeData() {
    this.gameService(this.a16service, 'categories');
    return this.a16service.getCategory(this.slug, this.language);
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, this.a16service.category_translation[this.language], '', true);
  }
}