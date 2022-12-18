import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { SettingsRoutingModule } from './setting-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
      CommonModule,
      ReactiveFormsModule,
      SettingsRoutingModule,
      MatTabsModule,
      MatMenuModule,
    ],
    declarations: [
      SettingsComponent,
    ]
  })
  export class SettingsModule {}