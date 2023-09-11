import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { Numeros } from 'src/app/pages/operaciones/components/numeros/models/numeros';
import { handleError } from '../functions/http-error';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

  constructor(private http: HttpClient) { }

  //Numeros del dia
  getNumerosDia(): Observable<Numeros[]>{
    return this.http.get<Numeros[]>('https://dcuba.onrender.com/numero-dia').pipe(
      map((res) => res.map((dia) => new Numeros(dia))),
      catchError(handleError)
    );
  }

  //Numeros de la noche
  getNumerosNoche(): Observable<Numeros[]>{
    return this.http.get<Numeros[]>('https://dcuba.onrender.com/numero-noche').pipe(
      map((res) => res.map((numeroNoche) => new Numeros(numeroNoche))),
      catchError(handleError)
    );
  }
}
