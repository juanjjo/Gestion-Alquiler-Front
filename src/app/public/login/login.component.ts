import { Component, OnInit } from '@angular/core';
import { LoginService } from './_services/login.service';
import { NgxSpinnerService } from "ngx-spinner";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  usuario: string;
  password: string;
  loginFormSubmitted: boolean = false;
  usuarioValidation: boolean = false;
  passwordValidation: boolean = false;
  credentialsError: boolean = false;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private spinner: NgxSpinnerService, private router: Router
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
    // this.formLogin.valueChanges
    //   .subscribe(data => {
    //     if(data.get('usuario')!=""){
    //       this.usuarioValidation=false;
    //     }
    //     if(data.get('password')!=""){
    //       this.passwordValidation=false;
    //     }
    //   })
    this.formLogin.get('usuario').valueChanges.subscribe((change) => {
      if (change != '') {
        this.usuarioValidation = false;
      }
    });
    this.formLogin.get('password').valueChanges.subscribe((change) => {
      if (change != '') {
        this.passwordValidation = false;
      }
    });
  }
  /**
   * metodo de login
   */
  login() {
    if (this.validaciones() == true) {
      this.spinner.show();
      this.usuario = this.formLogin.value.usuario;
      this.password = this.formLogin.value.password;
      this.loginService.loginUser(this.usuario, this.password).subscribe(
        success => {
          localStorage.setItem("UserData", JSON.stringify(success.data));
          localStorage.setItem("tokens", success.access_token);
          setTimeout(() => {
            this.router.navigate(['/dashboard']);
            this.spinner.hide();
          }, 3000);
        },
        (error) => {
          this.spinner.hide();
          alert('credenciales incorrectas');
        }
      );
    }
  }
  /**
   * validaciones campos vacios
   * @returns
   */
  validaciones(): boolean {
    if (
      this.formLogin.value.usuario == '' &&
      this.formLogin.value.password == ''
    ) {
      this.usuarioValidation = true;
      this.passwordValidation = true;
      return false;
    }
    if (
      this.formLogin.value.usuario == '' &&
      this.formLogin.value.password != ''
    ) {
      this.usuarioValidation = true;
      return false;
    } else {
      if (
        this.formLogin.value.usuario != '' &&
        this.formLogin.value.password == ''
      ) {
        this.passwordValidation = true;
        return false;
      } else {
        return true;
      }
    }
  }

  onSearchChange(searchValue: string) {
    console.log(searchValue);
  }
  /**
   * retorno al formLogin controles
   */
  get form() {
    return this.formLogin.controls;
  }

  onSubmit() {}
}
