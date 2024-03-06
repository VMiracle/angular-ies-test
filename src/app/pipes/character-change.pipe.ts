import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  // NOTA: Voy a usar el nombre elegido para el pipe, cambioLetras, en español,
  //  pero el resto del código y comentarios los dejaré en inglés
  name: 'cambioLetras'
})
export class CharacterChangePipe implements PipeTransform {
  transform(value: string): string {
    // In case both lowercase AND uppercase letters should be changed, use the
    // ig modifier instead of just the g modifier or just swap the commented
    // and uncommented blocks
    /*
    return value.replace(/a/ig, '4')
      .replace(/e/ig, '3')
      .replace(/i/ig, '1')
      .replace(/o/ig, '0')
      .replace(/u/ig, '9')
    */
    return value.replace(/a/g, '4')
      .replace(/e/g, '3')
      .replace(/i/g, '1')
      .replace(/o/g, '0')
      .replace(/u/g, '9')
  }
}
