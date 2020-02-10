import {Component, OnInit} from '@angular/core';
import {UserRateViewModel} from '../../../core/service/models/user/UserRateViewModel';
import {UserService} from '../../../core/service/UserService';

@Component({
  selector: 'lads-users-rating',
  templateUrl: './users-rating.component.html',
  styleUrls: ['./users-rating.component.scss']
})
export class UsersRatingComponent implements OnInit {
  public topUsers: UserRateViewModel[] = [];
  public users: UserRateViewModel[] = [];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.rating()
      .subscribe(res => {
        this.topUsers = res.splice(0, 3);
        this.users = res;
        console.log(this.users);
      });
  }

}
