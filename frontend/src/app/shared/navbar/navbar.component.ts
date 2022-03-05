import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../providers/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  token = localStorage.getItem('userToken');
  constructor(public _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    this._auth.me().subscribe((res) => {
      if (res.Message != 'Please Login First') {
        this._auth.user = res;
      }
    });
  }
  logOut() {
    localStorage.removeItem('userToken');
    this._auth.isLogin = false;
    this._router.navigateByUrl('/').then(() => window.location.reload());
  }
}
