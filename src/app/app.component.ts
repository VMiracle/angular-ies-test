import { Component } from '@angular/core'
import { SessionService } from '../services/session.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public sessionService: SessionService, private router: Router) {}

  public logout(): void {
    // Para poder mostrar el uso de guardianes, el usuario debe poder cerrar
    // sesión, aunque esto no forme parte de los detalles del ejercicio
    this.sessionService.logout()
    this.router.navigate(['./login'])
  }
}
