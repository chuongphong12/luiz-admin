import { AuthService } from './../../core/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'ni-tv-2 text-primary',
    class: '',
  },
  { path: '/users', title: 'Users', icon: 'ni-planet text-blue', class: '' },
  {
    path: '/products',
    title: 'Products',
    icon: 'ni-pin-3 text-orange',
    class: '',
  },
  // {
  //   path: '/user-profile',
  //   title: 'User profile',
  //   icon: 'ni-single-02 text-yellow',
  //   class: '',
  // },
  // {
  //   path: '/tables',
  //   title: 'Tables',
  //   icon: 'ni-bullet-list-67 text-red',
  //   class: '',
  // },
  // { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
  // {
  //   path: '/register',
  //   title: 'Register',
  //   icon: 'ni-circle-08 text-pink',
  //   class: '',
  // },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;
  public logo: any = 'assets/img/logo/LUIZ_FITNESS_LOGO_FULL.png';

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  async logout() {
    this.auth.logout();
    await this.router.navigate(['login']);
  }
}
