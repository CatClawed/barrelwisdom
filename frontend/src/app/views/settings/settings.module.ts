import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SettingsRoutingModule } from './setting-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      TabsModule.forRoot(),
      SettingsRoutingModule,
      BsDropdownModule.forRoot()
    ],
    declarations: [
      SettingsComponent,
    ]
  })
  export class SettingsModule {}