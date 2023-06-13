import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyToDash',
})
export class EmptyToDashPipe implements PipeTransform {
  transform(value: string): string {
    if (value.trim() === '') {
      return '-';
    } else {
      return value;
    }
  }
}
