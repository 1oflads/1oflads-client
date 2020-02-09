import {Component, Input, OnInit} from '@angular/core';
import {GroupViewModel} from '../../../../core/service/models/group/GroupViewModel';
import {GroupService} from '../../../../core/service/GroupService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'lads-band-page',
  templateUrl: './band-page.component.html',
  styleUrls: ['./band-page.component.scss']
})
export class BandPageComponent implements OnInit {
  public group: GroupViewModel = new GroupViewModel();

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.groupService.getGroupsDetails(this.route.snapshot.params.id)
      .subscribe(res => this.group = res);
  }

}
