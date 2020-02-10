import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/service/UserService';
import {ChallengeApplicationViewModel} from '../../../core/service/models/challenge/ChallengeApplicationViewModel';
import {AuthenticationService} from '../../../core/service/AuthenticationService';

@Component({
  selector: 'lads-user-challenges-main',
  templateUrl: './user-challenges-main.component.html',
  styleUrls: ['./user-challenges-main.component.scss']
})
export class UserChallengesMainComponent implements OnInit {
  public applications: ChallengeApplicationViewModel[] = [];

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  getApplications(status) {
    this.userService.challenges(this.authenticationService.getId(), status)
      .subscribe(res => {
        this.applications = res;
        console.log(this.applications);
      });
  }

}
