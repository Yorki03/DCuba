import { Component, OnInit } from '@angular/core';
import { Variables } from '../../utils/variables';
import { PremiosService } from 'src/app/shared/service/premios.service';
import { FunctionJugadaCorridaDia } from './function/get-corrida-dia';
import { FunctionJugadaCorridaNoche } from './function/get-corrida-noche';
import { DineroService } from 'src/app/shared/service/dinero.service';
import { FunctionDinero } from '../../functions/get-dinero';

@Component({
  selector: 'app-premio-corrida',
  templateUrl: './premio-corrida.page.html',
  styleUrls: ['./premio-corrida.page.scss'],
})
export class PremioCorridaPage implements OnInit {

  variables = new Variables;
  constructor(private premioService: PremiosService, private dineroService: DineroService) { }

  ngOnInit() {
    FunctionJugadaCorridaDia.getAll(
      this.premioService,
      this.variables
    );

    FunctionJugadaCorridaNoche.getAll(
      this.premioService,
      this.variables
    );

    FunctionDinero.getAll (
      this.dineroService,
      this.variables,
    )
  }

}
