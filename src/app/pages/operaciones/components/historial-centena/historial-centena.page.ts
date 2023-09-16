import { Component, OnInit } from '@angular/core';

import { HistorialService } from 'src/app/shared/service/historial.service';
import { Variables } from '../../utils/variables';
import { FunctionJugadasCentena } from './function/get-jugadas-centenas';
import { DineroService } from 'src/app/shared/service/dinero.service';
import { FunctionDinero } from '../../functions/get-dinero';

@Component({
  selector: 'app-historial-centena',
  templateUrl: './historial-centena.page.html',
  styleUrls: ['./historial-centena.page.scss'],
})
export class HistorialCentenaPage implements OnInit {

  variables = new Variables

  constructor(private historialService: HistorialService, 
              private dineroService: DineroService) { }

  ngOnInit() {
    FunctionJugadasCentena.getAll(
      this.historialService,
      this.variables
    );

      FunctionDinero.getAll(
        this.dineroService,
        this.variables
      )
  }

}
