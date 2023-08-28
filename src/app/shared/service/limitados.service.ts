import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { handleError } from '../functions/http-error';
import { LimitadosDias } from 'src/app/pages/operaciones/components/limitados/models/limitados-dias';
import { LimitadosNoches } from 'src/app/pages/operaciones/components/limitados/models/limitados-noches';

@Injectable({
  providedIn: 'root'
})
export class LimitadosService {

  constructor(private http: HttpClient) { }

  //Limitados del Dia
  getLimitadosDia(): Observable<LimitadosDias[]>{
    return this.http.get<LimitadosDias[]>('http://localhost:4000/limitados-dia').pipe(
      map((res)=> res.map((limDia) => new LimitadosDias(limDia))),
      catchError(handleError)
    );
  }

  //Limitados de la Noche
  getLimitadosNoche(): Observable<LimitadosNoches[]>{
    return this.http.get<LimitadosNoches[]>('http://localhost:4000/limitados-noche').pipe(
      map((res) => res.map((limNoche) => new LimitadosNoches(limNoche))),
      catchError(handleError)
    )
  }
}
