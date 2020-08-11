import { Injectable } from '@angular/core';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor() { }

  onLogin() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          this.isAuth = true;
          resolve(true);
        }, 2000);
      }
    );
  }

  onLogout() {
    this.isAuth = false;
  }
}
