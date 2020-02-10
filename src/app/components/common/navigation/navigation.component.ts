import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../core/service/AuthenticationService';

@Component({
  selector: 'lads-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    public authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
