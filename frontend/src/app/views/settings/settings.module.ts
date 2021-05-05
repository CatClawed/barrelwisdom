import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SettingsRoutingModule } from './setting-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TabsModule,
      SettingsRoutingModule,
      BsDropdownModule.forRoot()
    ],
    declarations: [
      SettingsComponent,
    ],
    exports: [
      SettingsComponent
    ]
  })
  export class SettingsModule {}