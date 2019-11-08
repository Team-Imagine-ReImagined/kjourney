// src/app/auth/token.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthenticationService } from '../_services/authentication.service';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public auth: AuthenticationService) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with basic auth credentials if available
    const currentUser = this.auth.currentUserValue;
    if (currentUser) {
        request = request.clone({
            setHeaders: { 
                Authorization: `Basic ${currentUser.authenticationdata}`
            }
        });
    } else{
        request = request.clone({ 
            setHeaders: { 
                Cheese: `${JSON.stringify(currentUser)} `
            }
        });
    }

    return next.handle(request);
    }
}




//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
//     const currentUser = this.auth.currentUserValue;
//     if(currentUser && currentUser.authdata){
//     request = request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${currentUser.authdata}`
//       }
//     }); 
//     return next.handle(request);
//   }
    
// }

 