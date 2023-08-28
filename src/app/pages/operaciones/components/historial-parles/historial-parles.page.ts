import { Component, OnInit } from '@angular/core';

import { HistorialService } from 'src/app/shared/service/historial.service';
import { Parles } from './models/parles';

@Component({
  selector: 'app-historial-parles',
  templateUrl: './historial-parles.page.html',
  styleUrls: ['./historial-parles.page.scss'],
})
export class HistorialParlesPage implements OnInit {

  parles: Parles[] = [];

  constructor(private historialService: HistorialService) { }

  ngOnInit() {
    this.historialService.getParles().subscribe({
      next:(parle) => {
        this.parles = parle;
      },error:(err) => {
        console.log(err);
      },
    });
  }

}
