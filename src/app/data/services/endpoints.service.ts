import { Injectable } from '@angular/core';
import { ARTICLES } from '../../../assets/endpoints.config.json';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor() { }

  getEndpoint(val: string) {
    if (!val || !val.includes('.')) {
      return '/api/' + val.toLowerCase().split(' ').join('-');
    }
    const endpoint = val.split('.')[1];
    return ARTICLES.serviceName + ARTICLES.endpoints[endpoint].path;
  }
}
