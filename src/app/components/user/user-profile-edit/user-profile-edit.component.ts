import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/service/UserService';
import {UserProfileViewModel} from '../../../core/service/models/user/UserProfileViewModel';
import {UserProfileEditRequest} from '../../../core/service/models/user/UserProfileEditRequest';
import {AuthenticationService} from '../../../core/service/AuthenticationService';
import {ToastrService} from 'ngx-toastr';
import {RoleInfoViewModel} from '../../../core/service/models/user/RoleInfoViewModel';
import {ThemeService} from '../../../core/service/ThemeService';
import {Router} from '@angular/router';

@Component({
  selector: 'lads-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  public model: UserProfileEditRequest = new UserProfileEditRequest();
  public roles: RoleInfoViewModel[] = [];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private themeService: ThemeService,
    private toastrService: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.userService.profile()
      .subscribe(res => {
        this.model = new UserProfileEditRequest(res.name, '', '', res.description, res.role.id);
      });

    this.userService.roles()
      .subscribe(res => this.roles = res);
  }

  edit() {
    this.userService.edit(this.model)
      .subscribe(res => {
        this.authenticationService.setRole(res.role.name);
        this.themeService.applyTheme(res.role.theme);
        this.toastrService.success('Успешна редакция!');
        this.router.navigate(['/user/profile']);
      });
  }

  fileChanged($event: Event | { target, files }) {
    this.model.avatar = $event.target.files[0];
  }
}
