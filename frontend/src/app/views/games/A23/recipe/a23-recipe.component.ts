import { Location, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HistoryService } from '@app/services/history.service';
import { Popover } from '@app/views/_components/popover/popover.component';
import { RecipeIdea } from '@app/views/games/A23/_services/a23.interface';
import { A23Service } from '@app/views/games/A23/_services/a23.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a23-recipe.component.html',
    imports: [...CommonImports, Popover, NgTemplateOutlet]
})
export class A23RecipeComponent extends SingleComponent {
  protected a23service = inject(A23Service);
  protected location = inject(Location);
  protected historyService = inject(HistoryService);
  sophie_num: number = 28;
  plachta_num: number = 53;
  shared_num: number = 75;
  book_num: number = 80;
  sophie = false;
  plachta = false;
  shared = false;
  book = false;
  ctx: RecipeIdea;
  fixit;

  constructor() {
    super();
    switch (this.route.snapshot.queryParamMap.get('tab')) {
      case 'sophie':
        this.sophie = true;
        break;
      case 'plachta':
        this.plachta = true;
        break;
      case 'reference':
        this.book = true;
        break;
      case 'shared':
        this.shared = true;
        break;
      default:
        this.sophie = true;
    }
  }

  changeData() {
    this.gameService(this.a23service, 'recipe-ideas');
    this.genericSettings(this.a23service.recipeidea_translation[this.language], `All recipe ideas in ${this.gameTitle}.`);
    return this.a23service.getRecipeList(this.language);
  }

  override afterAssignment(): void {
    this.fixit = [];
    let col = 1
    for (let i = 0; i < this.data.length;) {
      for (col = 1; col <= 5; col++) {
        if (this.data.length <= i) {
          this.fixit.push(false)
        }
        else if (col != this.data[i].col) {
          this.fixit.push(false)
        }
        else {
          this.fixit.push(this.data[i])
          i++;
        }
      }
    }
  }

  toggle(s: boolean, p: boolean, sh: boolean, b: boolean, char: string) {
    this.sophie = s;
    this.plachta = p;
    this.shared = sh;
    this.book = b;
    this.location.replaceState(`${this.gameURL}/${this.section}/${this.language}?tab=${char}`);
  }

  context(r: RecipeIdea) {
    this.ctx = r;
  }
}