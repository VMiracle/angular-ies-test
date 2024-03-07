import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private isSessionActive: boolean = false

  public login(): void {
    // Para mantener permanencia de la sesión entre recargas del navegador
    // guardaré una bandera en localStorage
    this.isSessionActive = true
    localStorage.setItem('login', 'true')
  }

  public logout(): void {
    // Para poder probar ambos guardianes de ruta se debe poder iniciar y
    // cerrar sesión
    this.isSessionActive = false
    localStorage.removeItem('login')
  }

  public reloadSession(): void {
    // Esta función se encarga de reestablecer el inicio de sesión a partir
    // de localStorage
    let login: string | null = localStorage.getItem('login')
    if (login !== null ) {
      this.isSessionActive = true
    } else {
      this.isSessionActive = false
    }
  }

  public checkSession(): boolean {
    return this.isSessionActive
  }
}
