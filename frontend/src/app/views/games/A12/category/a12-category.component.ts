import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryComponent } from '@app/views/_components/category/category.component';
import { A12Service } from '@app/views/games/A12/_services/a12.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a12-category.component.html',
    imports: [...CommonImports, CategoryComponent, NgTemplateOutlet]
})
export class A12CategoryComponent extends SingleComponent {
  protected a12service = inject(A12Service);

  changeData() {
    this.gameService(this.a12service, 'categories');
    return this.a12service.getCategory(this.slug, this.language);
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
  }
}