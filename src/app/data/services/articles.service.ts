import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ARTICLES } from '../../../assets/endpoints.config.json';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { EndpointsService } from './endpoints.service';
import { ArticleAdapter } from '../adapters/article.adapter';
import { ArticlesResponse } from '../responses/articles.response';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private options = { observe: 'body', responseType: 'json' };

  constructor(
    private http: HttpClient,
    private endpointService: EndpointsService,
    private adapter: ArticleAdapter
  ) { }


  getArticles(body: object, options?: object): Observable<any> {
    const endpoint = this.endpointService.getEndpoint('ALL ARTICLES');
    return this.http.post<ArticlesResponse>(endpoint, body, options)
      .pipe(
        map(({articles}) => {
          return articles.map((item) => {
            return this.adapter.adapt(item);
          });
        })
      );
  }
}