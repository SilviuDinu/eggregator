import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { EndpointsService } from './endpoints.service';
import { ArticleAdapter } from '../adapters/article.adapter';
import { ArticlesResponse } from '../responses/articles.response';
import { Article } from '../models/article.model';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private headers = new Headers();

  constructor(
    private http: HttpClient,
    private endpointService: EndpointsService,
    private adapter: ArticleAdapter
  ) { }


  getArticles(endpoint: string, options?: object): Observable<Article[]> {
    return this.http.get<ArticlesResponse>(this.endpointService.getEndpoint(endpoint), options)
      .pipe(
        map(({ articles }) => {
          return articles.map((item) => {
            return this.adapter.adapt(item);
          });
        })
      );
  }
}
