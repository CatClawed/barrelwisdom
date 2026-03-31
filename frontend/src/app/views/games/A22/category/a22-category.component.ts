import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CategoryComponent } from '@app/views/_components/category/category.component';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a22-category.component.html',
    styleUrl: '../a22.scss',
    imports: [...CommonImports, CategoryComponent, NgTemplateOutlet]
})
export class A22CategoryComponent extends SingleComponent {
  protected a22service = inject(A22Service);

  changeData() {
    this.gameService(this.a22service, 'categories');
    return this.a22service.getCategoryItem(this.slug, this.language)
  }

  override afterAssignment(): void {
    this.genericSettings(this.data.name, `All items in ${this.data.name}`, '', true);
  }
}