import { Injectable } from '@angular/core'
import { CanActivate, Router, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'

import { SessionService } from '../../services/session.service'

@Injectable({
  providedIn: 'root'
})
export class ActiveSessionGuard implements CanActivate {
  constructor(private sessionService: SessionService, private router: Router) {}

  public canActivate(): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    let promise: Promise<boolean|UrlTree> = new Promise<boolean|UrlTree>((resolve, reject) => {
      // Permitirá al usuario continuar si tiene una sesión activa, caso
      // contrario lo regresará a la pantalla de inicio de sesión
      this.sessionService.reloadSession()
      if (this.sessionService.checkSession())
        resolve(true)
      else
        reject(this.router.navigate(['./login']))
    })

    return promise
  }
}
