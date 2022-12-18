import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
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