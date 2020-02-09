import {Component, Input, OnInit} from '@angular/core';
import {ArticlePreviewModel} from '../../../../core/service/models/article/ArticlePreviewModel';
import {DomSanitizer, SafeStyle} from '@angular/platform-browser';

@Component({
  selector: 'lads-article-single',
  templateUrl: './article-single.component.html',
  styleUrls: ['./article-single.component.scss']
})
export class ArticleSingleComponent implements OnInit {
  @Input()
  public article: ArticlePreviewModel = new ArticlePreviewModel();

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
  }

  getBackground(): SafeStyle {
    return this.sanitizer.bypassSecurityTrustStyle
    (`url("${this.article.imageUrl}")`);
  }
}
