import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { Popover } from '@app/views/_components/popover/popover.component';
import { A25Service } from '@app/views/games/A25/_services/a25.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a25-recipe.component.html',
    styleUrls: ['../resleri.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [...CommonImports, MatTabsModule, MatIconModule, MatButtonModule, Popover]
})
export class A25RecipeComponent extends SingleComponent {
  protected a25service = inject(A25Service);

  changeData() {
    this.gameService(this.a25service, 'items/recipes');
    this.genericSettings(this.a25service.recipe_translation[this.language], `All recipes in ${this.gameTitle}.`);
    return this.a25service.getRecipeList(this.language)
  }

  getEmptySpace(page, index) {
    if (index == 0) {
      return page.recipes[index].y - 1;
    }
    if (page.recipes[index].x > page.recipes[index - 1].x) {
      return (5 - page.recipes[index - 1].y) + (page.recipes[index].y - 1)
    }
    return page.recipes[index].y - page.recipes[index - 1].y - 1
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
}
