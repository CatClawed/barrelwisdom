import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { A25MemoriaRoutingModule } from './a25-memoria-routing.module';
import { A25MemoriaComponent } from './a25-memoria.component';
import { A25MemorialistComponent } from './a25-memorialist.component';

@NgModule({
    imports: [
      SharedModule,
      A25MemoriaRoutingModule,
      MatSelectModule,
      ErrorComponent,
      MatCheckboxModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A25MemorialistComponent,
        A25MemoriaComponent,
    ]
  })
  export class A25MemoriaModule {}