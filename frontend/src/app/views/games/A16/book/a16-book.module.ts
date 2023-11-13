import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A16BookRoutingModule } from './a16-book-routing.module';
import { A16BookComponent } from './a16-book.component';
import { A16BooklistComponent } from './a16-booklist.component';

@NgModule({
    imports: [
      SharedModule,
      A16BookRoutingModule,
      ErrorComponent,
    ],
    declarations: [
        A16BooklistComponent,
        A16BookComponent,
    ]
  })
  export class A16BookModule {}