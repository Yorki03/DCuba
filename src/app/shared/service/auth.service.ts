import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';


import { Registrar } from 'src/app/auth/registrar/interface/interface';
import { Registro } from 'src/app/auth/registrar/models/registro';
import { handleError } from '../functions/http-error';
import { AuthResponse } from 'src/app/auth/login/interface/interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  //Login de Usuario
  postLogin(nombre: string, telefono: string ){
    const url = 'http://localhost:4000/auth';
    const body = {nombre, telefono};

    return this.http.post<AuthResponse>(url, body).pipe(
      map(res => res.ok),
      catchError(err=> of(err.error.msg))
    );
  }
}
