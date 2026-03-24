import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryComponent } from '@app/views/_components/category/category.component';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a18-category.component.html',
    imports: [...CommonImports, CategoryComponent, NgTemplateOutlet]
})
export class A18CategoryComponent extends SingleComponent {
  protected a18service = inject(A18Service);

  changeData() {
    this.gameService(this.a18service, 'categories');
    return this.a18service.getCategory(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name,
      `${this.a18service.category_translation[this.language]} ${this.data.name}`, '', true);
  }
}