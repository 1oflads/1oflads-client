import {Component, OnInit} from '@angular/core';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {ChallengeApplicationViewModel} from '../../../../core/service/models/challenge/ChallengeApplicationViewModel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lads-challenge-requests-main',
  templateUrl: './challenge-requests-main.component.html',
  styleUrls: ['./challenge-requests-main.component.scss']
})
export class ChallengeRequestsMainComponent implements OnInit {
  public challenges: ChallengeApplicationViewModel[] = [];

  constructor(
    private challengeService: ChallengeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    console.log(this.challengeService);
    this.challengeService.getAllWaitingChallenges()
      .subscribe(res => this.challenges = res);
  }

  accept(challengeId) {
    this.challengeService.acceptChallenge(challengeId)
      .subscribe(() => {
        this.toastrService.success('Успешно одобрено предизвикателство.');
        this.challenges = this.challenges.filter(c => c.id !== challengeId);
      });
  }

  reject(challengeId) {
    this.challengeService.rejectChallenge(challengeId)
      .subscribe(() => {
        this.toastrService.success('Успешно отказано предизвикателство.');
        this.challenges = this.challenges.filter(c => c.id !== challengeId);
      });
  }

}
