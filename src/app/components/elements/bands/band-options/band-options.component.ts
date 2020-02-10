import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../../core/service/UserService';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {AuthenticationService} from '../../../../core/service/AuthenticationService';
import {GroupPreviewModel} from '../../../../core/service/models/group/GroupPreviewModel';
import {ChallengeApplicationViewModel} from '../../../../core/service/models/challenge/ChallengeApplicationViewModel';

@Component({
  selector: 'lads-band-options',
  templateUrl: './band-options.component.html',
  styleUrls: ['./band-options.component.scss']
})
export class BandOptionsComponent implements OnInit {
  private groups: GroupPreviewModel[] = [];
  private viewedChallenges: ChallengeApplicationViewModel[] = [];
  private polls = [];
  public groupId = null;

  @ViewChild('challenges', {static: true})
  private challenges: ElementRef;

  @ViewChild('calendar', {static: true})
  private calendar: ElementRef;

  constructor(
    private userService: UserService,
    private challengeService: ChallengeService,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.userService.userGroups(this.authenticationService.getId())
      .subscribe(res => {
        this.groups = res;
      });

    this.challengeService.getGroupPollResult(1, 7)
      .subscribe(res => {
        this.polls = res;
      });
  }

  renderOptions(groupId, $event) {
    const action = $event.target.value;
    if (action === 'challenge') {
      console.log('kur');
      this.challenges.nativeElement.setAttribute('style', 'display: block');
      this.calendar.nativeElement.setAttribute('style', 'display: none');
    } else {
      console.log('hui');
      this.challenges.nativeElement.setAttribute('style', 'display: none');
      this.calendar.nativeElement.setAttribute('style', 'display: block');
    }
  }

  getChallenges(status: number) {
    this.challengeService.challenges(this.groupId, status)
      .subscribe(res => {
        this.viewedChallenges = res;
        console.log(this.viewedChallenges);
      });
  }
}
