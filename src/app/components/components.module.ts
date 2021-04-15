import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SidebarComponent, FooterComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [SidebarComponent, FooterComponent, NavbarComponent],
})
export class ComponentsModule {}
