import { Component } from '@angular/core';
import { AuthenticationService } from './auth/shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'comics-app';
  isLogged: boolean;

  constructor(private readonly authService: AuthenticationService) {
    this.authService.isLoggedIn.subscribe(isLogged => this.isLogged = isLogged);
  }
}
