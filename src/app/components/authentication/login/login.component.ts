import {Component, OnInit} from '@angular/core';
import {UserLoginRequest} from '../../../core/service/models/authentication/UserLoginRequest';
import {AuthenticationService} from '../../../core/service/AuthenticationService';
import {UserLoginResponse} from '../../../core/service/models/authentication/UserLoginResponse';

@Component({
  selector: 'lads-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: UserLoginRequest  = new UserLoginRequest();

  constructor(
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.model)
      .subscribe((res: UserLoginResponse) => this.authenticationService.saveLoginData(res.accessToken));
  }
}
