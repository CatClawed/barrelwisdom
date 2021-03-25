import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RegisterRoutingModule
    ],
    declarations: [
      RegisterComponent,
    ],
    exports: [
        RegisterComponent,
    ]
  })
  export class RegisterModule {}