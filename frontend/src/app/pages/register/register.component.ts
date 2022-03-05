import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/service/auth.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  msg = '';
  isSubmitted = false;

  registerForm: FormGroup;
  constructor(
    private _auth: AuthService,
    private formBuilder: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if (this._auth.isLogin) {
      this._router.navigateByUrl('/logout');
    }
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      userRole: ['', [Validators.required]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  register() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      this._auth.register(this.registerForm.value).subscribe((data) => {
        if (data.apiStatus == true) this._router.navigateByUrl('/login');
        else {
          this.msg = data.data;
        }
      });
    }
  }
}
