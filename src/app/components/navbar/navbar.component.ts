import { AuthService } from './../../core/services/auth.service';
import { UserService } from './../../core/services/user.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {
  Location,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public focus: any;
  public listTitles: any[];
  public location: Location;

  current: string;

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private userService: UserService,
    private auth: AuthService
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter((listTitle) => listTitle);
    this.currentUser();
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }

    for (let item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  currentUser() {
    this.userService.getCurrent().subscribe((val) => {
      this.current = val.user.firstName;
    });
  }

  async logout() {
    this.auth.logout();
    await this.router.navigate(['login']);
  }
}
