import { CanActivate, ActivatedRoute, RouterStateSnapshot, Router, ActivatedRouteSnapshot, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authServ: AuthService, private router: Router) { }
    /** 
     * When we trigger the canActivate guard, the params route and state gets passed to it
    */
    public canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any {
        return this.authServ.isAuthenticated().then(
            (authenticated: boolean) => {
                if (authenticated) {
                    return true;
                } else {
                    this.router.navigate(["/"]);
                }
            }
        )
    }

    public canActivateChild(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): any {
        return this.canActivate(route, state);
    }
}