import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryComponent } from '@app/views/_components/category/category.component';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a23-category.component.html',
    imports: [...CommonImports, CategoryComponent, NgTemplateOutlet]
})
export class A23CategoryComponent extends SingleComponent {
  protected a23service = inject(A23Service);

  changeData() {
    this.gameService(this.a23service, 'categories');
    return this.a23service.getCategory(this.slug, this.language)
  }
  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true)
  }
}