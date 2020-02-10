import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../core/service/UserService';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {GroupPreviewModel} from '../../../../core/service/models/group/GroupPreviewModel';
import {AuthenticationService} from '../../../../core/service/AuthenticationService';

@Component({
  selector: 'lads-challenges-groups',
  templateUrl: './challenges-groups.component.html',
  styleUrls: ['./challenges-groups.component.scss']
})
export class ChallengesGroupsComponent implements OnInit {
  private groups: GroupPreviewModel[] = [];
  private polls = [];


  constructor(
    private userService: UserService,
    private challengeService: ChallengeService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.userService.userGroups(this.authenticationService.getId())
      .subscribe(res => {
        this.groups = res;
        console.log(this.groups);
      });

    this.challengeService.getGroupPollResult(1, 7)
      .subscribe(res => {
        this.polls = res;
        console.log(this.polls);
      });
  }
}
