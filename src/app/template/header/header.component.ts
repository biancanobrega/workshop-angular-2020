import { Component, OnInit } from '@angular/core';
import {
  faSignOutAlt, IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from 'src/app/auth/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logoutIcon: IconDefinition;

  constructor(private readonly authService: AuthenticationService, private readonly router: Router) { }

  ngOnInit(): void {
    this.logoutIcon = faSignOutAlt;
  }


  logout() {
    this.authService.logout();
    this.router.navigateByUrl('auth');
  }

}
