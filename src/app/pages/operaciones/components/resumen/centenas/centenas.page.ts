import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-centenas',
  templateUrl: './centenas.page.html',
  styleUrls: ['./centenas.page.scss'],
})
export class CentenasPage implements OnInit {

  items: string [] = [];
  constructor() { }

  ngOnInit() {
    this.generateItems();
  }

  fecha: Date = new Date();
  mes: number = this.fecha.getMonth() + 1;
  fechaModificada: string =  "   " +  this.fecha.getDay().toString() + "-" + this.mes.toString() + "-" + this.fecha.getFullYear().toString() + " " + this.fecha.getHours().toString() + ":" + this.fecha.getMinutes
  ().toString();

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 10; i++) {
      this.items.push(this.fechaModificada);
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
