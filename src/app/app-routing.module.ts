import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path:'users', loadChildren: () => import('./users/users.module').then(m => m.UserModule)},
  {path:'villains', loadChildren: () => import('./villains/villains.module').then(m => m.VillainsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
