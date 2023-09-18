import { Component, OnInit } from '@angular/core';

import { HistorialService } from 'src/app/shared/service/historial.service';
import { Variables } from '../../utils/variables';
import { FunctionJugadasParles } from './function/get-jugada-parles';
import { DineroService } from 'src/app/shared/service/dinero.service';
import { FunctionDinero } from '../../functions/get-dinero';

@Component({
  selector: 'app-historial-parles',
  templateUrl: './historial-parles.page.html',
  styleUrls: ['./historial-parles.page.scss'],
})
export class HistorialParlesPage implements OnInit {

  variables = new Variables;

  constructor(private historialService: HistorialService,
              private dineroService: DineroService) { }

  ngOnInit() {
    FunctionJugadasParles.getAll(
      this.historialService,
      this.variables
    )

    FunctionDinero.getAll(
      this.dineroService,
      this.variables
    ); 
    
  }

  delParles(id: number){
    this.historialService.deleteParles(id).subscribe();        
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      FunctionJugadasParles.getAll(
        this.historialService,
        this.variables
      )
  
      FunctionDinero.getAll(
        this.dineroService,
        this.variables
      ); 
      event.target.complete();
    }, 2000);
  }

}
