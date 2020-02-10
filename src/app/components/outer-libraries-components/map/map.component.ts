import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lads-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  @Input()
  public title = 'Contacts';

  @Input()
  public lat = 42.6709500000;

  @Input()
  public lng = 23.350360000;

  @Input()
  public label = {
    text: 'I Know Ltd.',
    color: 'black',
    fontSize: '16px',
    fontWeight: '500'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
