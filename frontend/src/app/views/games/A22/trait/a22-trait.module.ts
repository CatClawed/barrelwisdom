import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A22TraitRoutingModule } from './a22-trait-routing.module';
import { A22TraitComponent } from './a22-trait.component';
import { A22TraitlistComponent } from './a22-traitlist.component';

@NgModule({
    imports: [
      SharedModule,
      A22TraitRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      ErrorComponent,
    ],
    declarations: [
        A22TraitlistComponent,
        A22TraitComponent,
    ]
  })
  export class A22TraitModule {}