import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SettingsRoutingModule } from './setting-routing.module';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      TabsModule,
      SettingsRoutingModule
    ],
    declarations: [
      SettingsComponent,
    ],
    exports: [
      SettingsComponent
    ]
  })
  export class SettingsModule {}