import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PairPipe } from './pair.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    PairPipe,
  ],
  exports: [
    PairPipe,
  ]
})
export class PipeModule {}