import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'lads-datetime',
  templateUrl: './datetime.component.html',
})
export class DatetimeComponent implements OnInit {
  @Input()
  public id: string;

  @Input()
  public placeholder: string;

  @Input()
  public dateProperty: string;

  @Input()
  public type: string;

  @Output()
  public dateChangeEmitter = new EventEmitter<Date>();

  constructor() {
  }

  ngOnInit() {
  }
}
