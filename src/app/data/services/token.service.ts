import { Injectable } from '@angular/core';
import { get } from 'lodash';
import tokens from '@assets/tokens.json';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public getText(value: string) {
    if (!value || !tokens) {
      return '';
    }
    return get(tokens, value, value);
  }
}
