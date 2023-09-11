import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

import { handleError } from '../functions/http-error';
import { JugadaCorrida, JugadasCentenas, JugadasNormales, JugadasParles  } from 'src/app/pages/operaciones/components/jugadas/interface/interface';


@Injectable({
  providedIn: 'root'
})
export class JugadasService {

  constructor(private http: HttpClient) { }

  //Jugadas normales
  postNormales(dinero_fijo: number, estado:string, telefono:string, id_numero: number){
    const url = 'https://dcuba.onrender.com/normal';
    const body = {dinero_fijo, estado, telefono, id_numero};
    return this.http.post<JugadasNormales>(url, body).pipe( 
      map(res => res.ok),
      catchError(handleError)
    )
  }

  //Jugada de Corridos
  postCorrido(telefono: string, estado: string, dinero: number, id_numero: number){
    const url = 'https://dcuba.onrender.com/corridas';
    const body = {telefono, estado, dinero, id_numero};
    return this.http.post<JugadaCorrida>(url, body).pipe(
      map(res => res.ok),
      catchError(handleError)
    )
  }

  //Jugadas Parles
  postParles(dinero: number, telefono:string, estado: string, id_numero1: number, id_numero2:number){
    const url = 'https://dcuba.onrender.com/parles';
    const body = {dinero, telefono, estado, id_numero1, id_numero2};

    return this.http.post<JugadasParles>(url, body).pipe(
      map(res => res.ok),
      catchError(handleError)
    )
  }

  //Jugadas Centenas
  postCentenas( dinero:number, numero:number, estado:string, telefono:string, id_numero:number){
    const url = 'https://dcuba.onrender.com/centenas';
    const body = {dinero, numero, estado, telefono, id_numero};

    return this.http.post<JugadasCentenas>(url, body).pipe(
      map(res => res.ok),
      catchError(handleError)
    )
  }

}
