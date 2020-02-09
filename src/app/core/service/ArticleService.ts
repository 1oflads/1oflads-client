import {HttpService} from './HttpService';
import {Constants} from '../constants/Constans';
import {Observable} from 'rxjs';
import {ArticlePreviewModel} from './models/article/ArticlePreviewModel';
import {ArticleRequest} from './models/article/ArticleRequest';
import {ArticleEditRequest} from './models/article/ArticleEditRequest';
import {ArticleViewModel} from './models/article/ArticleViewModel';

export class ArticleService extends HttpService {
  public getArticlesPreviews(): Observable<ArticlePreviewModel[]> {
    return this.http.get<ArticlePreviewModel[]>(Constants.API_ENDPOINT + Constants.Article.PREFIX);
  }

  public getArticlesPreviewsByProject(id: number): Observable<ArticlePreviewModel[]> {
    return this.http.get<ArticlePreviewModel[]>(Constants.API_ENDPOINT + Constants.Article.PREFIX + '/' + Constants.Article.PROJECTS + '/' + id);
  }

  public getProjectsPreviews(): Observable<ArticlePreviewModel[]> {
    return this.http.get<ArticlePreviewModel[]>(Constants.API_ENDPOINT + Constants.Article.PREFIX + '/' + Constants.Article.PROJECTS);
  }

  public getSingleArticle(id: number): Observable<ArticleViewModel> {
    return this.http.get<ArticleViewModel>(Constants.API_ENDPOINT + Constants.Article.PREFIX + '/' + id);
  }

  public create(request: ArticleRequest): Observable<ArticlePreviewModel[]> {
    return this.http.post<ArticlePreviewModel[]>(Constants.API_ENDPOINT + Constants.Article.PREFIX, request);
  }

  public edit(id: number, request: ArticleEditRequest): Observable<ArticlePreviewModel[]> {
    return this.http.patch<ArticlePreviewModel[]>(Constants.API_ENDPOINT + Constants.Article.PREFIX + '/' + id, request);
  }
}
