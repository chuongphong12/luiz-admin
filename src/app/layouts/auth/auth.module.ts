import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './../../pages/auth/register/register.component';
import { LoginComponent } from './../../pages/auth/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
