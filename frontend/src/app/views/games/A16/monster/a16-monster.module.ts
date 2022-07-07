import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PipeModule } from '@app/pipes/pipes.module';
import { ErrorModule } from '@app/views/error/error.module';
import { LanguageModule } from '@app/views/language/language.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { A16MonsterRoutingModule } from './a16-monster-routing.module';
import { A16MonsterComponent } from './a16-monster.component';
import { A16MonsterlistComponent } from './a16-monsterlist.component';
import { BreadcrumbModule } from '@app/views/breadcrumb/breadcrumb.module';

@NgModule({
    imports: [
      CommonModule,
      ModalModule.forRoot(),
      ReactiveFormsModule,
      A16MonsterRoutingModule,
      MatInputModule,
      MatFormFieldModule,
      MatIconModule,
      MatButtonModule,
      LanguageModule,
      ErrorModule,
      BreadcrumbModule,
    ],
    declarations: [
        A16MonsterlistComponent,
        A16MonsterComponent,
    ]
  })
  export class A16MonsterModule {}