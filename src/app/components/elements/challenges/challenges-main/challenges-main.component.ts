import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../../../../core/service/ConfigurationService';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';
import {ChallengeService} from '../../../../core/service/ChallengeService';

@Component({
  selector: 'lads-challenges-main',
  templateUrl: './challenges-main.component.html',
  styleUrls: ['./challenges-main.component.scss']
})
export class ChallengesMainComponent implements OnInit {
  public challenges: Challenge[] = [];

  constructor(
    public configurationService: ConfigurationService,
    public challengeService: ChallengeService
  ) {
  }

  ngOnInit() {
    this.challengeService.getAllAccepted()
      .subscribe(res => this.challenges = res);
  }

}
