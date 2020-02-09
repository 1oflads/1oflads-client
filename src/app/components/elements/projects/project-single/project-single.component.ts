import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';
import {ArticlePreviewModel} from '../../../../core/service/models/article/ArticlePreviewModel';

@Component({
  selector: 'lads-project-single',
  templateUrl: './project-single.component.html',
  styleUrls: ['./project-single.component.scss']
})
export class ProjectSingleComponent implements OnInit {
  @Input()
  public project: ArticlePreviewModel = new ArticlePreviewModel();

  constructor(
    private sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
  }

  getBackground(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle
    (`url("${this.project.imageUrl}")`);
  }
}
