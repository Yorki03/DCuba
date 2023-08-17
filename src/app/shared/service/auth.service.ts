import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { Registrar } from 'src/app/auth/registrar/interface/interface';
import { Registro } from 'src/app/auth/registrar/models/registro';
import { handleError } from '../functions/http-error';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  //Registrar al cliente
  postRegistro(registro: Registrar): Observable<Registro[]>{
    const body = registro;

    return this.http.post<Registro[]>('http://localhost:4000/', body).pipe(
      map((res) => res.map((prod) => new Registro(prod))),
      catchError(handleError)
    );
  }

}
