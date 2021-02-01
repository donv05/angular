import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { InitCapsPipe } from './init-caps.pipe';


@NgModule({
  declarations: [SharedComponent, InitCapsPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
