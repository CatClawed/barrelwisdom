import { Component, inject } from '@angular/core';
import { A22Service } from '@app/views/games/A22/_services/a22.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { SingleComponent } from '@app/views/games/_prototype/single.component';

@Component({
    templateUrl: 'a22-shopdevelop.component.html',
    imports: [...CommonImports]
})
export class A22ShopDevelopComponent extends SingleComponent {
  protected a22service = inject(A22Service);

  changeData() {
    this.gameService(this.a22service, 'shopdevelop');
    this.genericSettings(this.a22service.develop_translation[this.language], `The full shop develop list.`);
    return this.a22service.getShopDevList(this.language);
  }
}