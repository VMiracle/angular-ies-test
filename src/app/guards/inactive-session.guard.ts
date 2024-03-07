import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

import { SessionService } from '../../services/session.service'

@Injectable({
  providedIn: 'root'
})
export class InactiveSessionGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  public canActivate(): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    let promise: Promise<boolean|UrlTree> = new Promise<boolean|UrlTree>((resolve, reject) => {
      // Este guardian de ruta se encargará de evitar que el usuario regrese a la
      // pantalla de inicio de sesión una vez que se haya conectado y lo regresará
      // a la pantalla de bienvenida; no especificado en el ejercicio, pero útil
      this.sessionService.reloadSession()
      if (!this.sessionService.checkSession())
        resolve(true)
      else
        reject(this.router.navigate(['./app/welcome']))
    })

    return promise
  }
}