import { Component, OnInit } from '@angular/core';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {ConfigurationService} from '../../../../core/service/ConfigurationService';

@Component({
  selector: 'lads-challenges-all',
  templateUrl: './challenges-all.component.html',
  styleUrls: ['./challenges-all.component.scss']
})
export class ChallengesAllComponent implements OnInit {
  public challenges: Challenge[];

  constructor(
    private challengeService: ChallengeService,
    private configurationService: ConfigurationService
  ) { }

  ngOnInit() {
    this.challengeService.getAllAccepted()
      .subscribe(res => this.challenges = res);
  }

}
