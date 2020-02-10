import {Component, OnInit} from '@angular/core';
import {UserRegisterRequest} from '../../../core/service/models/user/UserRegisterRequest';
import {UserService} from '../../../core/service/UserService';
import {AuthenticationService} from '../../../core/service/AuthenticationService';
import {UserLoginRequest} from '../../../core/service/models/authentication/UserLoginRequest';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lads-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public model: UserRegisterRequest = new UserRegisterRequest();

  constructor(
    private userService: UserService,
    private router: Router,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.model)
      .subscribe(() => {
        this.toastrService.success('Успешна регистрация');
        this.router.navigate(['/authentication/login']);
      });
  }
}
