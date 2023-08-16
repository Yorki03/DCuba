import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadas',
  templateUrl: './jugadas.page.html',
  styleUrls: ['./jugadas.page.scss'],
})
export class JugadasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  opcion1: boolean = true;
  opcion2: boolean = false;

  opcion1Changed() {
    if (this.opcion1) {
      this.opcion2 = false;
    }
  }

  opcion2Changed() {
    if (this.opcion2) {
      this.opcion1 = false;
    }
  }

  validateInput(event: any) {
    const inputValue = event.target.value;
    const cleanedValue = inputValue.replace(/[^0-9]/g, ''); // Eliminar no números
    const limitedValue = cleanedValue.substring(0, 2); // Limitar a dos caracteres
    event.target.value = limitedValue; // Actualizar el valor en el campo de entrada
  }
}
