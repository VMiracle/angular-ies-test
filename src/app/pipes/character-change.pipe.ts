import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  // NOTA: Voy a usar el nombre elegido para el pipe, cambioLetras, en español,
  // pero el resto del código suelo realizarlo en inglés por una cuestión
  // de costumbre. No obstante, los comentarios los he agregado en español
  name: 'cambioLetras'
})
export class CharacterChangePipe implements PipeTransform {
  transform(value: string): string {
    // En caso de que minúsculas y mayúsculas deban ser cambiadas, se usa el
    // modificador ig en lugar del modificador g; también pueden cambiarse
    // los bloques de código comentado y no comentado
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
