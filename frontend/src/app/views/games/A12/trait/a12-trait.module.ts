import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A12TraitRoutingModule } from './a12-trait-routing.module';
import { A12TraitComponent } from './a12-trait.component';
import { A12TraitlistComponent } from './a12-traitlist.component';

@NgModule({
    imports: [
      SharedModule,
      A12TraitRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      ErrorComponent,
    ],
    declarations: [
        A12TraitlistComponent,
        A12TraitComponent,
    ]
  })
  export class A12TraitModule {}