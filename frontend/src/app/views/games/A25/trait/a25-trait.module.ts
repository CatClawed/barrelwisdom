import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { A25TraitRoutingModule } from './a25-trait-routing.module';
import { A25TraitComponent } from './a25-trait.component';
import { A25TraitlistComponent } from './a25-traitlist.component';

@NgModule({
    imports: [
      SharedModule,
      A25TraitRoutingModule,
      TooltipModule.forRoot(),
      MatIconModule,
      MatSelectModule,
      ErrorModule,
    ],
    declarations: [
        A25TraitlistComponent,
        A25TraitComponent,
    ]
  })
  export class A25TraitModule {}