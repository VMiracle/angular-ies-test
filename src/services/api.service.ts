import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly defaultHeaders: HttpHeaders = new HttpHeaders({ Accept: 'application/json' })

  constructor(private httpClient: HttpClient) {}

  private post<T>(url: string, data: Object = {}): Observable<T> {
    return this.httpClient.post<T>(url, data, { headers: this.defaultHeaders })
  }

  public login<T>(data: Object): Observable<T> {
    return this.post<T>('https://desa.ies-webcontent.com.mx/login', data)
  }

  public civilStatus<T>(): Observable<T> {
    return this.post<T>('http://201.131.20.125/BienesRaicesApi/api/services/app/Catalogo/EstadoCivil')
  }
}
