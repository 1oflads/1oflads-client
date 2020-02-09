import {Component, Input, OnInit} from '@angular/core';
import {UserRateViewModel} from '../../../core/service/models/user/UserRateViewModel';

@Component({
  selector: 'lads-user-top-three',
  templateUrl: './user-top-three.component.html',
  styleUrls: ['./user-top-three.component.scss']
})
export class UserTopThreeComponent implements OnInit {
  @Input()
  public topUsers: UserRateViewModel[] = [];

  constructor() { }

  ngOnInit() {
  }

}
