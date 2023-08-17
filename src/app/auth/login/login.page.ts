import { Component, OnInit } from '@angular/core';
import { VariablesLogin } from './util/variables';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  variable = new VariablesLogin

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.variable.miformulario = this.formBuilder.group({
      telefono: ['', Validators.required],
      password:['', Validators.required, Validators.minLength(8)]
    });
  }

  login(){
    console.log(this.variable.miformulario.value);
    console.log(this.variable.miformulario.valid);
    
  }
}
