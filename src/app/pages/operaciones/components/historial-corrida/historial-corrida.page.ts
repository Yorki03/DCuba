import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/shared/service/historial.service';
import { Variables } from '../../utils/variables';
import { FunctionJugadaCorrida } from './function/get-jugadas-corrido';
import { DineroService } from 'src/app/shared/service/dinero.service';
import { FunctionDinero } from '../../functions/get-dinero';

@Component({
  selector: 'app-historial-corrida',
  templateUrl: './historial-corrida.page.html',
  styleUrls: ['./historial-corrida.page.scss'],
})
export class HistorialCorridaPage implements OnInit {

  variables = new Variables;
  constructor(private historiaService: HistorialService,
              private dineroService: DineroService) { }

  ngOnInit() {
    FunctionJugadaCorrida.getAll(
      this.historiaService,
      this.variables
    );
    
    FunctionDinero.getAll(
      this.dineroService,
      this.variables
    );

  }

}
