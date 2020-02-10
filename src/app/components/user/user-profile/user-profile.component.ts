import {Component, OnInit} from '@angular/core';
import {UserProfileViewModel} from '../../../core/service/models/user/UserProfileViewModel';
import {UserService} from '../../../core/service/UserService';
import {AuthenticationService} from '../../../core/service/AuthenticationService';
import {ActivatedRoute} from '@angular/router';
import {EventObject, FullCalendarOptions} from 'ngx-fullcalendar';

@Component({
  selector: 'lads-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: UserProfileViewModel = new UserProfileViewModel();
  public id = '';

  options: FullCalendarOptions;
  events: EventObject[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.options = {
      defaultDate: '2018-07-26',
      editable: true
    };

    this.events = [
      { id: 'a', title: 'My Birthday', allDay: true, start: '2020-02-20T18:00:00' },
      { id: 'b', title: 'Friends coming round', start: '2018-07-26T18:00:00', end: '2018-07-26T23:00:00' }
    ];

    this.id = this.route.snapshot.params.id;
    if (!this.id) {
      this.userService.profile()
        .subscribe(res => {
          this.user = res;
          console.log(this.user);
        });
    }
  }

  onDateClick($event) {
    console.log($event);
  }

}
