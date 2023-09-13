import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { handleError } from '../functions/http-error';
import { NumerosSalidos } from 'src/app/pages/operaciones/components/numeros/models/numerosSalidos';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

  constructor(private http: HttpClient) { }

  //Numeros del dia
  getNumerosDia(): Observable<NumerosSalidos[]>{
    return this.http.get<NumerosSalidos[]>('https://dcuba.onrender.com/numero-dia').pipe(
      map((res) => res.map((dia) => new NumerosSalidos(dia))),
      catchError(handleError)
    );
  }

  //Numeros de la noche
  getNumerosNoche(): Observable<NumerosSalidos[]>{
    return this.http.get<NumerosSalidos[]>('https://dcuba.onrender.com/numero-noche').pipe(
      map((res) => res.map((numeroNoche) => new NumerosSalidos(numeroNoche))),
      catchError(handleError)
    );
  }
}
