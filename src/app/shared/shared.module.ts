import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { BusyComponent } from './busy/busy.component';



@NgModule({
  declarations: [NotfoundComponent, BusyComponent],
  exports: [
    BusyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
