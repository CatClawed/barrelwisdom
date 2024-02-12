import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { A25CharaRoutingModule } from './a25-chara-routing.module';
import { A25CharaComponent } from './a25-chara.component';
import { A25CharalistComponent } from './a25-charalist.component';

@NgModule({
    imports: [
      SharedModule,
      A25CharaRoutingModule,
      MatSelectModule,
      ErrorComponent,
      MatSliderModule,
      MatCheckboxModule,
      MatMenuModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A25CharalistComponent,
        A25CharaComponent,
    ],
    exports: [
      A25CharaComponent
    ]
  })
  export class A25CharaModule {}