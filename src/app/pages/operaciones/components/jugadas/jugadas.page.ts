import { Component } from '@angular/core';
import { JugadasService } from 'src/app/shared/service/jugadas.service';


@Component({
  selector: 'app-jugadas',
  templateUrl: './jugadas.page.html',
  styleUrls: ['./jugadas.page.scss'],
})
export class JugadasPage {

  estado: string = 'dia';
  opcion1: boolean = true;
  opcion2: boolean = false;

  jugadasNormales:any = {
    numero:'',
    dinero_fijo: ''
  }

  jugadasCorridas:any = {
    numero1: '',
    dinero_corrido: ''
  }

  jugadasParles: any = {
    dinero: '',
    id_numero1: '',
    id_numero2: ''
  }

  jugadasCentenas: any ={
    numero: '',
    dinero: '',
    id_numero: ''
  }

  movillUser: any = {
    telefono: ''
  }
  
  constructor(private jugadasService: JugadasService) {  }

  opcion1Changed() {
    if (this.opcion1) {
      this.opcion2 = false;
      this.estado = 'dia';
    }    
  }

  opcion2Changed() {
    if (this.opcion2) {
      this.opcion1 = false;
      this.estado = 'noche';
    }
  }

  
  JugadaNormal(){

    //Obtener telefono para confirmar
    const {telefono}  = this.movillUser;
        
    //Jugadas Normales
    const {numero, dinero_fijo } = this.jugadasNormales;
    this.jugadasService.postNormales(dinero_fijo, this.estado, telefono ,numero).subscribe(ok=>{
      if (ok === true) {
        console.log('Guardado normal con exito');
        
      } else {
        console.log('Error en la operacion normal');
      }
    });
  }

  JugadaCorrido(){
    //Obtener telefono para confirmar
    const {telefono}  = this.movillUser;

    //Jugada Corrido
    const{numero1, dinero_corrido} = this.jugadasCorridas;
    this.jugadasService.postCorrido(telefono, this.estado, dinero_corrido, numero1).subscribe(ok=>{
      if (ok === true) {
        console.log('Guardado Corrido con exito');        
      } else {
        console.log('Error en la operaacion corrido');        
      }
    })
  }

  JugadaParle(){
    //Obtener telefono para confirmar
    const {telefono}  = this.movillUser;

    //Jugada Parles
    const {dinero, id_numero1, id_numero2} = this.jugadasParles
    this.jugadasService.postParles(dinero, telefono, this.estado, id_numero1, id_numero2).subscribe(ok=>{
      if(ok === true){
        console.log('Guardado parle exitoso');
      }else{
        console.log('Error en la operacion parle');
         
      }
    });
  }

  JugadaCentenas(){
    //Obtener telefono para confirmar
    const {telefono}  = this.movillUser;

    //Jugada Centena
    const {dinero, numero, id_numero} = this.jugadasCentenas;
    this.jugadasService.postCentenas(dinero, numero, this.estado, telefono, id_numero).subscribe(ok =>{
      if (ok === true) {
        console.log('Guardada centena exitosa');        
      } else {
        console.log('Error en la operacion centena');                
      }
    });
  }

 

}
