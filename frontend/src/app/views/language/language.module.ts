import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LanguageComponent } from './language.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatSelectModule,
    ],
    declarations: [
        LanguageComponent
    ],
    exports: [
        LanguageComponent
    ],
  })
  export class LanguageModule {}