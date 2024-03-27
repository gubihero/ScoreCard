import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dotify',
  standalone: true,
})
export class DotifyPipe implements PipeTransform {
  transform(name: string, ...args: unknown[]): string {
    return name
      .split('')
      .map((a) => a + '.')
      .toString();
  }
}
