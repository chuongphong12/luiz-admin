import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  public isCollapsed = true;

  logo: any = 'assets/img/logo/LUIZ_FITNESS_LOGO_FULL.png';
  constructor(private router: Router) {}

  ngOnInit() {
    var html = document.getElementsByTagName('html')[0];
    html.classList.add('auth-layout');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('bg-default');
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

  ngOnDestroy() {
    var html = document.getElementsByTagName('html')[0];
    html.classList.remove('auth-layout');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('bg-default');
  }
}
