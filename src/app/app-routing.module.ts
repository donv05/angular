import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UserModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'villains', loadChildren: () => import('./villains/villains.module').then(m => m.VillainsModule) },
  { path: 'error', loadChildren: () => import('./errors/errors.module').then(m => m.ErrorsModule)},
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', redirectTo: '/error', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
