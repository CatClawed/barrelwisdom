import { Component, inject } from '@angular/core';
import { A25RWService } from '@app/views/games/A25RW/_services/a25rw.service';
import { CommonImports } from '@app/views/games/_prototype/SharedModules/common-imports';
import { FragmentedComponent } from '@app/views/games/_prototype/fragmented.component';

@Component({
    templateUrl: 'a25rw-shop.component.html',
    imports: [...CommonImports]
})

export class A25RWShopComponent extends FragmentedComponent {
  protected a25rwservice: A25RWService = inject(A25RWService)

  changeData() {
    this.gameService(this.a25rwservice, 'shops');
    this.genericSettings(this.a25rwservice.shop_translation[this.language], `The list of shops in ${this.gameTitle}.`);
    return this.a25rwservice.getShopList(this.language);
  }
}