import { Component } from '@angular/core';
import { JugadasService } from 'src/app/shared/service/jugadas.service';
import { VariableJugadas } from '../../util/variable-jugadas';

@Component({
  selector: 'app-jugadas',
  templateUrl: './jugadas.page.html',
  styleUrls: ['./jugadas.page.scss'],
})
export class JugadasPage {

  variable = new VariableJugadas
  opcion1: boolean = true;
  opcion2: boolean = false;

  JugadasNormales:any = {
    numero:'',
    dinero_fijo: '',
    dinero_corrido: ''
  }

  movillUser: any = {
    telefono: ''
  }
  
  constructor(private jugadasService: JugadasService) {  }

  opcion1Changed() {
    if (this.opcion1) {
      this.opcion2 = false;
    }    
  }

  opcion2Changed() {
    if (this.opcion2) {
      this.opcion1 = false;
    }
  }

  
  enviar(){

    //Obtener ID
    const {telefono}  = this.movillUser;
    
    //Jugadas Normales
    const {numero, dinero_fijo, dinero_corrido} = this.JugadasNormales;
    this.jugadasService.postNormales(dinero_fijo, dinero_corrido, telefono ,numero).subscribe(ok=>{
      if (ok === true) {
        console.log('Guardado con exito');
        
      } else {
        console.log('Error en la operacion');
        
      }
    })
  }
}
