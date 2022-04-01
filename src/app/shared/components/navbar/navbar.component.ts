import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { AuthService } from 'src/app/core/auth/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  token: string | null = '';
  loggedIn: boolean = false;
  constructor(private authService: AuthService) {
    this.loggedIn = this.authService.isLogged();
  }

  ngOnInit(): void {

  }

  onLogout() {
    this.authService.logout();
    this.loggedIn = this.authService.isLogged();
  }
}