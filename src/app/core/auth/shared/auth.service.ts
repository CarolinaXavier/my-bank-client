import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/home/sign-up/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  get isLoggedIn() {
    return this.loggedIn.asObservable()
  }

  constructor(
    private router: Router
  ) { }

  login(user: User) {
    if (user.name !== '' && user.password !== '') {
      this.loggedIn.next(true);
      this.router.navigate(['/'])
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login'])
  }

  isLogged() {
    const token = window.localStorage.getItem('token')
    if (token) {
      return true;
    } else {
      this.router.navigate(['login'])
      return false
    }
  }
}
