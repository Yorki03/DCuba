import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { handleError } from '../functions/http-error';
import { DineroTotal } from 'src/app/pages/operaciones/models/dinero-total';

@Injectable({
  providedIn: 'root'
})
export class DineroService {

  constructor(private http: HttpClient) { }
  //Llamar al dinero en bruto
  getDinero(): Observable<DineroTotal[]>{
    return this.http.get<DineroTotal[]>('https://dcuba.onrender.com/dinero_bruto').pipe(
      map((res) => res.map((dinero)=> new DineroTotal(dinero))),
      catchError(handleError)
    )
  }
  
  
}
