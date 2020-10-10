import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: number): string {
      return moment.unix(value)
        .format('DD/MM/YYYY HH:MM').toString();
  }

}
