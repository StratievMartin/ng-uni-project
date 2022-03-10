import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }
  loggedIn = this.auth.loggedIn()
  isAdmin = this.auth.isAdmin()

  ngOnInit(): void {
  }
  logOut() {
    this.auth.logout()
  }
}
