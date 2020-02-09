import { Component, OnInit } from '@angular/core';
import {ArticleViewModel} from '../../../../core/service/models/article/ArticleViewModel';
import {ArticleService} from '../../../../core/service/ArticleService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'lads-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  public article: ArticleViewModel = new ArticleViewModel();

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.articleService.getSingleArticle(this.route.snapshot.params.id)
      .subscribe(res => {
        this.article = res;
        console.log(this.article);
      });
  }

}
