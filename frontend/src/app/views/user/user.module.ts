import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { ErrorModule } from '@app/views/error/error.module';

@NgModule({
    imports: [
      CommonModule,
      UserRoutingModule,
      ErrorModule
    ],
    declarations: [
      UserComponent,
    ]
  })
  export class UserModule { }