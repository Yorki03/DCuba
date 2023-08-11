import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  logout(){
    this.router.navigate(['/login'])
  }

}
