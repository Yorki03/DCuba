import { Component, OnInit } from '@angular/core';

import { LimitadosService } from 'src/app/shared/service/limitados.service';
import { LimitadosDias } from './models/limitados-dias';
import { LimitadosNoches } from './models/limitados-noches';




@Component({
  selector: 'app-limitados',
  templateUrl: './limitados.page.html',
  styleUrls: ['./limitados.page.scss'],
})
export class LimitadosPage implements OnInit {
  dias: LimitadosDias[] = [];
  noches: LimitadosNoches[] = [];

  constructor(private limitadosService: LimitadosService) { }

  ngOnInit(): void {
    
    //Lamar a los numeros limitados del medio dia
   this.limitadosService.getLimitadosDia().subscribe({
    next:(dia)=>{
      this.dias = dia;
    }, error:(error)=>{
      console.log(error);      
    }
   });

   //Lamar a los numeros limitados de la noche
   this.limitadosService.getLimitadosNoche().subscribe({
    next:(noche)=>{
      this.noches = noche;
    }, error:(error)=>{
      console.log(error);      
    }
   });
  }

}
