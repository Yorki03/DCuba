import { Component, OnInit } from '@angular/core';
import { PremiosService } from 'src/app/shared/service/premios.service';
import { Variables } from '../../utils/variables';
import { FunctionPremioCentenaNoche } from '../premio-centena/functions/get-centena-noche';
import { FunctionPremiosNormalesDia } from './function/get-premios-dia';
import { DineroService } from 'src/app/shared/service/dinero.service';
import { FunctionDinero } from '../../functions/get-dinero';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.page.html',
  styleUrls: ['./premios.page.scss'],
})
export class PremiosPage implements OnInit {

  variables = new Variables

  constructor(private premiosService: PremiosService, private dineroService: DineroService) { }

  ngOnInit() {

    FunctionPremiosNormalesDia.getAll(
      this.premiosService,
      this.variables
    );

    FunctionPremioCentenaNoche.getAll(
      this.premiosService,
      this.variables
    );

    FunctionDinero.getAll (
      this.dineroService,
      this.variables,
    )
  }

}
