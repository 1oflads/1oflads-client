import {Component, Input, OnInit} from '@angular/core';
import {ChallengeApplicationViewModel} from '../../../../core/service/models/challenge/ChallengeApplicationViewModel';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {ToastrService} from 'ngx-toastr';
import {RejectApplicationRequest} from '../../../../core/service/models/challenge/RejectApplicationRequest';

@Component({
  selector: 'lads-challenge-application-single',
  templateUrl: './challenge-application-single.component.html',
  styleUrls: ['./challenge-application-single.component.scss', '../challenge-single/challenge-single.component.scss']
})
export class ChallengeApplicationSingleComponent implements OnInit {
  public model: RejectApplicationRequest = new RejectApplicationRequest();

  @Input()
  application: ChallengeApplicationViewModel = new ChallengeApplicationViewModel();

  @Input()
  accept: (id: number) => void;

  @Input()
  reject: (id: number, model: RejectApplicationRequest) => void;

  constructor(
    private challengeService: ChallengeService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit() {
  }
}
