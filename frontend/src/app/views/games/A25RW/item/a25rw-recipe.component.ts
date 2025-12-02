import { Component, inject } from '@angular/core';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';
import { A25RWTreeComponent } from './a25rw-tree.component';

@Component({
    templateUrl: 'a25rw-recipe.component.html',
    imports: [...CommonImports, A25RWTreeComponent]
})
export class A25RWRecipeComponent extends FragmentedComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)

  changeData() {
    this.gameService(this.a25rwservice, 'recipe-trees');
    this.genericSettings(
      this.a25rwservice.recipe_tree[this.language],
      `All recipe trees in ${this.gameTitle}.`
    );
    return this.a25rwservice.getTreeList(this.language);
  }
}