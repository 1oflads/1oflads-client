import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../core/service/AuthenticationService';

@Component({
  selector: 'lads-challenge-navigation',
  templateUrl: './challenge-navigation.component.html',
  styleUrls: ['./challenge-navigation.component.scss']
})
export class ChallengeNavigationComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
