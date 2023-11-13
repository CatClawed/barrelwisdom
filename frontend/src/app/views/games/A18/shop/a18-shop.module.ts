import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A18ShopRoutingModule } from './a18-shop-routing.module';
import { A18ShopComponent } from './a18-shop.component';

@NgModule({
    imports: [
      SharedModule,
      A18ShopRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorComponent,
    ],
    declarations: [
      A18ShopComponent,
    ]
  })
  export class A18ShopModule {}