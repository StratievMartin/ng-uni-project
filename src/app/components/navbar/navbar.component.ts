import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }
  ngOnInit(): void {
  }

  getLoggedIn() {
    return this.auth.loggedIn()
  }
  getAdmin() {
    return this.auth.isAdmin()
  }
  logOut() {
    this.auth.logout()
  }
}
