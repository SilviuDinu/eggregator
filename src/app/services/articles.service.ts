import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ARTICLES } from '../../assets/endpoints.config.json';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Article } from '../components/blog/article';
import { EndpointsService } from './endpoints.service';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private options = { observe: 'body', responseType: 'json' };

  constructor(
    private http: HttpClient,
    private endpointService: EndpointsService
  ) { }


  getArticles(body: object, options?: object): Observable<Article[]> {
    const endpoint = this.endpointService.getEndpoint('ALL ARTICLES');
    return this.http.post<Article[]>(endpoint, body, options)
      .pipe(
        map((response: any) => response.articles)
      );
  }
}
