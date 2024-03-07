import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Subscription } from 'rxjs'
import { MatChipInputEvent } from '@angular/material/chips'
import { COMMA, ENTER } from '@angular/cdk/keycodes'
import { CustomValidators } from 'src/app/validators/custom-validators.validators'
import { MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.css']
})
export class UserFormComponent implements OnInit, OnDestroy {
  public form?: FormGroup
  public civilStatuses: Array<any> = []
  public readingTrackingSubscription?: Subscription
  readonly separatorKeysCodes = [ENTER, COMMA]

  constructor(public formBuilder: FormBuilder, private snackBar: MatSnackBar) {}

  public ngOnInit(): void {
    this.retrieveCivilStatus()

    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required, CustomValidators.containsClosingBlankspace()]],
      apellidos: ['', [Validators.required, CustomValidators.containsClosingBlankspace()]],
      fumas: [null, [Validators.required]],
      actualmentePracticasLectura: [null, [Validators.required]],
      librosLeidosUltimosTresMeses: this.formBuilder.array([], [Validators.required]),
      estadoCivil: [null, []]
    })

    // Ligar a través de una suscripción el campo de libros leídos al campo
    // de si el usuario practica lectura
    this.readingTrackingSubscription = this.form.controls['actualmentePracticasLectura'].valueChanges.subscribe(value => {
      if (this.form === undefined || this.form === null)
        return

      if (value === true) {
        this.form.get('librosLeidosUltimosTresMeses')?.enable()    
      } else {
        this.form.get('librosLeidosUltimosTresMeses')?.disable()
      }
    })

    // El valor por defecto del campo de practica de lectura es nulo, así que
    // por defecto 
    this.form.get('librosLeidosUltimosTresMeses')?.disable()

    console.log(this.form)
  }

  public retrieveCivilStatus(): void {
    // Dado que el recurso proporcionado por el ejercicio se encuentra en un
    // servidor que no da respuesta, esta función será llamada al momento de
    // inicializar el componente y llenará el arreglo que debería ser llenado
    // con la información del servidor
    // Para la estructura de los datos se supondrá un ID numérico para tener
    // como valor dentro del formulario y un nombre que será utilizado para
    // desplegar al usuario en el componente de tipo lista de selección
    this.civilStatuses = [
      { id: 12, name: 'Soltero' },
      { id: 13, name: 'Casado' },
      { id: 14, name: 'Divorciado' },
    ]
  }

  add(event: MatChipInputEvent): void {
    if (this.form === undefined || this.form === null)
      return

    const value = (event.value || '').trim();

    if (value) {
      let booksArray: FormArray = <FormArray>this.form.controls['librosLeidosUltimosTresMeses']
      let booksArrayValue: Array<string> = <Array<string>>booksArray.value
      // Si el libro ya se encuentra en la lista, lo omitimos. Esto no fue un
      // requerimiento del ejercicio pero lo considero lo suficientemente
      // importante como para incluirlo
      if (booksArrayValue.find(book => book === value) === undefined) {
        booksArray.push(new FormControl(value))
      }
    }

    event.chipInput!.clear();
  }

  remove(value: string) {
    if (this.form === undefined || this.form === null)
      return

    let booksArray: FormArray = <FormArray>this.form.controls['librosLeidosUltimosTresMeses']
    let booksArrayValue: Array<string> = <Array<string>>booksArray.value
    let removedBookIndex = booksArrayValue.findIndex(book => book === value)
    if (removedBookIndex !== undefined) {
      booksArray.removeAt(removedBookIndex)
    }
  }

  public formValidity(): void {
    this.snackBar.open('El formulario es ' + (this.form?.valid === true ? 'válido' : 'no válido'), undefined, {duration: 3000})
  }

  public ngOnDestroy(): void {
    // Siempre se deben cerrar las suscripciones al momento de destruir el
    // componente
    this.readingTrackingSubscription?.unsubscribe()
  }
}
