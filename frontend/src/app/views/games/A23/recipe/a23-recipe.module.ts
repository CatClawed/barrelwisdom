import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorModule } from '@app/views/error/error.module';
import { A23RecipeRoutingModule } from './a23-recipe-routing.module';
import { A23RecipeComponent } from './a23-recipe.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
    imports: [
      CommonModule,
      A23RecipeRoutingModule,
      ErrorModule,
      BreadcrumbModule,
      PopoverModule.forRoot(),
    ],
    declarations: [
        A23RecipeComponent,
    ]
  })
  export class A23RecipeModule {}