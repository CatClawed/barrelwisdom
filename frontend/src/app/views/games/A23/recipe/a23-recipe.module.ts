import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorComponent } from '@app/views/error/error.component';
import { A23RecipeRoutingModule } from './a23-recipe-routing.module';
import { A23RecipeComponent } from './a23-recipe.component';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    imports: [
      CommonModule,
      A23RecipeRoutingModule,
      ErrorComponent,
      BreadcrumbComponent,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A23RecipeComponent,
    ]
  })
  export class A23RecipeModule {}