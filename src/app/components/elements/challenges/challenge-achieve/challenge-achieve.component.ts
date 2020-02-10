import {Component, OnInit} from '@angular/core';
import {ChallengeApplicationRequest} from '../../../../core/service/models/challenge/ChallengeApplicationRequest';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lads-challenge-achieve',
  templateUrl: './challenge-achieve.component.html',
  styleUrls: ['./challenge-achieve.component.scss']
})
export class ChallengeAchieveComponent implements OnInit {
  public model: ChallengeApplicationRequest = new ChallengeApplicationRequest();

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private challengeService: ChallengeService
  ) {
  }

  ngOnInit() {
  }

  fileChanged($event: Event | { target, files }) {
    this.model.proof = $event.target.files[0];
  }

  apply() {
    this.challengeService.apply(this.route.snapshot.params.id, this.model)
      .subscribe(() => this.toastrService.success('Успешно изпращане!'));
  }
}
