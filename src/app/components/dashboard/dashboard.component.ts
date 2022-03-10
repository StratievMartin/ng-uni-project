import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loggedIn = this.auth.loggedIn()
  isAdmin = this.auth.isAdmin()
  showAdd = false

  ad = <any>[];
  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit(): void {
    if (this.isAdmin) {
      this.getCreated(this.isAdmin || '')
    } else {
      this.getApplied(this.loggedIn || '')
    }
  }
  deleteUser() {
    this.auth.deleteUser()
  }
  getCreated(user: string) {
    this.data.getAllAds().subscribe(res => {
      this.ad = res.map((el: any) => {
        const data = el.payload.doc.data();
        if (data.author === user) {
          data.id = el.payload.doc.id;
          return data
        }
      }).filter(Boolean)
      console.log(this.ad);
    })
  }
  getApplied(user: string) {
    this.data.getAllAds().subscribe(res => {
      this.ad = res.map((el: any) => {
        const data = el.payload.doc.data();
        if (data.candidates && data.candidates.includes(user)) {
          data.id = el.payload.doc.id;
          return data
        }
      }).filter(Boolean)
      console.log(this.ad);
    })
  }
}
