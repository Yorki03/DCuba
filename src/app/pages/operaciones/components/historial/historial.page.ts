import { Component, OnInit } from '@angular/core';

import { HistorialService } from 'src/app/shared/service/historial.service';
import { Normales } from './models/normales';



@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {

  normales: Normales[] = [];

  constructor(private historialService: HistorialService) { }

  ngOnInit() {
    this.historialService.getNormales().subscribe({
      next:(normal) => {
        this.normales = normal;
      },error:(err) => {
        console.log(err);
      },
    });
  }

  

}
