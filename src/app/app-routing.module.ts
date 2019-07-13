import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path:'',
    component: InfoComponent
  },
  {
    path:'home',
    component: InfoComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
