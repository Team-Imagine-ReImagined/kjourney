import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';
import { HttpBackend } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private http: HttpClient,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            if(this.checkUserValid().then((res:boolean)=>{return res})){
                return true;
            }
        } else{

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
        }
    }

    private checkUserValid():Promise<boolean>{
        return this.http.get('api/IsUserValid').toPromise().then((res:any) => {
            if(res){
                if(res.Status === 200){
                    return true;
                }
            }
            return false;
        })
    }
}