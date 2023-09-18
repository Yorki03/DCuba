import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { handleError } from '../functions/http-error';

import { JugadaNormales } from 'src/app/pages/operaciones/components/historial/model/jugadaNormales';
import { JugadaCentenas } from 'src/app/pages/operaciones/components/historial-centena/model/jugadaCentena';
import { JugadaCorridas } from 'src/app/pages/operaciones/components/historial-corrida/model/jugdaCorrido';
import { JugadaParles } from 'src/app/pages/operaciones/components/historial-parles/model/jugadaParles';
import { JugadasCentenas, JugadasCorrida, JugadasNormales, JugadasParles } from 'src/app/pages/operaciones/components/jugadas/interface/interface';


@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http: HttpClient) { }

  //LLamar a Jugadas Normales
  jugadasNormales(): Observable<JugadaNormales[]>{
    
    const url = `https://dcuba.onrender.com/jugadas_normales`;
    return this.http.get<JugadaNormales[]>(url).pipe(
      map((res) => res.map((normal)=> new JugadaNormales(normal))),
      catchError(handleError)
    );
  }

  //LLamar a Jugadas Corridas
  jugadasCorridas(): Observable<JugadaCorridas[]>{
    const url = 'https://dcuba.onrender.com/jugadas_corrida'
    return this.http.get<JugadaCorridas[]>(url).pipe(
      map((res) => res.map((corrida) => new JugadaCorridas(corrida))),
      catchError(handleError)
    );
  }

  //LLamar a Jugadas Parles
  jugadasParleses(): Observable<JugadaParles[]>{
    
    const url = `https://dcuba.onrender.com/jugadas_parles`;
    return this.http.get<JugadaParles[]>(url).pipe(
      map((res) => res.map((parle) => new JugadaParles(parle))),
      catchError(handleError)
    );
  }

  //LLamar a Jugadas Centenas
  jugadasCentenas(): Observable<JugadaCentenas[]>{

    const url = `https://dcuba.onrender.com/jugadas_centenas`;
    return this.http.get<JugadaCentenas[]>(url).pipe(
      map((res) => res.map((centena) => new JugadaCentenas(centena))),
      catchError(handleError)
    )
  }

  /**Borrar las jugadas realizadas**/
  //Borrar Normales
  deleteNormales(id: number){
    const url= `https://dcuba.onrender.com/eliminar_jugada_normal/${id}`;
    return this.http.delete<JugadasNormales>(url).pipe(
      map(res => res.ok),
      catchError(handleError)
    );
  }

  //Borrar Corrida
  deleteCorridas(id: number){
    const url= `https://dcuba.onrender.com/eliminar_jugada_corrida/${id}`;
    return this.http.delete<JugadasCorrida>(url).pipe(
      map(res => res.ok),
      catchError(handleError)
    );
  }

  //Borrar Parles
  deleteParles(id: number){
    const url= `https://dcuba.onrender.com/eliminar_jugada_parles/${id}`;
    return this.http.delete<JugadasParles>(url).pipe(
      map(res => res.ok),
      catchError(handleError)
    );
  }

  //Borrar Centena
  deleteCentena(id: number){
    const url= `https://dcuba.onrender.com/eliminar_jugada_centena/${id}`;
    return this.http.delete<JugadasCentenas>(url).pipe(
      map(res => res.ok),
      catchError(handleError)
    );
  }

}
