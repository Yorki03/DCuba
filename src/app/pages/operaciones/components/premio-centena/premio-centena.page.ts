import { Component, OnInit } from '@angular/core';
import { PremiosService } from 'src/app/shared/service/premios.service';
import { Variables } from '../../utils/variables';
import { FunctionPremioCentenaDia } from './functions/get-centena-dia';
import { FunctionPremioCentenaNoche } from './functions/get-centena-noche';
import { DineroService } from 'src/app/shared/service/dinero.service';
import { FunctionDinero } from '../../functions/get-dinero';

@Component({
  selector: 'app-premio-centena',
  templateUrl: './premio-centena.page.html',
  styleUrls: ['./premio-centena.page.scss'],
})
export class PremioCentenaPage implements OnInit {

  variables = new Variables;
  constructor(private premioService: PremiosService, private dineroService: DineroService) { }

  ngOnInit() {
    FunctionPremioCentenaDia.getAll(
      this.premioService,
      this.variables
    );

    FunctionPremioCentenaNoche.getAll(
      this.premioService,
      this.variables
    );

    FunctionDinero.getAll (
      this.dineroService,
      this.variables,
    )
  }

}
