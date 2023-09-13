import { Component, OnInit } from '@angular/core';
import { HistorialService } from 'src/app/shared/service/historial.service';
import { Variables } from '../../utils/variables';
import { FunctionJugadaCorrida } from './function/get-jugadas-corrido';

@Component({
  selector: 'app-historial-corrida',
  templateUrl: './historial-corrida.page.html',
  styleUrls: ['./historial-corrida.page.scss'],
})
export class HistorialCorridaPage implements OnInit {

  variables = new Variables;
  constructor(private historiaService: HistorialService) { }

  ngOnInit() {
    FunctionJugadaCorrida.getAll(
      this.historiaService,
      this.variables
    );
  }

}
