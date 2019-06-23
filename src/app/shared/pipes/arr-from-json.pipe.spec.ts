import { ArrFromJsonPipe } from './arr-from-json.pipe';

describe('ArrFromJsonPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrFromJsonPipe();
    expect(pipe).toBeTruthy();
  });
});
