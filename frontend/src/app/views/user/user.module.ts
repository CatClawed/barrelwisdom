import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { ErrorModule } from '@app/views/error/error.module';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      UserRoutingModule,
      ErrorModule
    ],
    declarations: [
      UserComponent,
    ]
  })
  export class UserModule { }