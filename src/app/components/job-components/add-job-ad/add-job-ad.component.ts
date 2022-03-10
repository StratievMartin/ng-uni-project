import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobAd } from 'src/app/models/job-ad.model';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { DataService } from 'src/app/services/data-service/data.service';

@Component({
  selector: 'app-add-job-ad',
  templateUrl: './add-job-ad.component.html',
  styleUrls: ['./add-job-ad.component.scss']
})
export class AddJobAdComponent implements OnInit {

  jobAdObj: JobAd = {
    id: '',
    heading: '',
    description: '',
    likes: '',
    type: '',
    category: '',
    author: ''
  }

  id: string = '';
  heading: string = "";
  description: string = "";
  likes: string = "";
  type: string = "";
  category: string = "";
  author: any = this.auth.isAdmin()

  isAdmin = this.auth.isAdmin() 

  constructor(private data: DataService,private router: Router,private auth: AuthService) { }

  ngOnInit(): void {
  }
  resetForm() {
    this.id = '';
    this.heading = "";
    this.description = "";
    this.likes = "";
    this.type = "";
    this.category = "";
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
    // author
    this.jobAdObj.author = this.isAdmin || ''
    
    this.data.addAd(this.jobAdObj)
    this.router.navigate(['/ads']);
    this.resetForm()
  }
}
