import { Component, OnInit } from '@angular/core';

import { HistorialService } from 'src/app/shared/service/historial.service';
import { Variables } from '../../utils/variables';
import { FunctionJugadasNormales } from './function/get-jugadas-normales';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  variables = new Variables;

  constructor(private historialService: HistorialService) { }

  ngOnInit() {

    FunctionJugadasNormales.getAll(
      this.historialService,
      this.variables
    );
    
  }

  

}
