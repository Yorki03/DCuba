import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { handleError } from '../functions/http-error';
import { JugadaNormales } from 'src/app/pages/operaciones/components/historial/model/jugadaNormales';
import { JugadaCentenas } from 'src/app/pages/operaciones/components/historial-centena/model/jugadaCentena';
import { JugadaCorridas } from 'src/app/pages/operaciones/components/historial-corrida/model/jugdaCorrido';
import { JugadaParles } from 'src/app/pages/operaciones/components/historial-parles/model/jugadaParles';


@Injectable({
  providedIn: 'root'
})
export class PremiosService {

  constructor(private http: HttpClient) { }

  //Premios Normales
  getpremiosNormalesDia(): Observable<JugadaNormales[]>{
    return this.http.get<JugadaNormales[]>('http://localhost:4000/premios-jugadas-dia').pipe(
      map((res) => res.map((premios) => new JugadaNormales(premios))),
      catchError(handleError)
    );
  }
  getpremiosNormalesNoche(): Observable<JugadaNormales[]>{
    return this.http.get<JugadaNormales[]>('http://localhost:4000/premios-jugadas-noche').pipe(
      map((res) => res.map((premios) => new JugadaNormales(premios))),
      catchError(handleError)
    );
  }

  //Premios Centenas
  grtPremiosCentenaDia(): Observable<JugadaCentenas[]>{
    return this.http.get<JugadaCentenas[]>('http://localhost:4000/premios-centena-dia').pipe(
      map((res) => res.map((premios)=> new JugadaCentenas(premios))),
      catchError(handleError)
    );
  }
  grtPremiosCentenaNoche(): Observable<JugadaCentenas[]>{
    return this.http.get<JugadaCentenas[]>('http://localhost:4000/premios-centena-noche').pipe(
      map((res) => res.map((premios)=> new JugadaCentenas(premios))),
      catchError(handleError)
    );
  }

  /*******************************************************************************************************/
  /*Premios del dia*/
  grtPremiosCorridoDia1(): Observable<JugadaCorridas[]>{
    return this.http.get<JugadaCorridas[]>('http://localhost:4000/premios-corridos1-dia').pipe(
      map((res) => res.map((premios)=> new JugadaCorridas(premios))),
      catchError(handleError)
    );
  }
  grtPremiosCorridoDia2(): Observable<JugadaCorridas[]>{
    return this.http.get<JugadaCorridas[]>('http://localhost:4000/premios-corridos2-dia').pipe(
      map((res) => res.map((premios)=> new JugadaCorridas(premios))),
      catchError(handleError)
    );
  }

  /*Premios del noche*/
  grtPremiosCorridoNoche1(): Observable<JugadaCorridas[]>{
    return this.http.get<JugadaCorridas[]>('http://localhost:4000/premios-corridos1-noche').pipe(
      map((res) => res.map((premios)=> new JugadaCorridas(premios))),
      catchError(handleError)
    );
  }
  grtPremiosCorridoNoche2(): Observable<JugadaCorridas[]>{
    return this.http.get<JugadaCorridas[]>('http://localhost:4000/premios-corridos2-noche').pipe(
      map((res) => res.map((premios)=> new JugadaCorridas(premios))),
      catchError(handleError)
    );
  }

  /*****************************************Premios Parles****************************************************/
  //Premios de dia
  grtPremiosParlesDiaFijo1(): Observable<JugadaParles[]>{
    return this.http.get<JugadaParles[]>('http://localhost:4000/premios-parles-dia-fijo1').pipe(
      map((res) => res.map((parles)=> new JugadaParles(parles))),
      catchError(handleError)
    );
  }
  grtPremiosParlesDiaFijo2(): Observable<JugadaParles[]>{
    return this.http.get<JugadaParles[]>('http://localhost:4000/premios-parles-dia-fijo2').pipe(
      map((res) => res.map((parles)=> new JugadaParles(parles))),
      catchError(handleError)
    );
  }
  grtPremiosParlesDiaCorrido(): Observable<JugadaParles[]>{
    return this.http.get<JugadaParles[]>('http://localhost:4000/premios-parles-dia-corrido').pipe(
      map((res) => res.map((parles)=> new JugadaParles(parles))),
      catchError(handleError)
    );
  }

  //Premios de la noche
  grtPremiosParlesNocheFijo1(): Observable<JugadaParles[]>{
    return this.http.get<JugadaParles[]>('http://localhost:4000/premios-parles-noche-fijo1').pipe(
      map((res) => res.map((parles)=> new JugadaParles(parles))),
      catchError(handleError)
    );
  }
  grtPremiosParlesNocheFijo2(): Observable<JugadaParles[]>{
    return this.http.get<JugadaParles[]>('http://localhost:4000/premios-parles-noche-fijo2').pipe(
      map((res) => res.map((parles)=> new JugadaParles(parles))),
      catchError(handleError)
    );
  }
  grtPremiosParlesNocheCorrido(): Observable<JugadaParles[]>{
    return this.http.get<JugadaParles[]>('http://localhost:4000/premios-parles-noche-corrido').pipe(
      map((res) => res.map((parles)=> new JugadaParles(parles))),
      catchError(handleError)
    );
  }
}
