import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
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
      ErrorModule,
    ],
    declarations: [
        A18TraitlistComponent,
        A18TraitComponent,
    ]
  })
  export class A18TraitModule {}