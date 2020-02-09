import {Component, Input, OnInit} from '@angular/core';
import {GroupPreviewModel} from '../../../../core/service/models/group/GroupPreviewModel';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'lads-band-card',
  templateUrl: './band-card.component.html',
  styleUrls: ['./band-card.component.scss']
})
export class BandCardComponent implements OnInit {
  @Input()
  public group: GroupPreviewModel = new GroupPreviewModel();

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  getBackground(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle
    (`url("${this.group.avatarUrl}")`);
  }

}
