import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn = localStorage.getItem('loggedIn')
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  logOut() {
    this.auth.logout()
  }
}
