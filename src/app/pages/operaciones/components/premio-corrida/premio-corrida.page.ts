import { Component, OnInit } from '@angular/core';
import { Variables } from '../../utils/variables';
import { PremiosService } from 'src/app/shared/service/premios.service';
import { FunctionJugadaCorridaDia } from './function/get-corrida-dia';
import { FunctionJugadaCorridaNoche } from './function/get-corrida-noche';

@Component({
  selector: 'app-premio-corrida',
  templateUrl: './premio-corrida.page.html',
  styleUrls: ['./premio-corrida.page.scss'],
})
export class PremioCorridaPage implements OnInit {

  variables = new Variables;
  constructor(private premioService: PremiosService) { }

  ngOnInit() {
    FunctionJugadaCorridaDia.getAll(
      this.premioService,
      this.variables
    );

    FunctionJugadaCorridaNoche.getAll(
      this.premioService,
      this.variables
    );
  }

}
