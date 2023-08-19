import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';

import { handleError } from '../functions/http-error';
import {  IdJugadores, JugadasCentenas, JugadasNormales, JugadasParles  } from 'src/app/pages/operaciones/components/jugadas/interface/interface';


@Injectable({
  providedIn: 'root'
})
export class JugadasService {

  constructor(private http: HttpClient) { }

  //Jugadas normales
  postNormales(dinero_fijo: string, dinero_corrido: string, telefono:string, id_numero: number){
    const url = 'http://localhost:4000/normal';
    const body = {dinero_fijo, dinero_corrido, telefono, id_numero};
    return this.http.post<JugadasNormales>(url, body).pipe(
      map(res => res.ok),
      catchError(handleError)
    )
  }

  //Jugadas Parles
  postParles(jugadasparles: JugadasParles){
    const url = 'http://localhost:4000/parles';
    const body = jugadasparles;

    return this.http.post<JugadasParles>(url, body).pipe(
      map(res => res.ok),
      catchError(handleError)
    )
  }

  //Jugadas Centenas
  postCentenas( ){
    const url = 'http://localhost:4000/centenas';
    const body = {};

    return this.http.post<JugadasCentenas>(url, body).pipe(
      map(res => res.ok),
      catchError(handleError)
    )
  }

  //Buscar id de jugador por telefono
  getIdJugador(telefono: string){
    const url = 'http://localhost:4000/auth/id';
    const body = {telefono};

    return this.http.post<IdJugadores>(url, body).pipe(
      map(res => res.id_usuario),
      catchError(handleError)
    )

  }
}
