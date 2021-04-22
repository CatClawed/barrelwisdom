import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PairPipe } from './pair.pipe';
import { GetCeil } from './ceil.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    PairPipe,
    GetCeil
  ],
  exports: [
    PairPipe,
    GetCeil
  ]
})
export class PipeModule {}