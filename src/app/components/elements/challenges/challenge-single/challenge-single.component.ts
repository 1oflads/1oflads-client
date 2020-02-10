import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';

@Component({
  selector: 'lads-challenge-single',
  templateUrl: './challenge-single.component.html',
  styleUrls: ['./challenge-single.component.scss']
})
export class ChallengeSingleComponent implements OnInit {
  @Input()
  public challenge: Challenge;

  constructor() { }

  ngOnInit() {
  }

}
