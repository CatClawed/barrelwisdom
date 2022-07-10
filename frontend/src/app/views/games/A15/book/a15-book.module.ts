import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A15BookRoutingModule } from './a15-book-routing.module';
import { A15BookComponent } from './a15-book.component';
import { A15BooklistComponent } from './a15-booklist.component';

@NgModule({
    imports: [
      SharedModule,
      A15BookRoutingModule,
      ErrorModule,
    ],
    declarations: [
        A15BooklistComponent,
        A15BookComponent,
    ]
  })
  export class A15BookModule {}