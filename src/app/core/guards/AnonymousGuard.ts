import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {AuthenticationService} from '../service/AuthenticationService';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class AnonymousGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastrService: ToastrService
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean {
    if (this.authenticationService.getToken() === null) {
      return true;
    }

    this.router.navigate(['/']);
    this.toastrService.info('Вече сте влезли в сайта.');
  }
}
