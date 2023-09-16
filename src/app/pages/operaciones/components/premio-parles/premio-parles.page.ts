import { Component, OnInit } from '@angular/core';
import { PremiosService } from 'src/app/shared/service/premios.service';
import { Variables } from '../../utils/variables';
import { FunctionPremiosParlesDia } from './function/get-premios-dia';
import { FunctionPremiosParlesNoche } from './function/get-premios-noche';
import { DineroService } from 'src/app/shared/service/dinero.service';
import { FunctionDinero } from '../../functions/get-dinero';

@Component({
  selector: 'app-premio-parles',
  templateUrl: './premio-parles.page.html',
  styleUrls: ['./premio-parles.page.scss'],
})
export class PremioParlesPage implements OnInit {

  variabes = new Variables
  constructor(private premioService: PremiosService, private dineroService: DineroService) { }

  ngOnInit() {
    FunctionPremiosParlesDia.getAll(
      this.premioService,
      this.variabes
    );

    FunctionPremiosParlesNoche.getAll(
      this.premioService,
      this.variabes
    );

    FunctionDinero.getAll (
      this.dineroService,
      this.variabes,
    )

  }

}
