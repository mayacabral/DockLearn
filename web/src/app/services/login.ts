import { EventEmitter, Injectable } from '@angular/core';
import { Login } from '@models/interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login$ = new EventEmitter<boolean>();

  loginData: Login = {
    email: 'teste@email.com',
    password: 'teste123@'
  }

  constructor() { }

  login(data: Login){
    data !== this.loginData
      ? console.log('Credenciais inválidas')
      : console.log('Usuário logado com sucesso: ', data);
  }

}
