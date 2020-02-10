import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';
import {RejectApplicationRequest} from '../../../../core/service/models/challenge/RejectApplicationRequest';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lads-challenge-request-single',
  templateUrl: './challenge-request-single.component.html',
  styleUrls: ['./challenge-request-single.component.scss', '../challenge-single/challenge-single.component.scss']
})
export class ChallengeRequestSingleComponent implements OnInit {
  @Input()
  challenge: Challenge = new Challenge();

  @Input()
  accept: (id: number) => void;

  @Input()
  reject: (id: number) => void;

  constructor(
    private challengeService: ChallengeService,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
  }

}
