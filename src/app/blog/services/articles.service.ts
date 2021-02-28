import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ARTICLES } from '../../../assets/endpoints.config.json';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Article {
  heroesUrl: string;
  textfile: string;
  date: any;
}
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private http: HttpClient
  ) { }

  private endpoint = ARTICLES.serviceName + ARTICLES.endpoints.ALL.path;
  private options = { observe: 'body', responseType: 'json' };

  getArticles(options?: object) {
    // const options = {this.options, ...options};
    return this.http.get<Article>(this.endpoint);
  }
}
