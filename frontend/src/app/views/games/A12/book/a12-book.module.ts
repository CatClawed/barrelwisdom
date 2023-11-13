import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A12BookRoutingModule } from './a12-book-routing.module';
import { A12BookComponent } from './a12-book.component';
import { A12BooklistComponent } from './a12-booklist.component';

@NgModule({
    imports: [
      SharedModule,
      A12BookRoutingModule,
      ErrorComponent,
    ],
    declarations: [
        A12BooklistComponent,
        A12BookComponent,
    ]
  })
  export class A12BookModule {}