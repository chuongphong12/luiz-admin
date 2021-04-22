import { ProductsComponent } from './../../pages/products/products.component';
import { UsersComponent } from './../../pages/users/users.component';
import { DashboardComponent } from './../../pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [DashboardComponent, UsersComponent, ProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
  ],
})
export class AdminModule {}
