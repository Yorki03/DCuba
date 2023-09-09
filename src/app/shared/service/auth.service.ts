import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

import { AuthResponse } from 'src/app/auth/login/interface/interface';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  //Login de Usuario
  postLogin(nombre: string, telefono: string ){
    const url = 'https://dcuba.onrender.com/auth';
    const body = {nombre, telefono};

    return this.http.post<AuthResponse>(url, body).pipe(
      map(res => res.ok),
      catchError(err=> of(err.error.msg))
    );
  }
}
