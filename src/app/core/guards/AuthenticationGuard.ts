import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../service/AuthenticationService';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authenticationService.getToken() !== null) {
      return true;
    }

    this.router.navigate(['authentication/login']);
  }
}
