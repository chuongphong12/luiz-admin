import { ProductDetailComponent } from './../../pages/products/product-detail/product-detail.component';
import { UserDetailComponent } from './../../pages/users/user-detail/user-detail.component';
import { ProductsComponent } from './../../pages/products/products.component';
import { UsersComponent } from './../../pages/users/users.component';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'users',
    component: UsersComponent,
  },
  { path: 'users/:id', component: UserDetailComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'products/:id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
