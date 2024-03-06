import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from 'src/services/api.service'
import { SessionService } from 'src/services/session.service'

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  public form?: FormGroup

  constructor(public formBuilder: FormBuilder, public apiService: ApiService) {}

  public ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  public login(): void {
    if (this.form === undefined || this.form === null)
      return

    if (!this.form.valid)
      return

    // NOTA: La URL daba un error de CORS. Lamentablemente, esto es algo que solo
    // puede resolverse desde la configuración del servidor. Con el fin de
    // continuar con el ejercicio, al ingresar cualquier formulario válido
    // con usuario y contraseña se considerará que el usuario se conectó
    
    /*this.serverService.login(this.form.value).subscribe((data) => {

    }, (error) => {

    })*/
  }
}
