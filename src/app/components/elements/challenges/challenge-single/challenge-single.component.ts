import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';
import {ChallengeService} from '../../../../core/service/ChallengeService';

@Component({
  selector: 'lads-challenge-single',
  templateUrl: './challenge-single.component.html',
  styleUrls: ['./challenge-single.component.scss']
})
export class ChallengeSingleComponent implements OnInit {
  @Input()
  public challenge: Challenge;

  constructor(
    public challengeService: ChallengeService
  ) { }

  ngOnInit() {
  }

}
