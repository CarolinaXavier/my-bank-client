import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { LoginInterface } from '../../interfaces/login.interface';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: LoginInterface

  constructor(private readonly loginService: LoginService,
    private readonly router: Router,
    private readonly alertService: AlertService) {

    this.login = new LoginInterface()

  }

  ngOnInit(): void {
  }

  async send() {
    this.loginService.login(this.login).subscribe(response => {
      if (response && response.access_token) {
        this.loginService.setToken(response.access_token)
        this.router.navigate(['/'])
      } else {
        this.alertService.error('Error', 'Unauthorized', true)
      }
    })
  }

}
