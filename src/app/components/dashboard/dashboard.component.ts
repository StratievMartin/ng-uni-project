import { Component, OnInit } from '@angular/core';
import { JobAd } from 'src/app/models/job-ad.model';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  jobAdsList: JobAd[] = [];
  jobAdObj : JobAd = {
    id: '',
    heading: '',
    description: '',
    likes: '',
    type: '',
    category: ''
  }

  id : string = '';
  heading: string = "";
  description: string = "";
  likes: string = "";
  type: string = "";
  category: string = "";

  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit(): void {
    this.getAllAds()
  }

  logOut() {
    this.auth.logout()
  }

  resetForm(){
    this.id  = '';
    this.heading = "";
    this.description = "";
    this.likes = "";
    this.type = "";
    this.category = "";
  }

  getAllAds(){
    this.data.getAllAds().subscribe(res => {
      this.jobAdsList = res.map((el: any) =>{
        const data = el.payload.doc.data();
        data.id = el.payload.doc.id;
        return data
      })
    }, err =>{
      alert('Fetching data error')
      console.log(err)
    })
  }
  addAd(){
    if(this.heading == '' || this.category == '' || this.description == '' || this.likes == '' || this.type == ''){
      alert('All fields are required!')
      return
    }
    this.jobAdObj.id = ''
    this.jobAdObj.heading =this.heading 
    this.jobAdObj.category =this.category 
    this.jobAdObj.description =this.description 
    this.jobAdObj.likes =this.likes 
    this.jobAdObj.type =this.type 

    this.data.addAd(this.jobAdObj)
    this.resetForm()
  }
  updateAd(jobAd: JobAd){
    console.log(jobAd);
     
  }
  deleteAd(jobAd : JobAd){
    if(window.confirm(`Are you sure you want to delete ${jobAd.heading}?`))
    this.data.deleteAd(jobAd)
  }
}
