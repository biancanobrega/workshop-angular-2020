import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    if (localStorage.getItem('isLogged')) {
      this.loggedIn.next(true);
    }
  }

  login(email: string, pass: string) {
    let isLogged = false;
    if (email === 'teste@teste.com' && pass === '123') {
      console.log('aqui');
      this.loggedIn.next(true);
      isLogged = true;
      localStorage.setItem('isLogged', 'true');
    }
    return isLogged;
  }

  logout() {
    localStorage.clear();
    this.loggedIn.next(false);
  }

  get isLoggedIn() {
    console.log(this.loggedIn);
    return this.loggedIn.asObservable();
  }
}
