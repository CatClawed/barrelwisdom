import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A18TraitRoutingModule } from './a18-trait-routing.module';
import { A18TraitComponent } from './a18-trait.component';
import { A18TraitlistComponent } from './a18-traitlist.component';

@NgModule({
    imports: [
      SharedModule,
      A18TraitRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      ErrorComponent,
    ],
    declarations: [
        A18TraitlistComponent,
        A18TraitComponent,
    ]
  })
  export class A18TraitModule {}