import { Component, OnInit } from '@angular/core';

import { HistorialService } from 'src/app/shared/service/historial.service';
import { Variables } from '../../utils/variables';
import { FunctionJugadasNormales } from './function/get-jugadas-normales';
import { DineroService } from 'src/app/shared/service/dinero.service';
import { FunctionDinero } from '../../functions/get-dinero';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  variables = new Variables;

  constructor(private historialService: HistorialService, 
              private dineroSrevice: DineroService) { }

  ngOnInit() {

    FunctionJugadasNormales.getAll(
      this.historialService,
      this.variables
    );
    
    FunctionDinero.getAll(
      this.dineroSrevice,
      this.variables
    );
  }

  delNormal(id: number){
    this.historialService.deleteNormales(id).subscribe();

  }

  handleRefresh(event: any) {
    setTimeout(() => {
      FunctionJugadasNormales.getAll(
        this.historialService,
        this.variables
      );
      
      FunctionDinero.getAll(
        this.dineroSrevice,
        this.variables
      );
      event.target.complete();
    }, 2000);
  }

}
