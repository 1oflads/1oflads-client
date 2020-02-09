import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../../../core/service/ConfigurationService';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {UserRateViewModel} from '../../../../core/service/models/user/UserRateViewModel';
import {UserService} from '../../../../core/service/UserService';

@Component({
  selector: 'lads-challenges-main',
  templateUrl: './challenges-main.component.html',
  styleUrls: ['./challenges-main.component.scss']
})
export class ChallengesMainComponent implements OnInit {
  public challenges: Challenge[] = [];
  public topUsers: UserRateViewModel[] = [];

  constructor(
    public configurationService: ConfigurationService,
    public challengeService: ChallengeService,
    public userService: UserService
  ) {
  }

  ngOnInit() {
    this.challengeService.getAllAccepted()
      .subscribe(res => {
        this.challenges = res;
        this.userService.rating()
          .subscribe(users => {
            this.topUsers = users.splice(0, 3);
          });
      });
  }

}
