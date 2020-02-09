import { Component, OnInit } from '@angular/core';
import {GroupPreviewModel} from '../../../../core/service/models/group/GroupPreviewModel';
import {GroupService} from '../../../../core/service/GroupService';

@Component({
  selector: 'lads-bands-main',
  templateUrl: './bands-main.component.html',
  styleUrls: ['./bands-main.component.scss']
})
export class BandsMainComponent implements OnInit {
  public groups: GroupPreviewModel[] = [];

  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {
    this.groupService.getGroupsPreviews()
      .subscribe(res => this.groups = res);
  }

}
