import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VillainListComponent } from './villain-list/villain-list.component';
import { VillainComponent } from './villain/villain.component';


const routes: Routes = [
  // {path: 'villains', component: VillainListComponent},
  {path: '', component: VillainListComponent},
  {path: 'villains/id', component: VillainComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VillainsRoutingModule { }
