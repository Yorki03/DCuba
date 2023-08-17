import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  miFormulario: any ={
    nombre: '',
    telefono: ''
  }  

  constructor(private authService: AuthService, private router: Router){}


  login(){
    const {nombre, telefono} = this.miFormulario;
    this.authService.postLogin(nombre, telefono).subscribe(ok =>{
      if (ok === true) {
        this.router.navigateByUrl('/operaciones');
      } else {
        console.log('Error');        
      }
    })
  }
}
