import { DatetimePipe } from './datetime.pipe';

describe('DatetimePipe', () => {
  it('create an instance', () => {
    const pipe = new DatetimePipe();
    expect(pipe).toBeTruthy();
  });
  it('Returns a date conversion', () => {

    const pipe = new DatetimePipe();
    const unixTimestamp =  1602273549;

    const transformOutput = pipe.transform(unixTimestamp);
    const transformResult = transformOutput.includes('ago');

    expect(transformResult).toBeTrue();
  });
});
