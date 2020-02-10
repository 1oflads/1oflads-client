import { Component, OnInit } from '@angular/core';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';
import {ChallengeService} from '../../../../core/service/ChallengeService';

@Component({
  selector: 'lads-challenge-create',
  templateUrl: './challenge-create.component.html',
  styleUrls: ['./challenge-create.component.scss']
})
export class ChallengeCreateComponent implements OnInit {
  public model: Challenge = new Challenge();

  constructor(
    private challengeService: ChallengeService
  ) { }

  ngOnInit() {
  }

  create() {
    this.challengeService.create(this.model)
      .subscribe(res => console.log(res));
  }

  togglePermanent() {

  }
}
