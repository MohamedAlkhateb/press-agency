import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editior',
  templateUrl: './editior.component.html',
  styleUrls: ['./editior.component.css'],
})
export class EditiorComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {
    if (!this._auth.isLogin) {
      this._router.navigateByUrl('/login');
    }
  }
}
