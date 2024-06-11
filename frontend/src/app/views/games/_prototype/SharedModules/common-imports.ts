import { AsyncPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '@app/views/_components/breadcrumb/breadcrumb.component';
import { ErrorComponent } from '@app/views/_components/error/error.component';

export const CommonImports = [ErrorComponent, BreadcrumbComponent, RouterLink]
export const MaterialFormImports = [MatIconModule, MatSelectModule, MatInputModule,
    MatFormFieldModule, ReactiveFormsModule, AsyncPipe]