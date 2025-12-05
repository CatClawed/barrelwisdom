import { Component, inject } from '@angular/core';
import { A18Service } from '@app/views/games/A18/_services/a18.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a18-shop.component.html',
    imports: [...CommonImports]
})

export class A18ShopComponent extends FragmentedComponent {
  protected a18service = inject(A18Service);

  changeData() {
    this.gameService(this.a18service, 'shops');
    this.genericSettings(`Shops`, `The list of shops in ${this.gameTitle}.`);
    return this.a18service.getShopList(this.language);
  }
}