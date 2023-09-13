import { Component, OnInit } from '@angular/core';

import { HistorialService } from 'src/app/shared/service/historial.service';
import { Variables } from '../../utils/variables';
import { FunctionJugadasParles } from './function/get-jugada-parles';

@Component({
  selector: 'app-historial-parles',
  templateUrl: './historial-parles.page.html',
  styleUrls: ['./historial-parles.page.scss'],
})
export class HistorialParlesPage implements OnInit {

  variables = new Variables;

  constructor(private historialService: HistorialService) { }

  ngOnInit() {
    FunctionJugadasParles.getAll(
      this.historialService,
      this.variables
    )
  }

}
