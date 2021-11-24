import { Component, OnInit } from '@angular/core';
import { LoginService } from './_services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  usuario :string ;
  password: string;
  prueba:boolean;
  constructor(private loginService: LoginService,private fb:FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      usuario:  ['', [Validators.required]],
      password:  ['', [Validators.required]]
    })

  }

  login(){
    this.usuario=this.formLogin.value.usuario;
    this.password=this.formLogin.value.password;
    this.loginService.loginUser(this.usuario,this.password).subscribe(
      (result)=>{
        console.log(result);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  get form(){
    return this.formLogin.controls;
  }
  onSubmit(){

  }
}
