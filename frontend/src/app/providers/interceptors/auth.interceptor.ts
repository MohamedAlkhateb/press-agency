import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthService } from '../../providers/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _auth: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('userToken');
    if (token) {
      request = request.clone({
        headers: request.headers.set('Authorization', `${token}`),
      });
      this._auth.isLogin = true;
    } else {
      this._auth.isLogin = false;
    }
    return next.handle(request);
  }
}
