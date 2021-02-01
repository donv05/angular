import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VillainsRoutingModule } from './villains-routing.module';
import { VillainComponent } from './villain/villain.component';
import { VillainListComponent } from './villain-list/villain-list.component';


@NgModule({
  declarations: [VillainComponent, VillainListComponent],
  imports: [
    CommonModule,
    VillainsRoutingModule
  ]
})
export class VillainsModule { }
