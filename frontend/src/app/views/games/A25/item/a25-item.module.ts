import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { ErrorComponent } from '@app/views/error/error.component';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { A25ItemRoutingModule } from './a25-item-routing.module';
import { A25ItemComponent } from './a25-item.component';
import { A25MaterialListComponent } from './a25-materiallist.component';
import { A25RecipeComponent } from './a25-recipe.component';
import { A25SynthesisListComponent } from './a25-synthlist.component';

@NgModule({
  imports: [
    SharedModule,
    A25ItemRoutingModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatTabsModule,
    ErrorComponent,
    PopoverModule.forRoot(),
  ],
  declarations: [
    A25MaterialListComponent,
    A25ItemComponent,
    A25SynthesisListComponent,
    A25RecipeComponent
  ],
  exports: [
    A25ItemComponent
  ]
})
export class A25ItemModule { }