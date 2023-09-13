import { Component, OnInit } from '@angular/core';

import { LimitadosService } from 'src/app/shared/service/limitados.service';
import { Variables } from '../../utils/variables';
import { FunctionLimitadosDia } from './functions/get-limitado-dia';
import { FunctionLimitadosNoche } from './functions/get-limitado-noche';

@Component({
  selector: 'app-limitados',
  templateUrl: './limitados.page.html',
  styleUrls: ['./limitados.page.scss'],
})
export class LimitadosPage implements OnInit {

  variables = new Variables;

  constructor(private limitadosService: LimitadosService) { }

  ngOnInit(): void {
    
   //Lamar a los numeros limitados del medio dia
   FunctionLimitadosDia.getAll(
    this.limitadosService,
    this.variables
   );

   //Lamar a los numeros limitados de la noche
   FunctionLimitadosNoche.getAll(
    this.limitadosService,
    this.variables
   );
   
  }

}
