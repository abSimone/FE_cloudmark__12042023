import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized',
  pure: false,
})
export class CapitalizedPipe implements PipeTransform {
  transform(value: string): string {
    // dividi la stringa in parole
    const words = value.split(' ');

    // applica la trasformazione a ogni parola
    const capitalizedWords = words.map((word) => {
      // assicurati che la parola non sia vuota
      if (word.trim() !== '') {
        // converti la prima lettera in maiuscolo e il resto in minuscolo
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      else {
        return '';
      }
    });

    // unisci le parole trasformate in una singola stringa
    return capitalizedWords.join(' ');
  }
}
