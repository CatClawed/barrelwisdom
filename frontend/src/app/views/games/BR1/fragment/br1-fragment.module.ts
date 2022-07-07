import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';
import { ErrorModule } from '@app/views/error/error.module';
import { BR1FragmentEffectRoutingModule } from './br1-fragment-routing.module';
import { BR1FragmentEffectlistComponent } from './br1-fragmentlist.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      BR1FragmentEffectRoutingModule,
      MatInputModule,
      MatFormFieldModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        BR1FragmentEffectlistComponent
      ]
  })
  export class BR1FragmentEffectModule {}