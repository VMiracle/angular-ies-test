import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms'

export class CustomValidators {
  public static containsClosingBlankspace(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Verifica espacio al final de la cadena 
      const containsClosingBlankspaceRegex = /[ ]$/g
      const allowed = !containsClosingBlankspaceRegex.test(control.value)

      return allowed ? null : { 'noBlankspace': { value: control.value } }
    }
  }
}
