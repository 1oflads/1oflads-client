import {Component, OnInit} from '@angular/core';
import {ChallengeApplicationRequest} from '../../../../core/service/models/challenge/ChallengeApplicationRequest';
import {ChallengeService} from '../../../../core/service/ChallengeService';
import {ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../../../core/service/UserService';
import {GroupPreviewModel} from '../../../../core/service/models/group/GroupPreviewModel';
import {AuthenticationService} from '../../../../core/service/AuthenticationService';

@Component({
  selector: 'lads-challenge-achieve',
  templateUrl: './challenge-achieve.component.html',
  styleUrls: ['./challenge-achieve.component.scss']
})
export class ChallengeAchieveComponent implements OnInit {
  public model: ChallengeApplicationRequest = new ChallengeApplicationRequest();
  public groups: GroupPreviewModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private challengeService: ChallengeService
  ) {
  }

  ngOnInit() {
    this.userService.userGroups(this.authenticationService.getId())
      .subscribe(res => this.groups = res);
  }

  fileChanged($event: Event | { target, files }) {
    this.model.proof = $event.target.files[0];
  }

  apply() {
    this.challengeService.apply(this.route.snapshot.params.id, this.model)
      .subscribe(() => this.toastrService.success('Успешно изпращане!'));
  }
}
