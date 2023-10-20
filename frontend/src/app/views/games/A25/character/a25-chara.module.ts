import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { ErrorModule } from '@app/views/error/error.module';
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
      ErrorModule,
      MatSliderModule,
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