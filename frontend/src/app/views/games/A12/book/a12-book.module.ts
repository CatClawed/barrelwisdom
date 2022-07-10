import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A12BookRoutingModule } from './a12-book-routing.module';
import { A12BookComponent } from './a12-book.component';
import { A12BooklistComponent } from './a12-booklist.component';

@NgModule({
    imports: [
      SharedModule,
      A12BookRoutingModule,
      ErrorModule,
    ],
    declarations: [
        A12BooklistComponent,
        A12BookComponent,
    ]
  })
  export class A12BookModule {}