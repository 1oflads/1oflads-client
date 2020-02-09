import { Component, OnInit } from '@angular/core';
import {ArticlePreviewModel} from '../../../../core/service/models/article/ArticlePreviewModel';
import {ArticleService} from '../../../../core/service/ArticleService';

@Component({
  selector: 'lads-articles-main',
  templateUrl: './articles-main.component.html',
  styleUrls: ['./articles-main.component.scss']
})
export class ArticlesMainComponent implements OnInit {
  public articles: ArticlePreviewModel[] = [];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getArticlesPreviews()
      .subscribe(res => this.articles = res);
  }

}
