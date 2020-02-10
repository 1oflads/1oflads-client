import {Component, Input, OnInit} from '@angular/core';
import {ChallengeApplicationViewModel} from '../../../core/service/models/challenge/ChallengeApplicationViewModel';

@Component({
  selector: 'lads-user-challenge-single',
  templateUrl: './user-challenge-single.component.html',
  styleUrls: ['./user-challenge-single.component.scss', '../../elements/challenges/challenge-single/challenge-single.component.scss']
})
export class UserChallengeSingleComponent implements OnInit {
  @Input()
  public challenge: ChallengeApplicationViewModel = new ChallengeApplicationViewModel();

  constructor() { }

  ngOnInit() {
  }

}
