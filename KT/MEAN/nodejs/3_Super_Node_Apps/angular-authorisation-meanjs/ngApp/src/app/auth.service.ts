import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _nodeURL_register = "http://localhost:3000/inside/register"
  private _nodeURL_login = "http://localhost:3000/inside/login"
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._nodeURL_register, user);
  }
  loginUser(user) {
    return this.http.post<any>(this._nodeURL_login, user);
  }
}