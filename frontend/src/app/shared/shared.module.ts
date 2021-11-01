import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputModule } from './input/input.module';

@NgModule({
  imports: [
    CommonModule,
    InputModule
  ],
  declarations: [],
  exports:[InputModule]
})
export class SharedModule { }
