import { AsyncPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '@app/views/breadcrumb/breadcrumb.component';
import { ErrorComponent } from '@app/views/error/error.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

export const CommonImports = [ErrorComponent, BreadcrumbComponent, RouterLink]
export const MaterialFormImports = [MatIconModule, MatSelectModule, MatInputModule,
    MatFormFieldModule, ReactiveFormsModule, AsyncPipe]

@NgModule({
    imports: [
        ModalModule.forRoot()
    ],
    exports: [
        ModalModule,
    ]
})
export class ModalBandaidModule { }

@NgModule({
    imports: [
        PopoverModule.forRoot()
    ],
    exports: [
        PopoverModule,
    ]
})
export class PopoverBandaidModule { }