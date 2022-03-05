import { AuthService } from '../../providers/service/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  msg = '';
  isSubmitted = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(200),
    ]),
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    if (this._auth.isLogin) {
      this._router.navigateByUrl('/logout');
    }
  }

  login() {
    this.isSubmitted = true;
    this.msg = '';
    if (this.loginForm.valid) {
      this._auth.login(this.loginForm.value).subscribe((data) => {
        if (data.apiStatus == false) {
          this.msg = 'Invalid email or password.';
        } else {
          localStorage.setItem('userToken', `bearer ${data.data.token}`);
          if (data.data.userData.userRole == 'editor') {
            this._router
              .navigateByUrl('/editor')
              .then(() => window.location.reload());
          }
        }
      });
    }
  }
}
