import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ModalModule, ModalDirective } from 'ngx-bootstrap/modal';

import { ModalComponent } from './modal.component';


@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
    ],
    declarations: [
        ModalComponent
    ],
    exports: [
        ModalComponent
    ],
  })
  export class ModalsModule {}