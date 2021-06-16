import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthGuard {

    constructor(protected router: Router, protected authService: AuthService)
    {

    }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    //
    //     // if (state.url !== '/login' && !this.authService.isAuthenticated$()) {
    //     //     this.router.navigate(['/login']);
    //     //     return false;
    //     // }
    //     //
    //     // return true;
    // }
}
