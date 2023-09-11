import { Component, OnInit } from '@angular/core';

import { NumerosService } from 'src/app/shared/service/numeros.service';
import { Numeros } from './models/numeros';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  dias: Numeros[] = [];
  noches: Numeros[] = [];
  horaInicialDia: number = 8;
  horaCierreDia: number = 12;
  horaInicialNoche: number = 2;
  horaCierreNoche: number = 8;
  banderaDia: boolean = false;
  banderaNoche: boolean = false;
  horaActual: Date = new Date;

  constructor(private numerosService: NumerosService) { }

  ngOnInit() {

    //Llamar numeros del dia
    this.numerosService.getNumerosDia().subscribe({
      next:(dia)=>{
        this.dias = dia;        
      },error:(error)=>{
        console.log(error);
      }
    });

    //Llamar numeros de la noche
    this.numerosService.getNumerosNoche().subscribe({
      next:(noche)=>{
        this.noches = noche;
      },error:(error)=>{
        console.log(error);        
      }
    });

   //Hora limite de Dia
   if(this.horaInicialDia >= this.horaActual.getHours() && 
      this.horaActual.getHours() < this.horaCierreDia){
      
      this.banderaDia = true  
      console.log(this.banderaDia+ ' ' + 'dia'); 
    }else{
      this.banderaDia = false;
      console.log(this.banderaDia + ' ' + 'dia');
      
    }

    //Hora limite de la Noche 
    if(this.horaInicialNoche >= this.horaActual.getHours() && 
      this.horaActual.getHours() < this.horaCierreNoche){

      this.banderaNoche = true;
      console.log(this.banderaNoche+ ' ' + 'noche');
    }else{
      this.banderaNoche = false;
      console.log(this.banderaNoche+ ' ' + 'noche');
      
    }
    
  }

}
