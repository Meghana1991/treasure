import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authServ: AuthService) { }
  // req is the request coming to the interceptor and
  // next is for pasing on the request for further action
  
  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authServ.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}