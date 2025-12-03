import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryComponent } from '@app/views/_components/category/category.component';
import { A26Service } from '@app/views/games/A26/_services/a26.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a26-category.component.html',
    imports: [...CommonImports, CategoryComponent, NgTemplateOutlet]
})
export class A26CategoryComponent extends SingleComponent {
  protected a26service = inject(A26Service);

  changeData() {
    this.gameService(this.a26service, 'categories');
    return this.a26service.getCategory(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
  }
}