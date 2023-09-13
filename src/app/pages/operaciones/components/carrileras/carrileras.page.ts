import { Component } from '@angular/core';
import { JugadasService } from 'src/app/shared/service/jugadas.service';

@Component({
  selector: 'app-carrileras',
  templateUrl: './carrileras.page.html',
  styleUrls: ['./carrileras.page.scss'],
})
export class CarrilerasPage  {

  estado: string = 'dia';
  opcion1: boolean = true;
  opcion2: boolean = false;

  movillUser: any = {
    telefono: ''
  }

  jugadasNormalesCorridas:any = {
    numero1: '',
    numero2: '',
    dinero_fijo: ''
  }
  jugadasCorridaTerminales:any = {
    numero:'',
    dinero_fijo: ''
  }

  constructor(private jugadasService: JugadasService) { }

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
 
  jugadaCarrilera(){
    //Obtener telefono para confirmar
    const {telefono}  = this.movillUser;

    //Jugada Carrilera Normales
    const {numero1, numero2, dinero_fijo} = this.jugadasNormalesCorridas;
    for(let i = numero1; i <= numero2; i++){
      this.jugadasService.postNormales(dinero_fijo, this.estado, telefono, i).subscribe(ok =>{
        if (ok === true) {
          console.log('Guardada de Corrida con exito');
        } else {
          console.log('Error al ejecutar corrida');
        }
      });
    }
  }

  jugadaTerminales(){
    //Obtener telefono para confirmar
    const {telefono}  = this.movillUser;

    //Jugada de Carrilera con terminales
    const {numero, dinero_fijo} = this.jugadasCorridaTerminales;
    for(let i = 0; i < 10; i++){
      let n = 10*i + numero;
      this.jugadasService.postNormales(dinero_fijo, this.estado, telefono, n).subscribe(ok=>{
        if (ok === true) {
          console.log('Guardada Terminal con Exito');
        } else {
          console.log('Erros al ejecutar terminal');        
        }
      });
      n = 0;
    }
  }
}
