import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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