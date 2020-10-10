import { DatetimePipe } from './datetime.pipe';

describe('DatetimePipe', () => {
  it('create an instance', () => {
    const pipe = new DatetimePipe();
    expect(pipe).toBeTruthy();
  });
  it('Converts a unix timestamp', () => {
    const unixTimestamp = 1602347407;
    const expectedConversion = '10/10/2020 12:10';

    const pipe = new DatetimePipe();
    const result = pipe.transform(unixTimestamp);

    expect(result).toEqual(expectedConversion);

  });
  it('Returns a datetime string in MM/DD/YYYY HH:MM format', () => {

    const pipe = new DatetimePipe();
    const unixTimestamp =  1602273549;
    const expectedConversionFormat = new RegExp('(\\d{2}\\/\\d{2}\\/\\d{4} \\d{2}:\\d{2})');

    const transformOutput = pipe.transform(unixTimestamp);
    const regexMatchResult = expectedConversionFormat.test(transformOutput);


    expect(regexMatchResult).toBeTrue();
  });
});
