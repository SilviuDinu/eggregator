import { TokenService } from '../services/token.service';
import { TokenPipe } from './token.pipe';

describe('TokenPipe', () => {
  it('create an instance', () => {
    const pipe = new TokenPipe(new TokenService());
    expect(pipe).toBeTruthy();
  });
});
