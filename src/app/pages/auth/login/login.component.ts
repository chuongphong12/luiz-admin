import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  submitLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.authService
        .login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe((data) => {
          if (data) {
            this.submitted = false;
            this.router.navigate([this.returnUrl]);
          }
        });
    }
  }
}
