import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ErrorModule } from '@app/views/error/error.module';
import { SharedModule } from '@app/views/games/_prototype/SharedModules/shared.module';
import { A18RecipeRoutingModule } from './a18-recipe-routing.module';
import { A18RecipeComponent } from './a18-recipe.component';

@NgModule({
    imports: [
      SharedModule,
      A18RecipeRoutingModule,
      MatIconModule,
      MatSelectModule,
      MatButtonModule,
      ErrorModule,
    ],
    declarations: [
      A18RecipeComponent,
    ]
  })
  export class A18RecipeModule {}