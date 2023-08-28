import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { handleError } from '../functions/http-error';
import { Normales } from 'src/app/pages/operaciones/components/historial/models/normales';
import { Parles } from 'src/app/pages/operaciones/components/historial-parles/models/parles';
import { Centenas } from 'src/app/pages/operaciones/components/historial-centena/models/centenas';


@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) { }

  //LLamar a Jugadas Normales
  getNormales(): Observable<Normales[]>{
    
    const url = `http://localhost:4000/jugadas_normales`;
    return this.http.get<Normales[]>(url).pipe(
      map((res) => res.map((normal)=> new Normales(normal))),
      catchError(handleError)
    );
  }

  //LLamar a Jugadas Parles
  getParles(): Observable<Parles[]>{
    
    const url = `http://localhost:4000/jugadas_parles`;
    return this.http.get<Parles[]>(url).pipe(
      map((res) => res.map((parle) => new Parles(parle))),
      catchError(handleError)
    );
  }

  //LLamar a Jugadas Centenas
  getCentena(): Observable<Centenas[]>{

    const url = `http://localhost:4000/jugadas_centenas`;
    return this.http.get<Centenas[]>(url).pipe(
      map((res) => res.map((centena) => new Centenas(centena))),
      catchError(handleError)
    )
  }
}
