import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { ErrorComponent } from '@app/views/error/error.component';
import { BR1FragmentEffectRoutingModule } from './br1-fragment-routing.module';
import { BR1FragmentEffectlistComponent } from './br1-fragmentlist.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      BR1FragmentEffectRoutingModule,
      MatInputModule,
      MatFormFieldModule,
      ErrorComponent,
      BreadcrumbComponent,
    ],
    declarations: [
        BR1FragmentEffectlistComponent
      ]
  })
  export class BR1FragmentEffectModule {}