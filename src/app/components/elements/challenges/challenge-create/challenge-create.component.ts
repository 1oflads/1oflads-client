import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Challenge} from '../../../../core/service/models/challenge/Challenge';
import {ChallengeService} from '../../../../core/service/ChallengeService';

@Component({
  selector: 'lads-challenge-create',
  templateUrl: './challenge-create.component.html',
  styleUrls: ['./challenge-create.component.scss']
})
export class ChallengeCreateComponent implements OnInit {
  public model: Challenge = new Challenge();

  @ViewChild('startsOn', {read: null, static: true})
  private startsOn: ElementRef;

  @ViewChild('endsOn', {read: null, static: true})
  private endsOn: ElementRef;

  constructor(
    private challengeService: ChallengeService
  ) { }

  ngOnInit() {
    console.log(this.model);
  }

  create() {
    this.challengeService.create(this.model)
      .subscribe(res => console.log(res));
  }

  togglePermanent() {
    if (this.startsOn.nativeElement.classList.contains('hidden')) {
      this.startsOn.nativeElement.classList.remove('hidden');
      this.endsOn.nativeElement.classList.remove('hidden');
    } else {
      this.startsOn.nativeElement.classList.add('hidden');
      this.endsOn.nativeElement.classList.add('hidden');
      this.model.startsOn = new Date();
      this.model.endsOn = null;
    }
    console.log(this.model);
  }
}
