import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      RegisterRoutingModule
    ],
    declarations: [
      RegisterComponent,
    ]
  })
  export class RegisterModule {}