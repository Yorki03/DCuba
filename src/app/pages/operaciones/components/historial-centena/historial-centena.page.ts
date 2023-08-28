import { Component, OnInit } from '@angular/core';

import { HistorialService } from 'src/app/shared/service/historial.service';

import { Centenas } from './models/centenas';

@Component({
  selector: 'app-historial-centena',
  templateUrl: './historial-centena.page.html',
  styleUrls: ['./historial-centena.page.scss'],
})
export class HistorialCentenaPage implements OnInit {

  centenas: Centenas[] = [];

  constructor(private historialService: HistorialService) { }

  ngOnInit() {
    this.historialService.getCentena().subscribe({
      next:(centena) => {
        this.centenas = centena;
      },error:(err) => {
        console.log(err);
      },
    })
  }

}
