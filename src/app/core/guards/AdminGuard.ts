import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AuthenticationService} from '../service/AuthenticationService';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AdminGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastrService: ToastrService
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authenticationService.isAdmin()) {
      return true;
    }

    this.toastrService.info('Достъпът е разрешен само за администратори.');
    this.router.navigate(['/authentication/login']);
  }
}
