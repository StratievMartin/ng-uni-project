import { Component, OnInit } from '@angular/core';
import { JobAd } from 'src/app/models/job-ad.model';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jobAdsList: JobAd[] = [];
  jobAdObj: JobAd = {
    id: '',
    heading: '',
    description: '',
    likes: '',
    type: '',
    category: ''
  }

  id: string = '';
  heading: string = "";
  description: string = "";
  likes: string = "";
  type: string = "";
  category: string = "";

  loggedIn = localStorage.getItem('loggedIn')
  isAdmin = localStorage.getItem('adminUser')
  showAdd = false

  constructor(private auth: AuthService, private data: DataService) { 
    // state
  }

  ngOnInit(): void {
    this.getAllAds()
  }

  logOut() {
    this.auth.logout()
  }
  deleteUser(){
    this.auth.deleteUser()
  }
  resetForm() {
    this.id = '';
    this.heading = "";
    this.description = "";
    this.likes = "";
    this.type = "";
    this.category = "";
  }
  getAllAds() {
    this.data.getAllAds().subscribe(res => {
      this.jobAdsList = res.map((el: any) => {
        const data = el.payload.doc.data();
        data.id = el.payload.doc.id;
        return data
      })
    }, err => {
      alert('Fetching data error')
      console.log(err)
    })
  }
  addAd() {
    if (this.heading == '' || this.category == '' || this.description == '' || this.likes == '' || this.type == '') {
      alert('All fields are required!')
      return
    }
    this.jobAdObj.id = ''
    this.jobAdObj.heading = this.heading
    this.jobAdObj.category = this.category
    this.jobAdObj.description = this.description
    this.jobAdObj.likes = this.likes
    this.jobAdObj.type = this.type

    this.data.addAd(this.jobAdObj)
    this.resetForm()
  }
  updateAd(jobAd: JobAd) {
    if (this.heading == '' || this.category == '' || this.description == '' || this.likes == '' || this.type == '') {
      alert('All fields are required!')
      return
    }
    this.jobAdObj.id = ''
    this.jobAdObj.heading = this.heading
    this.jobAdObj.category = this.category
    this.jobAdObj.description = this.description
    this.jobAdObj.likes = this.likes
    this.jobAdObj.type = this.type

    this.data.updateAd(jobAd.id, this.jobAdObj)
    this.resetForm()
    console.log(jobAd);
  }
  applyForAd(jobAd: JobAd) {
    this.data.updateAd(jobAd.id, this.loggedIn)
  }
  deleteAd(jobAd: JobAd) {
    if (window.confirm(`Are you sure you want to delete ${jobAd.heading}?`))
      this.data.deleteAd(jobAd)
  }
  likeAd(jobAd: JobAd) {
    localStorage.setItem('liked', jobAd.id)
  }
}
