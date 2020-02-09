import { Component, OnInit } from '@angular/core';
import {ConfigurationService} from '../../../../core/service/ConfigurationService';
import {ArticleService} from '../../../../core/service/ArticleService';
import {ArticlePreviewModel} from '../../../../core/service/models/article/ArticlePreviewModel';

@Component({
  selector: 'lads-projects-main',
  templateUrl: './projects-main.component.html',
  styleUrls: ['./projects-main.component.scss']
})
export class ProjectsMainComponent implements OnInit {
  public projects: ArticlePreviewModel[] = [];

  constructor(
    private articleService: ArticleService,
    public configurationService: ConfigurationService,
  ) { }

  ngOnInit() {
    this.articleService.getProjectsPreviews()
      .subscribe(res => this.projects = res);
  }

}
