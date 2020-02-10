import {Component, OnInit} from '@angular/core';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {ChallengeApplicationViewModel} from '../../../../core/service/models/challenge/ChallengeApplicationViewModel';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'lads-challenge-applications-main',
  templateUrl: './challenge-applications-main.component.html',
  styleUrls: ['./challenge-applications-main.component.scss']
})
export class ChallengeApplicationsMainComponent implements OnInit {
  public applications: ChallengeApplicationViewModel[] = [];

  constructor(
    private challengeService: ChallengeService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit() {
    this.challengeService.getAllWaitingApplications()
      .subscribe(res => {
        this.applications = res;
        console.log(this.applications);
      });
  }

  accept(applicationId) {
    this.challengeService.acceptApplication(applicationId)
      .subscribe(() => {
        this.applications = this.applications.filter(a => a.id !== applicationId);
        this.toastrService.success('Успешно прието предизвикателство');
      });
  }

  reject(applicationId, model) {
    this.challengeService.rejectApplication(applicationId, model)
      .subscribe(res => {
        this.applications = this.applications.filter(a => a.id !== applicationId);
        this.toastrService.success('Успешно отказано предизвикателство');
      });

  }
}
