import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A23TraitRoutingModule } from './a23-trait-routing.module';
import { A23TraitComponent } from './a23-trait.component';
import { A23TraitlistComponent } from './a23-traitlist.component';

@NgModule({
    imports: [
      SharedModule,
      A23TraitRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      ErrorModule,
    ],
    declarations: [
        A23TraitlistComponent,
        A23TraitComponent,
    ]
  })
  export class A23TraitModule {}