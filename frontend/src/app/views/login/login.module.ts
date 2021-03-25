import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      LoginRoutingModule
    ],
    declarations: [
      LoginComponent,
    ],
    exports: [
      LoginComponent,
    ]
  })
  export class LoginModule {}