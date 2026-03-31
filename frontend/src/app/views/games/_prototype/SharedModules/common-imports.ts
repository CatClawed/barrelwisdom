import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';

export const CommonImports = [RouterLink]
export const MaterialFormImports = [MatSelectModule, MatInputModule,
    MatFormFieldModule, ReactiveFormsModule, AsyncPipe]