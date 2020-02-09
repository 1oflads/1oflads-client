import {Component, OnInit} from '@angular/core';
import {ArticleViewModel} from '../../../../core/service/models/article/ArticleViewModel';
import {ArticleService} from '../../../../core/service/ArticleService';
import {ArticlePreviewModel} from '../../../../core/service/models/article/ArticlePreviewModel';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'lads-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  public project: ArticleViewModel = new ArticleViewModel();
  public articles: ArticlePreviewModel[] = [];
  private projectId = null;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.projectId = this.route.snapshot.params.id;

    this.articleService.getSingleArticle(this.projectId)
      .subscribe(res => this.project = res);

    this.articleService.getArticlesPreviewsByProject(this.projectId)
      .subscribe(res => this.articles = res);
  }

}
