import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { SettingsRoutingModule } from './setting-routing.module';
import { SettingsComponent } from './settings.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      SettingsRoutingModule,
      MatTabsModule,
      MatMenuModule,
      MatSelectModule
    ],
    declarations: [
      SettingsComponent,
    ]
  })
  export class SettingsModule {}