import { Component } from '@angular/core';
import { JugadasService } from 'src/app/shared/service/jugadas.service';

@Component({
  selector: 'app-carrileras-parles',
  templateUrl: './carrileras-parles.page.html',
  styleUrls: ['./carrileras-parles.page.scss'],
})
export class CarrilerasParlesPage  {

  estado: string = 'dia';
  opcion1: boolean = true;
  opcion2: boolean = false;

  movillUser: any = {
    telefono: ''
  }

  jugadasParlesCorridas:any = {
    numero1: '',
    numero2: '',
    dinero_fijo: '',
    dinero_corrido: ''
  }
  jugadasCorridaTerminales:any = {
    numero:'',
    dinero_fijo: '',
    dinero_corrido: ''
  }

  constructor(private jugadaService: JugadasService) { }

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

  jugadaCarrileraParles() {
    //Obtener telefono para confirmar
    const {telefono}  = this.movillUser;

    //Jugada Carrilera Parles
    const {numero1, numero2, dinero_fijo} = this.jugadasParlesCorridas;
    for (let i = numero1; i <= numero2; i++) {
      for(let j = i+1; j <= numero2; j++){
        this.jugadaService.postParles(dinero_fijo,telefono, this.estado, i, j).subscribe();
      }      
    }
  }

  jugadaTerminalParles(){
    //Obtener telefono para confirmar
    const {telefono}  = this.movillUser;

    //Jugada de Carrilera con terminales
    const {numero, dinero_fijo} = this.jugadasCorridaTerminales;
    for(let i = 0; i < 10; i++){
      let n1 = 10 * i + numero;
      for(let j = 1; j < 10; j++){
        let n2 = 10 * j + numero;
        this.jugadaService.postParles(dinero_fijo, telefono, this.estado, n1, n2).subscribe();
      }
    }
  }

}
