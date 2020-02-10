import {Component, OnInit} from '@angular/core';
import {UserProfileViewModel} from '../../../core/service/models/user/UserProfileViewModel';
import {UserService} from '../../../core/service/UserService';
import {AuthenticationService} from '../../../core/service/AuthenticationService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'lads-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private user: UserProfileViewModel = new UserProfileViewModel();
  private id = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    if (!this.id) {
      this.userService.profile()
        .subscribe(res => {
          this.user = res;
        });
    }
  }

}
