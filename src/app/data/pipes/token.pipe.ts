import { Pipe, PipeTransform } from '@angular/core';
import { isObject, keys } from 'lodash';
import { TokenService } from '../services/token.service';

@Pipe({
  name: 'token'
})
export class TokenPipe implements PipeTransform {

  constructor(
    private tokenService: TokenService
  ) { }

  transform(value: any, ..._args: any[]): any {
    let args = _args;

    if (isObject(value)) {
      args = [value.params];
      value = value.token;
    }

    let text = this.tokenService.getText(value);

    if (args.length) {
      const params = args[0];

      keys(params).forEach(key => {
        text = text.replace('#' + key + '#',
          this.transform(params[key])
        );
      });
    }

    return text || '';
  }

}
