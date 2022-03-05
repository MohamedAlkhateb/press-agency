import { User } from '../../models/user';
import { Post } from '../../models/post';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogin: boolean = false;
  public user: User | null;
  public post: Post | null;
  commonApiUrl = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  register(data: User): Observable<any> {
    return this._http.post(`${this.commonApiUrl}api/user/register`, data);
  }

  login(data: User): Observable<any> {
    return this._http.post(`${this.commonApiUrl}api/user/login`, data);
  }
  logout(data: User): Observable<any> {
    return this._http.post(`${this.commonApiUrl}api/user/logout`, data);
  }
  addPost(data: Post): Observable<any> {
    return this._http.post(`${this.commonApiUrl}api/user/editor/addPost`, data);
  }
  showPosts(): Observable<any> {
    return this._http.get(`${this.commonApiUrl}api/user/editor/showAllPosts`);
  }
  me(): Observable<any> {
    return this._http.get(`${this.commonApiUrl}api/user/info`);
  }
}
